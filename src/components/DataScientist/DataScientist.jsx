import React, { useRef, useEffect, useState } from "react";
import { FaMicrophone, FaPaperclip, FaTimes, FaPaperPlane, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import "../../chat.css";
import { heroBackground } from "../../assets";
import useDataScientist from "../../../hooks/useDataScientist";
import Visualization from './Visualization';

const formatText = (text) => {
  if (!text) return '';
  
  // URL regex pattern
  const urlPattern = /(\bhttps?:\/\/[^\s)\]}"']+)(?=[)\]}"']|\s|$)/g;
  
  return text
    .split('\n\n')
    .map(paragraph => {
      return paragraph
        .split('\n')
        .map(line => {
          return line
            .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
            .replace(/_(.*?)_/g, "<em>$1</em>")
            // Replace URLs with anchor tags
            .replace(urlPattern, url => `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-blue-300 hover:text-blue-400 underline break-all">${url}</a>`);
        })
        .join('<br>');
    })
    .join('</p><p>');
};

const MessageBubble = ({ message, onClick, isSelected }) => (
  <div onClick={onClick} className={`flex justify-start w-full ${message.chartData ? 'cursor-pointer hover:bg-opacity-90' : ''} ${isSelected ? 'ring-2 ring-blue-500 rounded-lg' : ''}`}>
    <div 
      className={`p-4 rounded-md max-w-[80%] transition-all ${
        message.sender === "user" 
          ? "bg-cyan-500 text-white ml-auto [&_a]:text-white [&_a]:hover:text-gray-200" 
          : "bg-gray-700 text-gray-300"
      }`}
    >
      <div 
        dangerouslySetInnerHTML={{ 
          __html: `<p>${formatText(message.text)}</p>` 
        }} 
        className="prose prose-invert max-w-none [&_a]:no-underline [&_a]:hover:underline"
        onClick={(e) => {
          // Prevent chart click handler when clicking links
          if (e.target.tagName === 'A') {
            e.stopPropagation();
          }
        }}
      />
      {message.chartData && <div className="mt-2 text-xs opacity-75">📊 Click to view chart</div>}
    </div>
  </div>
);
const InputBar = ({ inputRef, isInputDisabled, isTTSEnabled, isListening, onSendMessage, onToggleTTS, onStartListening, onStopListening, onFileUpload }) => (
  <div className="fixed bottom-0 left-0 w-full bg-gray-800 shadow-md z-20 p-2 sm:p-4 flex items-center gap-2">
    <button onClick={onToggleTTS} className={`p-2 sm:p-3 rounded-full transition duration-300 ${
      isTTSEnabled ? "bg-green-500 text-white hover:bg-cyan-600" : "bg-cyan-500 text-white hover:bg-cyan-600"
    }`}>
      {isTTSEnabled ? <FaVolumeUp /> : <FaVolumeMute />}
    </button>
    
    <input
      type="text"
      ref={inputRef}
      placeholder="Ask your question..."
      className="flex-grow p-2 sm:p-3 bg-gray-700 border border-gray-600 rounded-full text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-700"
      onKeyDown={(e) => {
        if (e.key === "Enter" && !isInputDisabled) {
          onSendMessage(inputRef.current.value);
        }
      }}
      disabled={isInputDisabled}
    />
    
    <button
      onClick={() => onSendMessage(inputRef.current.value)}
      className="bg-cyan-500 text-white p-2 sm:p-3 rounded-full hover:bg-blue-600 transition duration-300"
      disabled={isInputDisabled}
    >
      <FaPaperPlane />
    </button>
    
    <button
      onClick={isListening ? onStopListening : onStartListening}
      className="bg-cyan-500 text-white p-2 sm:p-3 rounded-full hover:bg-blue-600 transition duration-300"
      disabled={isInputDisabled}
    >
      {isListening ? <FaTimes /> : <FaMicrophone />}
    </button>
    
    <label className="bg-cyan-500 text-white p-2 sm:p-3 rounded-full hover:bg-blue-600 transition duration-300 cursor-pointer">
      <FaPaperclip />
      <input type="file" className="hidden" multiple onChange={onFileUpload} />
    </label>
  </div>
);

export const DataScientist = ({ hidden }) => {
  const input = useRef();
  const scrollContainerRef = useRef(null);
  const {
    conversation,
    sendMessage,
    uploadDocument,
    isLoading,
    isInputDisabled,
    isTTSEnabled,
    setIsTTSEnabled,
    chartData,
    chartType
  } = useDataScientist();
  const [localConversation, setLocalConversation] = useState([]);
  const [isListening, setIsListening] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const recognition = useRef(null);

  const scrollToBottom = () => {
    if (scrollContainerRef.current) {
      const scrollContainer = scrollContainerRef.current;
      scrollContainer.scrollTo({
        top: scrollContainer.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [localConversation, isLoading]);

  useEffect(() => {
    if (window.SpeechRecognition || window.webkitSpeechRecognition) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognition.current = new SpeechRecognition();
      recognition.current.continuous = false;
      recognition.current.interimResults = false;
      recognition.current.lang = "en-US";
      
      recognition.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        handleSendMessage(transcript);
      };
      
      recognition.current.onerror = () => stopListening();
      recognition.current.onend = () => setIsListening(false);
    }
  }, []);

  useEffect(() => {
    if (conversation.length > 0) {
      setLocalConversation(conversation.map(msg => ({
        ...msg,
        chartData: msg.chartData || null,
        chartType: msg.chartType || null
      })));
    }
  }, [conversation]);

  useEffect(() => {
    if (chartData && chartType) {
      setLocalConversation(prev => {
        const lastIndex = prev.length - 1;
        if (lastIndex >= 0) {
          const updatedConversation = [...prev];
          updatedConversation[lastIndex] = {
            ...updatedConversation[lastIndex],
            chartData,
            chartType
          };
          return updatedConversation;
        }
        return prev;
      });
      setSelectedMessage({
        ...localConversation[localConversation.length - 1],
        chartData,
        chartType
      });
    }
  }, [chartData, chartType]);

  const handleMessageClick = (message) => {
    if (message.chartData) {
      setSelectedMessage(message);
    }
  };

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

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    files.forEach((file) => uploadDocument(file, "default_user"));
  };

  const handleSendMessage = (text) => {
    if (!text.trim() || isInputDisabled) return;
    const newMessage = { text, sender: "user" };
    setLocalConversation((prev) => [...prev, newMessage]);
    sendMessage(text, "default_user");
    if (input.current) {
      input.current.value = "";
    }
  };

  const toggleTTS = () => {
    setIsTTSEnabled((prev) => !prev);
    const message = !isTTSEnabled 
      ? "Text-to-Speech enabled! Responses will include audio but may take longer to process."
      : "Text-to-Speech disabled! Audio responses are disabled for faster responses.";
    setShowNotification(message);
    setTimeout(() => setShowNotification(false), 3000);
  };

  if (hidden) return null;

  return (
    <div className="min-h-screen flex flex-col justify-between fixed w-full"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url(${heroBackground})`,
      }}>
      <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ opacity: 0.15 }} />

      <div className="fixed flex flex-col h-full w-full z-10">
        <div className="bg-gradient-to-r from-cyan-500 via-teal-600 to-blue-900 p-2 sm:p-9 rounded-lg shadow-lg text-center">
          <h1 className="text-3xl sm:text-4xl text-white font-bold">Data Scientist Pro</h1>
          <p className="text-lg sm:text-xl text-white mt-2">Your AI Datascience Assistant</p>
        </div>

        <div className="flex-grow flex flex-col overflow-hidden p-4">
          <div className="flex-grow flex flex-col md:flex-row gap-2">
            <div className={`bg-gray-900 bg-opacity-60 rounded-lg shadow-lg p-4 
              ${selectedMessage?.chartData || chartData 
                ? 'w-full md:w-1/2 h-[calc(50vh-8rem)] md:h-[calc(100vh-16rem)]' 
                : 'w-full h-[calc(100vh-16rem)]'
              } transition-all duration-300`}>
              <div 
                ref={scrollContainerRef}
                className="h-full overflow-y-auto no-scrollbar scroll-smooth"
              >
                <div className="space-y-4">
                  {localConversation.map((msg, index) => (
                    <MessageBubble 
                      key={index} 
                      message={msg}
                      onClick={() => handleMessageClick(msg)}
                      isSelected={msg === selectedMessage}
                    />
                  ))}
                  {isLoading && (
                    <div className="self-start bg-gray-700 text-gray-300 p-4 rounded-md max-w-[50%] flex gap-1">
                      <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></span>
                      <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                      <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {(selectedMessage?.chartData || chartData) && (
              <div className="w-full md:w-1/2 h-[calc(50vh-4rem)] md:h-[calc(100vh-16rem)] bg-gray-900 bg-opacity-60 rounded-lg shadow-lg p-4">
                <Visualization 
                  chartType={selectedMessage?.chartType || chartType} 
                  chartData={selectedMessage?.chartData || chartData} 
                />
              </div>
            )}
          </div>
        </div>

        <InputBar
          inputRef={input}
          isInputDisabled={isInputDisabled}
          isTTSEnabled={isTTSEnabled}
          isListening={isListening}
          onSendMessage={handleSendMessage}
          onToggleTTS={toggleTTS}
          onStartListening={startListening}
          onStopListening={stopListening}
          onFileUpload={handleFileUpload}
        />
      </div>

      {showNotification && (
        <div className="fixed bottom-24 left-1/2 transform -translate-x-1/2 bg-cyan-600 text-white p-4 rounded-lg shadow-md z-30">
          {showNotification}
        </div>
      )}
    </div>
  );
};