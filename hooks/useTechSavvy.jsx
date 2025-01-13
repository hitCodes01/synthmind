import { useState, useCallback } from 'react';
import axios from 'axios';

const useTechSavvy = () => {
  const [conversation, setConversation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const playAudio = (ttsAudio) => {
    try {
      // Convert the base64 TTS audio into a playable audio URL
      const audio = new Audio(`data:audio/wav;base64,${ttsAudio}`);
      audio.play().catch((error) => {
        console.error("Audio playback failed:", error);
      });
    } catch (error) {
      console.error("Error creating audio object:", error);
    }
  };

  const sendMessage = useCallback(async (message, userId) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post('https://techsavvy-alpha.vercel.app/chat', {
        message,
        userId,
      });

      const botResponse = response.data.response; // The text response from the bot
      const ttsAudio = response.data.ttsAudio; // The TTS audio data in base64

      // Play audio if ttsAudio is present
      if (ttsAudio) {
        playAudio(ttsAudio);
      }

      // Update conversation history
      setConversation((prev) => [
        ...prev,
        { sender: 'user', text: message },
        { sender: 'bot', text: botResponse },
      ]);
    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const uploadDocument = useCallback(async (file, userId) => {
    setIsLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('document', file);
    formData.append('userId', userId);

    try {
      await axios.post('https://techsavvy-alpha.vercel.app/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setConversation((prev) => [
        ...prev,
        { sender: 'bot', text: 'Document uploaded successfully.' },
      ]);
    } catch (err) {
      setError('Failed to upload document. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { conversation, sendMessage, uploadDocument, isLoading, error };
};

export default useTechSavvy;