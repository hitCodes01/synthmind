import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { FaMicrophone, FaPaperclip, FaTimes, FaPaperPlane } from "react-icons/fa";
import "../../chat.css";
import { heroBackground } from "../../assets";
import useMatchMaker from "../../../hooks/useMatchMaker";

// Helper function to format text
const formatText = (text) => {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold
    .replace(/_(.*?)_/g, '<em>$1</em>'); // Italics
};

export const MatchMaker = ({ hidden, ...props }) => {
  const input = useRef();
  const { conversation, sendMessage, uploadDocument, isLoading, error } = useMatchMaker();
  const heartRef = useRef(null); 
  const [isListening, setIsListening] = useState(false);
  const recognition = useRef(null);

  useEffect(() => {
    if (!heartRef.current) return;
  
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    heartRef.current.appendChild(renderer.domElement);
  
    // Create a heart shape
    const x = -5, y = 5;
    const heartShape = new THREE.Shape();
  
    heartShape.moveTo(x + 5, y + 5);
    heartShape.bezierCurveTo(x + 5, y + 5, x + 4, y, x, y);
    heartShape.bezierCurveTo(x - 6, y, x - 6, y + 7, x - 6, y + 7);
    heartShape.bezierCurveTo(x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19);
    heartShape.bezierCurveTo(x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7);
    heartShape.bezierCurveTo(x + 16, y + 7, x + 16, y, x + 10, y);
    heartShape.bezierCurveTo(x + 7, y, x + 5, y + 5, x + 5, y + 5);
  
    const geometry = new THREE.ShapeGeometry(heartShape);
    const material = new THREE.MeshBasicMaterial({
      color: 0xff66b2,
      opacity: 0.3, 
      transparent: true,
    });
    const heart = new THREE.Mesh(geometry, material);
    scene.add(heart);
    heart.rotation.z = Math.PI;
  
    camera.position.z = 50;
  
    let scaleDirection = 1; 
    const maxScale = 1.2; 
    const minScale = 0.8;
  
    const animate = function () {
      requestAnimationFrame(animate);
  
      // Pulsating effect
      if (heart.scale.x >= maxScale) {
        scaleDirection = -1; 
      } else if (heart.scale.x <= minScale) {
        scaleDirection = 1;
      }
  
      const scaleSpeed = 0.005; 

    heart.scale.x += scaleSpeed * scaleDirection;
    heart.scale.y += scaleSpeed * scaleDirection;
  
      renderer.render(scene, camera);
    };
  
    animate();
  
    return () => {
      heartRef.current.removeChild(renderer.domElement);
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
      className="min-h-screen flex flex-col justify-between bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(${heroBackground})`,
      }}
    >
      <div className="relative flex flex-col h-full w-full">
        <div className="bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 p-4 sm:p-6 rounded-lg shadow-lg z-10 text-center mb-4">
          <h1 className="text-3xl sm:text-5xl text-white font-bold">Matchmaker Pro™</h1>
          <p className="text-lg sm:text-xl text-white mt-2">Your Perfect Partner Selector</p>
        </div>
        <div
          ref={heartRef}
          className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
        />
  
        {/* Conversation Section */}
        <div className="relative flex flex-col flex-grow p-4 overflow-y-auto bg-gray-900 bg-opacity-60 rounded-lg shadow-lg mb-24 space-y-3">
          {conversation.map((msg, index) => (
            <div
              key={index}
              className={`p-4 rounded-md max-w-[50%] transition-all ${
                msg.sender === "user"
                  ? "bg-blue-500 text-white self-end animate-slide-left"
                  : "bg-gray-700 text-gray-300 self-start animate-slide-right"
              }`}
            >
              <p dangerouslySetInnerHTML={{ __html: formatText(msg.text) }} />
            </div>
          ))}
        </div>
        {/* Button Area */}
        <div className="fixed bottom-0 left-0 w-full bg-gray-800 shadow-md z-20 p-2 sm:p-4 flex items-center gap-2">
          <input
            type="text"
            placeholder="Type your query..."
            ref={input}
            className="flex-grow p-2 sm:p-3 bg-gray-700 border border-gray-600 rounded-full text-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage(input.current.value, "default_user");
                input.current.value = "";
              }
            }}
          />
          <button
            onClick={() => sendMessage(input.current.value, "default_user")}
            className="bg-pink-500 text-white p-2 sm:p-3 rounded-full hover:bg-pink-600 transition duration-300"
          >
            <FaPaperPlane />
          </button>
          <button
            onClick={isListening ? stopListening : startListening}
            className="bg-pink-500 text-white p-2 sm:p-3 rounded-full hover:bg-pink-600 transition duration-300"
          >
            {isListening ? <FaTimes /> : <FaMicrophone />}
          </button>
          <label className="bg-pink-500 text-white p-2 sm:p-3 rounded-full hover:bg-pink-600 transition duration-300 cursor-pointer">
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
