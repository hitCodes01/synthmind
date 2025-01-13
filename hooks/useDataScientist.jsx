import { useState, useCallback, useEffect } from "react";
import axios from "axios";

// Function to parse chart details from data string
const parseChartDetails = (dataString) => {
  console.log("Parsing chart details from data string:", dataString);

  try {
    const dataParts = dataString.split(", ");
    const labels = [];
    const data = [];

    dataParts.forEach((part, index) => {
      console.log(`Parsing part ${index}:`, part);
      const [label, value] = part.split(": ");
      if (label && value) {
        const parsedValue = parseFloat(value.trim());
        console.log(`Parsed label: "${label.trim()}", value: ${parsedValue}`);
        labels.push(label.trim());
        data.push(isNaN(parsedValue) ? 0 : parsedValue);
      } else {
        console.warn(`Invalid part format: "${part}"`);
      }
    });

    console.log("Final parsed chart details:", { labels, data });
    return { labels, data };
  } catch (error) {
    console.error("Error parsing chart details:", error);
    return { labels: [], data: [] };
  }
};

// Function to parse chart data from response
const parseChartData = (responseText) => {
  console.log("Parsing chart data from response text:", responseText);
  const pieChartRegex = /Pie Chart Data: ([^,]+),\s*\[(.+?)\]/;
  const barChartRegex = /Bar Chart Data:(?:\s*Series\s*(\d+):)?\s*([^,]+),\s*\[(.+?)\]/g;
  const lineChartRegex = /(?:Line|Multiline) Chart Data:(?:\s*Series\s*(\d+):)?\s*([^,]+),\s*\[(.+?)\]/g;

  // Colors for multiple series
  const seriesColors = [
    { backgroundColor: 'rgba(54, 162, 235, 0.8)', borderColor: 'rgba(54, 162, 235, 1)' },
    { backgroundColor: 'rgba(255, 99, 132, 0.8)', borderColor: 'rgba(255, 99, 132, 1)' },
    { backgroundColor: 'rgba(255, 206, 86, 0.8)', borderColor: 'rgba(255, 206, 86, 1)' },
    { backgroundColor: 'rgba(75, 192, 192, 0.8)', borderColor: 'rgba(75, 192, 192, 1)' },
  ];

  // Check for Pie Chart
  const pieMatch = responseText.match(pieChartRegex);
  if (pieMatch) {
    console.log("Pie chart pattern matched:", pieMatch);
    const parsedData = parseChartDetails(pieMatch[2]);
    return {
      chartType: "pie",
      chartData: {
        labels: parsedData.labels,
        datasets: [{
          data: parsedData.data,
          backgroundColor: [
            "rgba(255, 99, 132, 0.8)",
            "rgba(54, 162, 235, 0.8)",
            "rgba(255, 206, 86, 0.8)",
            "rgba(75, 192, 192, 0.8)",
            "rgba(153, 102, 255, 0.8)",
            "rgba(255, 159, 64, 0.8)",
            "rgba(199, 199, 199, 0.8)",
            "rgba(83, 102, 255, 0.8)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(199, 199, 199, 1)",
            "rgba(83, 102, 255, 1)",
          ],
          borderWidth: 1,
        }],
      }
    };
  }

  // Check for Bar Chart
  let barMatches = [...responseText.matchAll(barChartRegex)];
  if (barMatches.length > 0) {
    console.log("Bar chart patterns matched:", barMatches);
    let datasets = [];
    let labels = [];

    barMatches.forEach((match, index) => {
      const seriesName = match[2];
      console.log(`Processing bar series ${index + 1}:`, seriesName);
      const parsedData = parseChartDetails(match[3]);
      if (index === 0) labels = parsedData.labels;
      
      datasets.push({
        label: seriesName,
        data: parsedData.data,
        backgroundColor: seriesColors[index % seriesColors.length].backgroundColor,
        borderColor: seriesColors[index % seriesColors.length].borderColor,
        borderWidth: 1,
      });
    });
    console.log("Final bar chart data:", { labels, datasets });
    return { chartType: "bar", chartData: { labels, datasets } };
  }

  // Check for Line Chart
  let lineMatches = [...responseText.matchAll(lineChartRegex)];
  if (lineMatches.length > 0) {
    console.log("Line chart patterns matched:", lineMatches);
    let datasets = [];
    let labels = [];

    lineMatches.forEach((match, index) => {
      const seriesName = match[2];
      console.log(`Processing line series ${index + 1}:`, seriesName);
      const parsedData = parseChartDetails(match[3]);
      if (index === 0) labels = parsedData.labels;
      
      datasets.push({
        label: seriesName,
        data: parsedData.data,
        borderColor: seriesColors[index % seriesColors.length].borderColor,
        backgroundColor: seriesColors[index % seriesColors.length].backgroundColor,
        tension: 0.1,
        fill: true,
      });
    });
    console.log("Final line chart data:", { labels, datasets });
    return { chartType: "line", chartData: { labels, datasets } };
  }
  console.warn("No chart pattern matched in response text.");
  return { chartType: null, chartData: null };
};

const useDataScientist = () => {
  const [conversation, setConversation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const [isTTSEnabled, setIsTTSEnabled] = useState(false);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{
      label: 'Data',
      data: [],
      backgroundColor: 'rgba(54, 162, 235, 0.8)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }]
  });
  const [chartType, setChartType] = useState('bar');

  const playAudio = useCallback((ttsAudio) => {
    try {
      const audio = new Audio(`data:audio/wav;base64,${ttsAudio}`);
      setIsAudioPlaying(true);
      setIsInputDisabled(true);

      audio.onended = () => {
        setIsAudioPlaying(false);
        setIsInputDisabled(false);
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
  }, []);

  const sendMessage = useCallback(async (message, userId) => {
    if (isInputDisabled) return;

    setIsInputDisabled(true);
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post("http://localhost:3000/chat", {
        message,
        userId,
        ttsEnabled: isTTSEnabled,
      });

      const { response: botResponse, ttsAudio } = response.data;

      try {
        const { chartType: newChartType, chartData: newChartData } = parseChartData(botResponse);
        if (newChartType && newChartData) {
          setChartType(newChartType);
          setChartData(newChartData);
        }
      } catch (chartError) {
        console.error("Error parsing chart data:", chartError);
      }

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
      console.error("Error sending message to backend:", err);
      setIsInputDisabled(false);
    } finally {
      setIsLoading(false);
    }
  }, [isInputDisabled, isTTSEnabled, playAudio]);

  const uploadDocument = useCallback(async (file, userId) => {
    setIsLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("document", file);
    formData.append("userId", userId);
    formData.append("ttsEnabled", isTTSEnabled);

    try {
      const response = await axios.post("http://localhost:3000/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setConversation((prev) => [...prev, { sender: "bot", text: "Document uploaded successfully." }]);
      return response.data;
    } catch (err) {
      setError("Failed to upload document. Please try again.");
      console.error("Error uploading document:", err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [isTTSEnabled]);

  useEffect(() => {
    setIsInputDisabled(isAudioPlaying);
  }, [isAudioPlaying]);

  return {
    conversation,
    sendMessage,
    uploadDocument,
    isLoading,
    error,
    isAudioPlaying,
    isInputDisabled,
    isTTSEnabled,
    setIsTTSEnabled,
    chartData,
    chartType,
  };
};

export default useDataScientist;