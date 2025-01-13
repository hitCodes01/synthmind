import React from 'react';
import { BarChart3 } from 'lucide-react';
import Visualization from './Visualization';
const isValidChartData = (data) => {
  return data && 
    typeof data === 'object' && 
    (Array.isArray(data) ? data.length > 0 : Object.keys(data).length > 0);
};

const VisualizationContainer = ({ selectedMessage, chartData, chartType }) => {
  // Check if we have valid chart data either from selected message or current chart
  const hasValidData = isValidChartData(selectedMessage?.chartData) || isValidChartData(chartData);
  
  return (
    <div className="w-full h-full">
      {hasValidData ? (
        <Visualization 
          chartType={selectedMessage?.chartType || chartType} 
          chartData={selectedMessage?.chartData || chartData} 
        />
      ) : (
        <div className="h-full flex flex-col items-center justify-center text-gray-400 p-8">
          <BarChart3 className="w-16 h-16 mb-4" />
          <h3 className="text-xl font-semibold mb-2">No Visualization Yet</h3>
          <p className="text-center text-sm max-w-md">
            Ask questions about your data or upload a dataset to see visualizations appear here. 
            Try asking for charts, trends, or statistical analysis.
          </p>
          <div className="mt-6 space-y-2 text-sm">
            <p className="text-cyan-400">Sample questions you can ask:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-400">
              <li>"Show me a trend chart of monthly sales"</li>
              <li>"Create a bar chart comparing categories"</li>
              <li>"Visualize the distribution of values"</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default VisualizationContainer;