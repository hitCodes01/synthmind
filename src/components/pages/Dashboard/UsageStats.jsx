import React, { useState } from 'react';
import { FaArrowRight, FaDownload, FaRobot } from 'react-icons/fa';
import Sidebar from '../../Sidebar';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Sample data for the charts
const data = [
  { name: 'FutureFarm Agronomist', usageTime: 40, interactionCount: 240, efficiency: 80 },
  { name: 'FinWiz Bot', usageTime: 30, interactionCount: 139, efficiency: 70 },
  { name: 'EduSynth Tutor', usageTime: 20, interactionCount: 980, efficiency: 90 },
  { name: 'MindMate Pro', usageTime: 27, interactionCount: 390, efficiency: 85 },
  { name: 'HealthBot 360', usageTime: 18, interactionCount: 480, efficiency: 95 },
];

const summaryData = [
  { name: 'Day 1', totalUsage: 20 },
  { name: 'Day 2', totalUsage: 30 },
  { name: 'Day 3', totalUsage: 25 },
  { name: 'Day 4', totalUsage: 35 },
  { name: 'Day 5', totalUsage: 40 },
  { name: 'Day 6', totalUsage: 50 },
  { name: 'Day 7', totalUsage: 60 },
];

const UsageStatistics = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-4 sm:p-8 bg-gray-100 overflow-y-auto lg:pl-80 sm:pt-10">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-500 text-center">Usage Statistics</h1>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:bg-blue-50 transition-colors duration-300 cursor-pointer" onClick={() => handleSectionChange('overview')}>
            <div className="flex items-center justify-between text-blue-500">
              <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">Overview</h2>
              <FaArrowRight className="text-blue-600" />
            </div>
            <p className="text-gray-700">Summary of your interaction with the smartbots over the past week/month.</p>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:bg-blue-50 transition-colors duration-300 cursor-pointer" onClick={() => handleSectionChange('graphs-charts')}>
            <div className="flex items-center justify-between text-blue-500">
              <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">Graphs and Charts</h2>
              <FaArrowRight className="text-blue-600" />
            </div>
            <p className="text-gray-700">Visual representation of usage statistics and performance metrics.</p>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:bg-blue-50 transition-colors duration-300 cursor-pointer" onClick={() => handleSectionChange('detailed-reports')}>
            <div className="flex items-center justify-between text-blue-500">
              <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">Detailed Reports</h2>
              <FaArrowRight className="text-blue-600" />
            </div>
            <p className="text-gray-700">In-depth reports on each smartbot’s usage and performance metrics.</p>
          </div>
        </div>

        <div className="mt-8">
          {activeSection === 'overview' && (
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">Overview</h2>
              <p className="text-gray-700 mb-4">Summary of your interaction with the smartbots over the past week/month.</p>
              <div className="mb-8 grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="bg-blue-50 p-4 rounded-lg shadow-sm text-center">
                  <h3 className="text-md sm:text-lg font-medium text-blue-500 mb-2">Total Smartbots</h3>
                  <p className="text-xl sm:text-2xl font-semibold text-blue-700">5</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg shadow-sm text-center">
                  <h3 className="text-md sm:text-lg font-medium text-blue-500 mb-2">Total Interactions</h3>
                  <p className="text-xl sm:text-2xl font-semibold text-blue-700">2280</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg shadow-sm text-center">
                  <h3 className="text-md sm:text-lg font-medium text-blue-500 mb-2">Average Efficiency</h3>
                  <p className="text-xl sm:text-2xl font-semibold text-blue-700">84%</p>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <h3 className="text-md sm:text-lg font-medium text-blue-500 mb-2">Usage Trend</h3>
                <div className="h-64 sm:h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={summaryData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="totalUsage" stroke="#8884d8" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'graphs-charts' && (
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">Graphs and Charts</h2>
              <p className="text-gray-700 mb-4">Visual representation of usage statistics and performance metrics.</p>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                  <h3 className="text-md sm:text-lg font-medium text-blue-500 mb-2">Usage Time</h3>
                  <div className="h-64 sm:h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="usageTime" fill="#8884d8" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                  <h3 className="text-md sm:text-lg font-medium text-blue-500 mb-2">Interaction Count</h3>
                  <div className="h-64 sm:h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="interactionCount" stroke="#8884d8" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                  <h3 className="text-md sm:text-lg font-medium text-blue-500 mb-2">Efficiency Metrics</h3>
                  <div className="h-64 sm:h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="efficiency" stroke="#82ca9d" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'detailed-reports' && (
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">Detailed Reports</h2>
              <p className="text-gray-700 mb-4">In-depth reports on each smartbot’s usage and performance metrics.</p>
              <div className="space-y-4">
                {data.map((bot, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm">
                    <div className="flex items-center mb-4">
                      <FaRobot className="text-blue-500 mr-4" />
                      <h3 className="text-md sm:text-lg font-medium text-blue-500">{bot.name}</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="text-sm sm:text-md font-medium text-gray-600">Usage Time</h4>
                        <p className="text-md sm:text-lg font-semibold text-gray-800">{bot.usageTime} hours</p>
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-md font-medium text-gray-600">Interaction Count</h4>
                        <p className="text-md sm:text-lg font-semibold text-gray-800">{bot.interactionCount}</p>
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-md font-medium text-gray-600">Efficiency</h4>
                        <p className="text-md sm:text-lg font-semibold text-gray-800">{bot.efficiency}%</p>
                      </div>
                    </div>
                    <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 flex items-center">
                      <FaDownload className="mr-2" />
                      Download Report
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UsageStatistics;
