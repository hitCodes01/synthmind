import React, { useRef, useState } from "react";
import { FaMicrophone, FaPaperclip, FaTimes, FaPaperPlane } from "react-icons/fa";
import "../../chat.css"; 
import { heroBackground, brainwaveWhiteSymbol } from "../../assets"; 
import useStressBuster from "../../../hooks/useStressBuster";

export const StressBuster = ({ hidden }) => {
  const input = useRef();
  const { conversation, sendMessage, uploadDocument, isLoading, error } = useStressBuster();
  const [isListening, setIsListening] = useState(false);
  const recognition = useRef(null);

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
      style={{
        background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url(${heroBackground})`,
      }}
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${brainwaveWhiteSymbol})`,
          opacity: 0.15, 
          backgroundSize: "30%",
          backgroundRepeat: "no-repeat"
        }}
      />

      <div className="relative flex flex-col h-full w-full z-10">
        <div className="bg-gradient-to-r from-blue-500 via-green-400 to-green-700 p-4 sm:p-6 rounded-lg shadow-lg text-center mb-4">
          <h1 className="text-3xl sm:text-5xl text-white font-bold">Smart Stress Relief™</h1>
          <p className="text-lg sm:text-xl text-white mt-2">Your Stress Reliever</p>
        </div>

        {/* Conversation Section */}
        <div className="relative flex flex-col flex-grow p-4 overflow-y-auto bg-gray-900 bg-opacity-60 rounded-lg shadow-lg mb-24 space-y-3">
          {conversation.map((msg, index) => (
            <div
              key={index}
              className={`p-4 rounded-md transition-all ${
                msg.sender === "user"
                  ? "bg-green-500 text-white self-end animate-slide-left"
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
            placeholder="Ask your question..."
            ref={input}
            className="flex-grow p-2 sm:p-3 bg-gray-700 border border-gray-600 rounded-full text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage(input.current.value, "default_user");
                input.current.value = "";
              }
            }}
          />
          <button
            onClick={() => sendMessage(input.current.value, "default_user")}
            className="bg-green-500 text-white p-2 sm:p-3 rounded-full hover:bg-green-600 transition duration-300"
          >
            <FaPaperPlane />
          </button>
          <button
            onClick={isListening ? stopListening : startListening}
            className="bg-green-500 text-white p-2 sm:p-3 rounded-full hover:bg-green-600 transition duration-300"
          >
            {isListening ? <FaTimes /> : <FaMicrophone />}
          </button>
          <label className="bg-green-500 text-white p-2 sm:p-3 rounded-full hover:bg-green-600 transition duration-300 cursor-pointer">
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
