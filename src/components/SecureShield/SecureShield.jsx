import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { FaMicrophone, FaPaperclip, FaTimes, FaPaperPlane } from "react-icons/fa";
import "../../chat.css";
import { heroBackground } from "../../assets";
import useSecureShield from "../../../hooks/useSecureShield";

export const SecureShield = ({ hidden, ...props }) => {
  const input = useRef();
  const { conversation, sendMessage, uploadDocument, isLoading, error } = useSecureShield();
  const sceneRef = useRef(null);
  const [isListening, setIsListening] = useState(false);
  const recognition = useRef(null);

  useEffect(() => {
    if (!sceneRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    sceneRef.current.appendChild(renderer.domElement);

    // Create a torus shape for a tech look
    const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ffcc, wireframe: true });
    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);

    camera.position.z = 50;
    camera.position.y = 10;  

    const animate = function () {
      requestAnimationFrame(animate);
      torus.rotation.x += 0.01;
      torus.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      sceneRef.current.removeChild(renderer.domElement);
    };
  }, []);

  if (window.SpeechRecognition || window.webkitSpeechRecognition) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition.current = new SpeechRecognition();
    recognition.current.continuous = false;
    recognition.current.interimResults = false;
    recognition.current.lang = "en-US";
  }

  const startListening = () => {
    if (recognition.current) {
      setIsListening(true);
      recognition.current.start();
    }
  };

  const stopListening = () => {
    if (recognition.current) {
      setIsListening(false);
      recognition.current.stop();
    }
  };

  const handleSpeechResult = (event) => {
    const transcript = event.results[0][0].transcript;
    input.current.value = transcript;
    sendMessage(transcript, "default_user");
  };

  if (recognition.current) {
    recognition.current.onresult = handleSpeechResult;
    recognition.current.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      stopListening();
    };
    recognition.current.onend = () => {
      setIsListening(false);
    };
  }

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    files.forEach(file => uploadDocument(file, "default_user"));
  };

  if (hidden) {
    return null;
  }

  return (
    <div
      className="min-h-screen flex flex-col justify-between relative"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`, 
        }}
      />

      <div className="relative flex flex-col h-full w-full">
        <div className="bg-gradient-to-r from-cyan-500 via-teal-600 to-blue-900 p-4 sm:p-6 rounded-lg shadow-lg z-10 text-center mb-4">
          <h1 className="text-3xl sm:text-5xl text-white font-bold">SecureShield Sentry</h1>
          <p className="text-lg sm:text-xl text-white mt-2">Your Online Presence Guide!</p>
        </div>

        {/* 3D Torus Scene */}
        <div
          ref={sceneRef}
          className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
          style={{ top: '60%', transform: 'translateY(-60%)' }}
        />

        {/* Conversation Section */}
        <div className="relative z-10 flex flex-col flex-grow p-4 overflow-y-auto bg-gray-900 bg-opacity-60 rounded-lg shadow-lg mb-24 space-y-3">
          {conversation.map((msg, index) => (
            <div
              key={index}
              className={`p-4 rounded-md transition-all ${
                msg.sender === "user"
                  ? "bg-cyan-500 text-white self-end animate-slide-left"
                  : "bg-gray-700 text-gray-300 self-start animate-slide-right"
              }`}
            >
              <p>{msg.text}</p>
            </div>
          ))}
        </div>

        {/* Button Area */}
        <div className="fixed bottom-0 left-0 w-full bg-gray-800 shadow-md z-20 p-2 sm:p-4 flex items-center gap-2">
          <input
            type="text"
            placeholder="Type your query..."
            ref={input}
            className="flex-grow p-2 sm:p-3 bg-gray-700 border border-gray-600 rounded-full text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage(input.current.value, "default_user");
                input.current.value = "";
              }
            }}
          />
          <button
            onClick={() => sendMessage(input.current.value, "default_user")}
            className="bg-cyan-500 text-white p-2 sm:p-3 rounded-full hover:bg-cyan-600 transition duration-300"
          >
            <FaPaperPlane />
          </button>
          <button
            onClick={isListening ? stopListening : startListening}
            className="bg-cyan-500 text-white p-2 sm:p-3 rounded-full hover:bg-cyan-600 transition duration-300"
          >
            {isListening ? <FaTimes /> : <FaMicrophone />}
          </button>
          <label className="bg-cyan-500 text-white p-2 sm:p-3 rounded-full hover:bg-cyan-600 transition duration-300 cursor-pointer">
            <FaPaperclip />
            <input
              type="file"
              className="hidden"
              multiple
              onChange={handleFileUpload}
            />
          </label>
        </div>

        {isLoading && <p className="text-white mt-2 text-center">Loading...</p>}
        {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
      </div>
    </div>
  );
};
