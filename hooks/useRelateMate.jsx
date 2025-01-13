import { useState, useCallback, useEffect } from "react";
import axios from "axios";

const useRelateMate = () => {
  const [conversation, setConversation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false); // Tracks TTS playback status
  const [isInputDisabled, setIsInputDisabled] = useState(false); // Tracks input lock
  const [isTTSEnabled, setIsTTSEnabled] = useState(false); // Tracks whether TTS is enabled

  const playAudio = (ttsAudio) => {
    try {
      const audio = new Audio(`data:audio/wav;base64,${ttsAudio}`);

      setIsAudioPlaying(true);
      console.log("Audio is playing:", true);

      audio.onended = () => {
        setIsAudioPlaying(false);
        setIsInputDisabled(false);
        console.log("Audio has ended:", false);
      };

      audio.play().catch((error) => {
        console.error("Audio playback failed:", error);
        setIsAudioPlaying(false);
        setIsInputDisabled(false);
      });
    } catch (error) {
      console.error("Error creating audio object:", error);
      setIsAudioPlaying(false);
      setIsInputDisabled(false);
    }
  };

  const sendMessage = useCallback(
    async (message, userId) => {
      if (isInputDisabled) {
        console.warn("Cannot send message. Input is disabled.");
        return;
      }

      setIsInputDisabled(true);
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.post("https://relate-mate.vercel.app/chat", {
          message,
          userId,
          ttsEnabled: isTTSEnabled, // Send TTS state to the backend
        });

        const botResponse = response.data.response; // Text response
        const ttsAudio = response.data.ttsAudio; // TTS audio data in base64

        if (isTTSEnabled && ttsAudio) {
          playAudio(ttsAudio);
        } else {
          setIsInputDisabled(false);
        }

        setConversation((prev) => [
          ...prev,
          { sender: "user", text: message },
          { sender: "bot", text: botResponse },
        ]);
      } catch (err) {
        setError("Failed to send message. Please try again.");
        console.error(err);
        setIsInputDisabled(false);
      } finally {
        setIsLoading(false);
      }
    },
    [isInputDisabled, isTTSEnabled]
  );

  const uploadDocument = useCallback(
    async (file, userId) => {
      setIsLoading(true);
      setError(null);

      const formData = new FormData();
      formData.append("document", file);
      formData.append("userId", userId);
      formData.append("ttsEnabled", isTTSEnabled); // Include TTS state in the request

      try {
        await axios.post("https://relate-mate.vercel.app/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        setConversation((prev) => [
          ...prev,
          { sender: "bot", text: "Document uploaded successfully." },
        ]);
      } catch (err) {
        setError("Failed to upload document. Please try again.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    },
    [isTTSEnabled]
  );

  useEffect(() => {
    if (isAudioPlaying) {
      setIsInputDisabled(true);
    } else {
      setIsInputDisabled(false);
    }
  }, [isAudioPlaying]);

  return {
    conversation,
    sendMessage,
    uploadDocument,
    isLoading,
    error,
    isAudioPlaying,
    isInputDisabled,
    isTTSEnabled, // Expose TTS toggle state
    setIsTTSEnabled, // Provide a way to toggle TTS on/off
  };
};

export default useRelateMate;
