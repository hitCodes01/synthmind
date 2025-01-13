import { createContext, useContext, useEffect, useState } from "react";

const backendUrl = "http://54.211.145.249:3000"


const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cameraZoomed, setCameraZoomed] = useState(true);

  const chat = async (inputMessage) => {
    setLoading(true);

    const response = await fetch(`${backendUrl}/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: inputMessage }),
    });

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";

    const processText = ({ done, value }) => {
      if (done) {
        setLoading(false);
        return;
      }

      buffer += decoder.decode(value, { stream: true });
      let parts = buffer.split("\n");

      // Process all complete JSON parts
      for (let i = 0; i < parts.length - 1; i++) {
        if (parts[i]) {
          try {
            const json = JSON.parse(parts[i]);
            setMessages((messages) => [...messages, ...json.messages]);
          } catch (error) {
            console.error("Failed to parse JSON", error, parts[i]);
          }
        }
      }

      // Save the last incomplete part back to the buffer
      buffer = parts[parts.length - 1];

      reader.read().then(processText);
    };

    reader.read().then(processText);
  };

  const onMessagePlayed = () => {
    setMessages((messages) => messages.slice(1));
  };

  useEffect(() => {
    if (messages.length > 0) {
      setMessage(messages[0]);
    } else {
      setMessage(null);
    }
  }, [messages]);

  return (
    <ChatContext.Provider
      value={{
        chat,
        message,
        onMessagePlayed,
        loading,
        cameraZoomed,
        setCameraZoomed,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};

export default function Chat() {
  const { chat, message, onMessagePlayed, loading, cameraZoomed, setCameraZoomed } = useChat();
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      chat(input);
      setInput("");
    }
  };

  return (
    <div>
      <div>
        {message && (
          <div>
            <p>{message.text}</p>
            {/* Trigger onMessagePlayed when the message is done being displayed/played */}
            <button onClick={onMessagePlayed}>Next</button>
          </div>
        )}
      </div>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={handleSend} disabled={loading}>
        Send
      </button>
    </div>
  );
}
