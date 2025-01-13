import React from 'react';
import Sidebar from '../../Sidebar';
import { FaArrowRight, FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { futurefarmagronomist, finwizbot } from '../../../assets';

const Recommendations = () => {
  const navigate = useNavigate();

  const personalizedChatbots = [
    {
      name: 'FutureFarm Agronomist',
      image: futurefarmagronomist,
      description: 'FutureFarm Agronomist is an agricultural advisor smartbot that leverages AI to provide crop management advice, weather predictions and sustainable farming practices for modern agriculture.',
    },
    {
      name: 'FinWiz Bot',
      image: finwizbot,
      description: 'FinWiz is a financial advisor smartbot that uses advanced predictive analytics and machine learning to provide personalized investment strategies, budgeting tips and real-time market insights.',
    },
  ];

  const trendingChatbots = [
    {
      name: 'EduSynth Tutor',
      image: 'https://via.placeholder.com/150',
      description: 'EduSynth is an educational smartbot that utilizes adaptive learning algorithms to create customized study plans, quizzes and interactive lessons ensuring optimal learning experiences for students of all ages.',
    },
    {
      name: 'HealthBot360',
      image: 'https://via.placeholder.com/150',
      description: 'HealthBot360 is a comprehensive health and wellness smartbot that leverages AI to offer personalized fitness routines and health monitoring. It can sync with wearables devices for real-time health tracking.',
    },
  ];

  // Function to handle quick action button clicks
  const handleQuickActionClick = (action, chatbot) => {
    const links = {
      learnMore: '/chatbots', 
      addToSubscription: '/addToSubscription',
    };
    navigate(links[action]);
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-4 sm:p-8 bg-gray-100 overflow-y-auto lg:pl-80 sm:pt-10">
        <div className="mb-4 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-500 text-center">Recommendations</h1>
        </div>

        {/* Personalized Suggestions */}
        <div className="mb-4 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-blue-500">Personalized Suggestions</h2>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-2">
            {personalizedChatbots.map((chatbot, index) => (
              <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:bg-blue-50 transition-colors duration-300 cursor-pointer">
                <div className="flex items-center mb-4">
                  <img src={chatbot.image} alt={chatbot.name} className="w-8 h-8 sm:w-12 sm:h-12 rounded-full mr-4" />
                  <div>
                    <h3 className="text-sm sm:text-lg font-semibold text-blue-500">{chatbot.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-600">{chatbot.description}</p>
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => handleQuickActionClick('learnMore', chatbot)}
                    className="bg-blue-500 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-md hover:bg-blue-600 flex items-center text-xs sm:text-sm"
                  >
                    Learn More
                    <FaArrowRight className="ml-2" />
                  </button>
                  <button
                    onClick={() => handleQuickActionClick('addToSubscription', chatbot)}
                    className="bg-blue-500 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-md hover:bg-blue-600 flex items-center text-xs sm:text-sm"
                  >
                    Add to Subscription
                    <FaPlus className="ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trending Chatbots */}
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-blue-500">Trending Smartbots</h2>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-2">
            {trendingChatbots.map((chatbot, index) => (
              <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:bg-blue-50 transition-colors duration-300 cursor-pointer">
                <div className="flex items-center mb-4">
                  <img src={chatbot.image} alt={chatbot.name} className="w-8 h-8 sm:w-12 sm:h-12 rounded-full mr-4" />
                  <div>
                    <h3 className="text-sm sm:text-lg font-semibold text-blue-500">{chatbot.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-600">{chatbot.description}</p>
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => handleQuickActionClick('learnMore', chatbot)}
                    className="bg-blue-500 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-md hover:bg-blue-600 flex items-center text-xs sm:text-sm"
                  >
                    Learn More
                    <FaArrowRight className="ml-2" />
                  </button>
                  <button
                    onClick={() => handleQuickActionClick('addToSubscription', chatbot)}
                    className="bg-blue-500 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-md hover:bg-blue-600 flex items-center text-xs sm:text-sm"
                  >
                    Add to Subscription
                    <FaPlus className="ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
