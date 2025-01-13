import React, { useRef, useState } from "react";
import { useChat } from "../../../hooks/SocialSphereUseChat";
import { QuickQuestions } from "./QuickQuestions";
import "../../chat.css";

export const UI = ({ hidden, ...props }) => {
  const input = useRef();
  const [showQuestions, setShowQuestions] = useState(false);
  const [isMessageVisible, setIsMessageVisible] = useState(true); // State for message visibility
  const { chat, loading, cameraZoomed, setCameraZoomed, message } = useChat();
  const [isListening, setIsListening] = useState(false);
  const recognition = useRef(null);

  // Initialize Speech Recognition
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
    input.current.value = transcript;
    sendMessage();
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

  const sendMessage = () => {
    const text = input.current.value;
    if (!loading && !message) {
      chat(text);
      input.current.value = "";
    }
  };

  const handleQuestionClick = (question) => {
    input.current.value = question;
  };

  if (hidden) {
    return null;
  }

  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 z-10 flex justify-between p-4 flex-col pointer-events-none">
        <div className="self-start bg-gradient-to-r bg-pink-500 hover:bg-pink-600 p-4 rounded-lg shadow-lg animate-fadeIn">
          <h1 className="font-extrabold text-3xl text-white drop-shadow-md">
            SocialSphere Influencer
          </h1>
          <p className="text-white text-lg">Boom Your Social Media Game !!!</p>
        </div>

        {/* QuickQuestions Section */}
        <div className="w-full flex flex-col items-end justify-center gap-4 pointer-events-auto mt-[-5rem]">
          <div className="relative">
            <button
              onClick={() => setShowQuestions(!showQuestions)}
              className="sm:hidden mt-4 pointer-events-auto bg-pink-500 hover:bg-pink-600 text-white p-4 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3C7.03 3 3 7.03 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-4.97-4.03-9-9-9zm.75 15h-1.5v-1.5h1.5V18zm.75-3.75h-3v-1.5c0-1.5 1.5-2.25 2.25-2.25.75 0 2.25.75 2.25 2.25s-.75 2.25-1.5 2.25z"
                />
              </svg>
            </button>

            <div
              className={`${
                showQuestions ? "block" : "hidden"
              } sm:block absolute top-0 right-16 sm:static`}
            >
              <QuickQuestions onQuestionClick={handleQuestionClick} />
            </div>
          </div>

          {/* Zoom In/Out Button */}
          <button
            onClick={() => setCameraZoomed(!cameraZoomed)}
            className="mt-4 pointer-events-auto bg-pink-500 hover:bg-pink-600 text-white p-4 rounded-md"
          >
            {cameraZoomed ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM13.5 10.5h-6"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
                />
              </svg>
            )}
          </button>
        </div>

        <div className="flex items-center gap-2 pointer-events-auto max-w-screen-sm w-full mx-auto">
          <input
            className="w-full placeholder:text-gray-800 placeholder:italic p-4 rounded-md bg-opacity-50 bg-white backdrop-blur-md"
            placeholder="Type a message..."
            ref={input}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
          />
          <button
            disabled={loading || message}
            onClick={sendMessage}
            className={` bg-pink-500 hover:bg-pink-600 text-white p-4 px-10 font-semibold uppercase rounded-md ${
              loading || message ? "cursor-not-allowed opacity-30" : ""
            }`}
          >
            Send
          </button>
          <button
            onClick={isListening ? stopListening : startListening}
            className="bg-pink-500 hover:bg-pink-600 text-white p-4 rounded-md"
          >
            {isListening ? "Stop" : "Speak"}
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
      {/* Message Text with Toggle Button */}
      {message && message.text && (
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center">
            <button
              onClick={() => setIsMessageVisible(!isMessageVisible)}
              className="bg-transparent p-2"
            >
              {isMessageVisible ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12s4-8 9-8 9 8 9 8-4 8-9 8-9-8-9-8z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 15c1.656 0 3-1.343 3-3s-1.344-3-3-3-3 1.343-3 3 1.344 3 3 3z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 12a3 3 0 100-6 3 3 0 000 6z"
                  />
                </svg>
              )}
            </button>
            {isMessageVisible && (
              <div className="bg-gray-800 p-4 rounded-md shadow-lg">
                <p>{message.text}</p>
              </div>
            )}
          </div>
        )}
    </>
  );
};
