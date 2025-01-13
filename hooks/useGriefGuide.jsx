import { useState, useCallback } from 'react';
import axios from 'axios';

const useGriefGuide = () => {
  const [conversation, setConversation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isMuted, setIsMuted] = useState(false); // New state for muting audio

  const sendMessage = useCallback(async (message, userId) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post('https://grief-guide.vercel.app/chat', {
        message,
        userId,
      });

      const botResponse = response.data.response;
      const ttsAudio = response.data.ttsAudio; // Get TTS audio in base64 format

      setConversation((prev) => [
        ...prev,
        { sender: 'user', text: message },
        { sender: 'bot', text: botResponse },
      ]);

      // Play TTS audio if not muted
      if (!isMuted && ttsAudio) {
        const audio = new Audio(`data:audio/wav;base64,${ttsAudio}`); // Create audio from base64
        audio.play().catch((playError) => {
          console.error('Audio playback failed:', playError);
        });
      }
    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [isMuted]); // Add isMuted to dependency array

  const uploadDocument = useCallback(async (file, userId) => {
    setIsLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('document', file);
    formData.append('userId', userId);

    try {
      await axios.post('https://grief-guide.vercel.app/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setConversation((prev) => [...prev, { sender: 'bot', text: 'Document uploaded successfully.' }]);
    } catch (err) {
      setError('Failed to upload document. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Function to toggle mute state
  const toggleMute = useCallback(() => {
    setIsMuted((prev) => !prev);
  }, []);

  return { 
    conversation, 
    sendMessage, 
    uploadDocument, 
    isLoading, 
    error, 
    isMuted, // Expose mute state
    toggleMute // Expose toggle function
  };
};

export default useGriefGuide;
