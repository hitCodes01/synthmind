import React from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Visualization = ({ chartType, chartData }) => {
  if (!chartData?.datasets?.length || !chartData?.labels?.length) return null;

  // Modify the datasets to ensure no fill
  const modifiedChartData = {
    ...chartData,
    datasets: chartData.datasets.map(dataset => ({
      ...dataset,
      fill: false, // This removes the fill under the line
      tension: 0.4 // Optional: adds a slight curve to the line
    }))
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          usePointStyle: true,
          padding: 20,
        }
      },
      title: {
        display: true,
        text: chartType === 'line' ? 'Time Series Analysis' : 
              chartType === 'bar' ? 'Comparative Analysis' : 
              'Distribution Analysis',
        padding: {
          top: 10,
          bottom: 20
        }
      }
    },
    scales: chartType !== 'pie' ? {
      y: {
        beginAtZero: true,
        grid: {
          drawBorder: false,
          color: 'rgba(0, 0, 0, 0.1)'
        }
      },
      x: {
        grid: {
          display: true,
        }
      }
    } : undefined,
    interaction: {
      intersect: false,
      mode: 'index'
    },
    animation: {
      duration: 2000
    }
  };

  const renderChart = () => {
    const props = {
      data: chartType === 'line' ? modifiedChartData : chartData,
      options,
      className: "w-full h-full"
    };

    switch (chartType) {
      case 'line':
        return <Line {...props} />;
      case 'bar':
        return <Bar {...props} />;
      case 'pie':
        return <Pie {...props} />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full h-[80%]">
      {renderChart()}
    </div>
  );
};

export default Visualization;