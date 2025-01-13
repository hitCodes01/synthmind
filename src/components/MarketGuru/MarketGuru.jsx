import React, { useRef, useState } from "react";
import { FaMicrophone, FaPaperclip, FaTimes, FaPaperPlane } from "react-icons/fa";
import "../../chat.css"; 
import { heroBackground, fashion } from "../../assets"; 
import useMarketGuru from "../../../hooks/useMarketGuru";

// Helper function to format text
const formatText = (text) => {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
    .replace(/_(.*?)_/g, '<em>$1</em>'); 
};

export const MarketGuru = ({ hidden }) => {
  const input = useRef();
  const { conversation, sendMessage, uploadDocument, isLoading, error } = useMarketGuru();
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
          backgroundImage: `url(${fashion})`,
          opacity: 0.15, 
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat"
        }}
      />

      <div className="relative flex flex-col h-full w-full z-10">
        <div className="bg-gradient-to-r from-blue-800 via-blue-600 to-gray-700 p-4 sm:p-6 rounded-lg shadow-lg text-center mb-4">
          <h1 className="text-3xl sm:text-5xl text-white font-bold">Market Guru</h1>
          <p className="text-lg sm:text-xl text-white mt-2">Know The Market!</p>
        </div>

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
            placeholder="Ask your question..."
            ref={input}
            className="flex-grow p-2 sm:p-3 bg-gray-700 border border-gray-600 rounded-full text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage(input.current.value, "default_user");
                input.current.value = "";
              }
            }}
          />
          <button
            onClick={() => sendMessage(input.current.value, "default_user")}
            className="bg-blue-500 text-white p-2 sm:p-3 rounded-full hover:bg-blue-600 transition duration-300"
          >
            <FaPaperPlane />
          </button>
          <button
            onClick={isListening ? stopListening : startListening}
            className="bg-blue-500 text-white p-2 sm:p-3 rounded-full hover:bg-blue-600 transition duration-300"
          >
            {isListening ? <FaTimes /> : <FaMicrophone />}
          </button>
          <label className="bg-blue-500 text-white p-2 sm:p-3 rounded-full hover:bg-blue-600 transition duration-300 cursor-pointer">
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
