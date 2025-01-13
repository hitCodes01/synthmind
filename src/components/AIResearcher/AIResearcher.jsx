import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import {
  FaMicrophone,
  FaPaperclip,
  FaTimes,
  FaPaperPlane,
  FaVolumeUp,
  FaVolumeMute,
} from "react-icons/fa";
import "../../chat.css";
import { heroBackground } from "../../assets";
import useAIResearcher from "../../../hooks/useAIResearcher";

// Enhanced text formatting function
const formatText = (text) => {
  if (!text) return '';
  
  return text
    .split('\n\n')
    .map(paragraph => {
      return paragraph
        .split('\n')
        .map(line => {
          return line
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/_(.*?)_/g, '<em>$1</em>');
        })
        .join('<br>');
    })
    .join('</p><p>');
};

// Message component for better text rendering
const MessageBubble = ({ message, sender }) => {
  return (
    <div
      className={`p-4 rounded-md max-w-[80%] sm:max-w-[70%] transition-all ${
        sender === "user"
          ? "bg-cyan-500 text-white self-end animate-slide-left"
          : "bg-gray-700 text-gray-300 self-start animate-slide-right"
      }`}
    >
      <div 
        className="prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{
          __html: `<p>${formatText(message)}</p>`
        }}
      />
    </div>
  );
};

export const AIResearcher = ({ hidden }) => {
  const input = useRef();
  const chatContainerRef = useRef();
  const sceneRef = useRef(null);
  const {
    conversation,
    sendMessage,
    uploadDocument,
    isLoading,
    error,
    isAudioPlaying,
    isInputDisabled,
    isTTSEnabled,
    setIsTTSEnabled,
  } = useAIResearcher();
  const [localConversation, setLocalConversation] = useState([]);
  const [isListening, setIsListening] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const recognition = useRef(null);

  // Three.js setup
  useEffect(() => {
    if (!sceneRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    sceneRef.current.appendChild(renderer.domElement);

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

  // Auto-scroll effect
  useEffect(() => {
    if (chatContainerRef.current) {
      const scrollContainer = chatContainerRef.current;
      const scrollToBottom = () => {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      };
      scrollToBottom();

      const timeoutId = setTimeout(scrollToBottom, 100);
      return () => clearTimeout(timeoutId);
    }
  }, [localConversation, isLoading]);

  // Sync localConversation with conversation from the hook
  useEffect(() => {
    if (conversation.length > 0) {
      setLocalConversation(conversation);
    }
  }, [conversation]);

  // Speech recognition setup
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
    handleSendMessage(transcript);
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

  const handleSendMessage = (text) => {
    if (!text.trim() || isInputDisabled) return;

    const newMessage = { text, sender: "user" };
    setLocalConversation(prev => [...prev, newMessage]);

    sendMessage(text, "default_user");
    input.current.value = "";
  };

  const toggleTTS = () => {
    setIsTTSEnabled(prev => {
      const newState = !prev;
      triggerNotification(
        newState
          ? "Text-to-Speech enabled! Responses will include audio but may take slightly longer to process."
          : "Text-to-Speech disabled! Audio responses are disabled, expect faster responses!"
      );
      return newState;
    });
  };

  const triggerNotification = (message) => {
    setShowNotification(message);
    setTimeout(() => setShowNotification(false), 3000);
  };

  if (hidden) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col justify-between relative">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
        }}
      />

      <div className="fixed flex flex-col h-full w-full">
        <div className="bg-gradient-to-r from-cyan-500 via-teal-600 to-blue-900 p-4 sm:p-6 rounded-lg shadow-lg z-10 text-center mb-4">
          <h1 className="text-3xl sm:text-5xl text-white font-bold">AI Researcher Pro™</h1>
          <p className="text-lg sm:text-xl text-white mt-2">Your Research Partner!</p>
        </div>

        {/* 3D Torus Scene */}
        <div
          ref={sceneRef}
          className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
          style={{ top: '60%', transform: 'translateY(-60%)' }}
        />

        {/* Conversation Section */}
        <div
          ref={chatContainerRef}
          className="relative z-10 flex flex-col flex-grow p-4 overflow-y-auto bg-gray-900 bg-opacity-60 rounded-lg shadow-lg mb-24 space-y-3"
          style={{ scrollBehavior: "smooth" }}
        >
          {localConversation.map((msg, index) => (
            <MessageBubble
              key={index}
              message={msg.text}
              sender={msg.sender}
            />
          ))}
          {isLoading && (
            <div
              className="self-start bg-gray-700 text-gray-300 p-4 rounded-md max-w-[50%]"
              style={{ display: "flex", gap: "5px" }}
            >
              <span style={dotStyle}></span>
              <span style={{ ...dotStyle, animationDelay: "0.2s" }}></span>
              <span style={{ ...dotStyle, animationDelay: "0.4s" }}></span>
            </div>
          )}
        </div>

        {/* Button Area */}
        <div className="fixed bottom-0 left-0 w-full bg-gray-800 shadow-md z-20 p-2 sm:p-4 flex items-center gap-2">
          <button
            onClick={toggleTTS}
            className={`p-2 sm:p-3 rounded-full transition duration-300 ${
              isTTSEnabled
                ? "bg-cyan-500 text-white hover:bg-cyan-600"
                : "bg-red-500 text-white hover:bg-red-600"
            }`}
          >
            {isTTSEnabled ? <FaVolumeUp /> : <FaVolumeMute />}
          </button>
          <input
            type="text"
            placeholder="Type your query..."
            ref={input}
            className="flex-grow p-2 sm:p-3 bg-gray-700 border border-gray-600 rounded-full text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !isInputDisabled) {
                handleSendMessage(input.current.value);
              }
            }}
            disabled={isInputDisabled}
          />
          <button
            onClick={() => handleSendMessage(input.current.value)}
            className="bg-cyan-500 text-white p-2 sm:p-3 rounded-full hover:bg-cyan-600 transition duration-300"
            disabled={isInputDisabled}
          >
            <FaPaperPlane />
          </button>
          <button
            onClick={isListening ? stopListening : startListening}
            className="bg-cyan-500 text-white p-2 sm:p-3 rounded-full hover:bg-cyan-600 transition duration-300"
            disabled={isInputDisabled}
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
              disabled={isInputDisabled}
            />
          </label>
        </div>

        {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
        {showNotification && (
          <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-cyan-600 text-white p-3 rounded-lg shadow-lg z-30">
            {showNotification}
          </div>
        )}
      </div>
    </div>
  );
};

// Typing animation styles
const dotStyle = {
  width: "8px",
  height: "8px",
  backgroundColor: "#ccc",
  borderRadius: "50%",
  animation: "typing 1.5s infinite",
};

const keyframes = `
@keyframes typing {
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
`;

// Injecting styles directly into the document
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(keyframes, styleSheet.cssRules.length);