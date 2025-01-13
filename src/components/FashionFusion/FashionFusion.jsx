import React, { useRef, useState, useEffect } from "react";
import {
  FaMicrophone,
  FaPaperclip,
  FaTimes,
  FaPaperPlane,
  FaVolumeUp,
  FaVolumeMute,
} from "react-icons/fa";
import "../../chat.css";
import { heroBackground, fashion } from "../../assets";
import useFashionFusion  from "../../../hooks/useFashionFusion";

// Helper function to format text
const formatText = (text) => {
  if (!text) return '';
  
  return text
    .split('\n\n')
    .map(paragraph => {
      return paragraph
        .split('\n')
        .map(line => {
          return line
            .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
            .replace(/_(.*?)_/g, "<em>$1</em>");
        })
        .join('<br>');
    })
    .join('</p><p>');
};
export const FashionFusion = ({ hidden }) => {
  const chatContainerRef = useRef();
  const input = useRef();
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
  } = useFashionFusion();
  const [localConversation, setLocalConversation] = useState([]);
  const [isListening, setIsListening] = useState(false);
  const [showNotification, setShowNotification] = useState(false); // State for pop-up notification
  const recognition = useRef(null);

  // Sync localConversation with conversation from the hook
  useEffect(() => {
    if (conversation.length > 0) {
      setLocalConversation(conversation);
    }
  }, [conversation]);
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
  // Speech recognition setup
  if (window.SpeechRecognition || window.webkitSpeechRecognition) {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
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
    files.forEach((file) => uploadDocument(file, "default_user"));
  };

  const handleSendMessage = (text) => {
    if (!text.trim() || isInputDisabled) return;

    const newMessage = { text, sender: "user" };
    setLocalConversation((prev) => [...prev, newMessage]);

    sendMessage(text, "default_user");
    input.current.value = "";
  };

  const toggleTTS = () => {
    setIsTTSEnabled((prev) => {
      const newState = !prev;
      console.log(
        newState
          ? "Text-to-Speech has been enabled."
          : "Text-to-Speech has been disabled."
      );
      triggerNotification(
        newState
          ? "Text-to-Speech enabled! Responses will include an audio but may take slightly loger to process. Enjoy chatting !!!!"
          : "Text-to-Speech disabled! Audio responses are disabled,buckle up for fastest reponses !!!"
      );
      return newState;
    });
  };

  // Trigger notification
  const triggerNotification = (message) => {
    setShowNotification(message);
    setTimeout(() => setShowNotification(false), 3000); // Auto-hide after 3 seconds
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
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="fixed flex flex-col h-full w-full z-10">
        <div className="bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 p-4 sm:p-6 rounded-lg shadow-lg text-center">
          <h1 className="text-3xl sm:text-4xl text-white font-bold">
            FashionFusion Stylist
          </h1>
          <p className="text-lg sm:text-xl text-white mt-2">Your Fashion Advisor!</p>
        </div>

        {/* Conversation Section */}
        <div
        ref={chatContainerRef}
         className="relative flex flex-col flex-grow p-4 overflow-y-auto bg-gray-900 bg-opacity-60 rounded-lg shadow-lg mb-24 space-y-4">
          {localConversation.map((msg, index) => (
            <div
              key={index}
              className={`p-4 rounded-md max-w-[90%] sm:max-w-[70%] transition-all ${
                msg.sender === "user"
                  ? "bg-blue-500 text-white self-end animate-slide-left"
                  : "bg-gray-700 text-gray-300 self-start animate-slide-right"
              }`}
            >
              <p dangerouslySetInnerHTML={{ __html: formatText(msg.text) }} />
            </div>
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
                ? "bg-green-500 text-white hover:bg-green-600"
                : "bg-red-500 text-white hover:bg-red-600"
            }`}
          >
            {isTTSEnabled ? <FaVolumeUp /> : <FaVolumeMute />}
          </button>
          <input
            type="text"
            placeholder="Ask your legal question..."
            ref={input}
            className="flex-grow p-2 sm:p-3 bg-gray-700 border border-gray-600 rounded-full text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !isInputDisabled) {
                handleSendMessage(input.current.value);
              }
            }}
            disabled={isInputDisabled}
          />
          <button
            onClick={() => handleSendMessage(input.current.value)}
            className="bg-blue-500 text-white p-2 sm:p-3 rounded-full hover:bg-blue-600 transition duration-300"
            disabled={isInputDisabled}
          >
            <FaPaperPlane />
          </button>
          <button
            onClick={isListening ? stopListening : startListening}
            className="bg-blue-500 text-white p-2 sm:p-3 rounded-full hover:bg-blue-600 transition duration-300"
            disabled={isInputDisabled}
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
              disabled={isInputDisabled}
            />
          </label>
        </div>

        {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
        {showNotification && (
          <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white p-3 rounded-lg shadow-lg z-30">
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
