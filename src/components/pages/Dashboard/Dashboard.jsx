import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../../Sidebar';
import { FaArrowRight } from 'react-icons/fa';

const Dashboard = () => {
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch user data from API
  const fetchUserData = async () => {
    const token = localStorage.getItem('token'); // Get the token from localStorage
    console.log('Token:', token); // Check if token is present
    if (!token) {
      // If there's no token, redirect to the signin page
      navigate('/signin');
      return;
    }

    try {
      // Make API request to fetch user data
      const response = await fetch('https://backend-chatbot-ai.onrender.com/api/users/current', { // Updated URL
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUserName(data.username); // Set the username from the response
        setLoading(false); // Stop the loading spinner
      } else {
        console.error('Failed to fetch user data: ', response.status);
        navigate('/signin');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      navigate('/signin');
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []); // Only run once when the component mounts

  if (loading) return <div>Loading...</div>; // Show a loading spinner or message while fetching data

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-8 bg-gray-100 overflow-y-auto lg:pl-80 sm:pt-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 text-blue-500 text-center">
            {`Welcome, ${userName || 'Guest'}! Here's your overview for today.`}
          </h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Link to="/mychatbots" className="bg-white p-6 rounded-lg shadow-md hover:bg-blue-50 transition-colors duration-300 cursor-pointer">
            <h2 className="text-xl font-semibold mb-4 flex items-center justify-between text-blue-500">
              My Smartbots
              <FaArrowRight className="text-blue-600" />
            </h2>
            <p className="text-gray-700">Quick links to access your subscribed smartbots.</p>
          </Link>

          <div className="bg-white p-6 rounded-lg shadow-md hover:bg-blue-50 transition-colors duration-300 cursor-pointer">
            <Link to="/recommendations" className="text-xl font-semibold mb-4 flex items-center justify-between text-blue-500">
              Recommendations
              <FaArrowRight className="text-blue-600" />
            </Link>
            <p className="text-gray-700">Personalized AI smartbot suggestions based on your usage.</p>
          </div>

          <Link to="/usage" className="bg-white p-6 rounded-lg shadow-md hover:bg-blue-50 transition-colors duration-300 cursor-pointer">
            <h2 className="text-xl font-semibold mb-4 flex items-center justify-between text-blue-500">
              Recent Activity
              <FaArrowRight className="text-blue-600" />
            </h2>
            <p className="text-gray-700">Overview of your recent interactions with the smartbots.</p>
          </Link>

          <Link to="/settings" className="bg-white p-6 rounded-lg shadow-md hover:bg-blue-50 transition-colors duration-300 cursor-pointer">
            <h2 className="text-xl font-semibold mb-4 flex items-center justify-between text-blue-500">
              Alerts and Notifications
              <FaArrowRight className="text-blue-600" />
            </h2>
            <p className="text-gray-700">Important updates, messages, or alerts regarding your account.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
