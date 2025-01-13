import React, { useState, useEffect } from 'react'; 
import Sidebar from '../../Sidebar';
import { FaChevronDown, FaChevronUp, FaArrowRight, FaCog, FaChartLine, FaPlus, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { futurefarmagronomist, finwizbot } from '../../../assets';
import PayPalButton from '../../PayPalButton';


const MyChatbots = () => {
  const navigate = useNavigate();
  
  // State for chatbot management
const chatbots = [
  { chatbot_id: '1', name: 'FutureFarm Agronomist', image: futurefarmagronomist, status: 'Active' },
  { chatbot_id: '2', name: 'FinWiz Bot',  status: 'Active' },
  { chatbot_id: '3', name: 'EduSynth Tutor',  status: 'Active' },
  { chatbot_id: '4', name: 'MindMate Pro',  status: 'Active' },
  { chatbot_id: '5', name: 'HealthBot 360', status: 'Inactive' },
];

const hostedButtonIds = {
  Individual: "UXQCAGAA4AXH4",
  Family: "J3LTN3J43CJCS",
  Enterprise: "KAHYG6CXAGTMN",
  Academic: "KDQAGU8DCGNJ8"
};


  const [selectedChatbots, setSelectedChatbots] = useState([]); // State to track selected chatbots
  const [showChatbotDropdown, setShowChatbotDropdown] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [currentPlan, setCurrentPlan] = useState("Basic Plan");
  const [subscriptionId, setSubscriptionId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // State to hold any error messages
  const [planPrice, setPlanPrice] = useState(null); // State to store the plan price

  // State for subscription management
  const [mainPlan, setMainPlan] = useState(null);
  const [subPlan, setSubPlan] = useState(null);
  const [showMainPlanDropdown, setShowMainPlanDropdown] = useState(false);
  const [showSubPlanDropdown, setShowSubPlanDropdown] = useState(false);

  const mainPlans = ['Individual', 'Family', 'Enterprise', 'Academic'];
  const subPlans = ['Basic', 'Standard', 'Premium'];

  const baseURL = 'https://backend-chatbot-ai.onrender.com/api/subscription'; // Adjust API base URL as needed
  const chatbotBaseURL = 'https://backend-chatbot-ai.onrender.com/api/chatbots';
  const token = localStorage.getItem('token'); // Get JWT token from local storage
  const userId = localStorage.getItem('user_id'); // Get user ID from local storage

  const openModal = (type) => setModalType(type);
  const closeModal = () => {
    setModalType(null);
    setSubscriptionId(null); 
  };

  const handleModalButtonClick = (type) => {
    const links = {
      openChatbot: '/openChatbot',
      settings: '/settings',
      usageStats: '/usage', 
      changePlan: '/changePlan',
      addChatbots: '/chatbots', 
      createSubscription: '/createSubscription',
    };
    navigate(links[type]);
  };
  

  // Fetch the current subscription plan for the user when the component mounts
  // Fetch the current subscription plan for the user when the component mounts
  useEffect(() => {
    const fetchCurrentPlan = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`, // Include JWT token in headers
          },
        };
        const response = await axios.get(`${baseURL}/users/${userId}/subscriptions`, config);
        const { plan, id } = response.data; // Assuming the response includes plan details
        setCurrentPlan(plan);
        setSubscriptionId(id);
      } catch (error) {
        console.error("Error fetching current plan:", error);
        setError('Failed to fetch current plan. Please try again later.'); // Handle error
      }
    };

    if (userId) {
      fetchCurrentPlan();
    }
  }, [userId, token]);

  const fetchPlanPrice = async (mainPlan, subPlan) => {
    try {
      // Make an API call to fetch the plan price
      const response = await axios.get(`${baseURL}/plans?main=${mainPlan}&sub=${subPlan}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include your token here
        },
      });
  
      // Assuming your API returns an object with the price field
      if (response.data && response.data.price) {
        setPlanPrice(response.data.price); // Use 'price' from the response
      } else {
        throw new Error('Price not found in the response');
      }
    } catch (error) {
      // Log the error for debugging
      console.error("Error fetching plan price:", error);
  
      // Set an error message in state to display to the user
      setError('Failed to fetch plan price. Please try again.');
    }
  };
  

  const handleMainPlanSelect = (plan) => {
    setMainPlan(plan);
    setShowMainPlanDropdown(false);
    setSubPlan(null); // Reset sub plan when a new main plan is selected
  };

  const handleSubPlanSelect = (plan) => {
    setSubPlan(plan);
    setShowSubPlanDropdown(false);
    if (mainPlan && plan) {
      fetchPlanPrice(mainPlan, plan); // Fetch price when both plans are selected
    }
  };

  const handleSubscriptionAPI = async (action) => {
    setLoading(true); // Indicate API request in progress
    let response;

    // Set Axios headers to include JWT token
    const config = {
        headers: {
            Authorization: `Bearer ${token}`, // Include JWT token in headers
        },
    };

    console.log('Entering handleSubscriptionAPI with action:', action); // Log the action being received

    try {
        switch (action) {
            case 'create':
                response = await axios.post(`${baseURL}/users/${userId}/subscriptions`, { plan: `${mainPlan} - ${subPlan}` }, config);
                setSubscriptionId(response.data.id);
                alert('Subscription created successfully!');
                break;

            case 'upgrade':
                response = await axios.put(`${baseURL}/users/${userId}/subscriptions/upgrade`, { plan: `${mainPlan} - ${subPlan}` }, config);
                alert('Subscription upgraded successfully!');
                break;

            case 'downgrade':
                response = await axios.put(`${baseURL}/users/${userId}/subscriptions/downgrade`, { plan: `${mainPlan} - ${subPlan}` }, config);
                alert('Subscription downgraded successfully!');
                break;

            case 'cancel':
                await axios.delete(`${baseURL}/users/${userId}/subscriptions`, config);
                alert('Subscription canceled successfully!');
                break;

            default:
                throw new Error('Invalid action');
        }
    } catch (error) {
        console.error(`Error handling ${action} request:`, error);
        alert('An error occurred while processing your request. Please try again.');
    } finally {
        setLoading(false); // Reset loading state
        closeModal(); // Close the modal if necessary
    }
};

const toggleChatbotSelection = (chatbotId) => {
  console.log("Toggling selection for chatbot:", chatbotId); // Debugging line
  setSelectedChatbots(prevState => {
    console.log("Previous State:", prevState); // Log the previous state
    const newState = prevState.includes(chatbotId)
      ? prevState.filter(id => id !== chatbotId) // Remove if already selected
      : [...prevState, chatbotId]; // Add if not selected
    console.log("Updated State:", newState); // Log the new state
    return newState;
  });
};

// Function to allocate selected chatbots
const handleAllocateChatbots = async () => {
  try {
    const response = await axios.post(`${chatbotBaseURL}/allocate`, { selectedChatbots }, {
      headers: {
        Authorization: `Bearer ${token}`, // Include JWT token in headers
      },
    });
    alert(response.data.message); // Success message
  } catch (error) {
    console.error("Error allocating chatbots:", error);

    // Handle specific error responses
    if (error.response) {
      // Server responded with a status other than 200 range
      alert(`Error: ${error.response.data.message || 'Failed to allocate chatbots. Please try again.'}`);
    } else if (error.request) {
      // Request was made but no response was received
      alert('No response from server. Please check your connection and try again.');
    } else {
      // Something happened in setting up the request
      alert(`Request error: ${error.message}`);
    }
  }
};

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <Sidebar />
      <div className="flex-1 p-4 sm:p-6 md:p-8 lg:p-12 bg-gray-100 overflow-y-auto lg:pl-80">
        <div className="mb-4 sm:mb-6 md:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4 text-blue-500 text-center">My Smartbots</h1>
        </div>

        <div className="mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 text-blue-500">Subscribed Smartbots:</h2>
          <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
            {chatbots.map((chatbot, index) => (
              <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:bg-blue-50 transition-colors duration-300 cursor-pointer">
                <div className="flex items-center mb-4">
                  <img src={chatbot.image} alt={chatbot.name} className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mr-4" />
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-blue-500">{chatbot.name}</h3>
                    <p className={`text-xs sm:text-sm ${chatbot.status === 'Active' ? 'text-green-500' : 'text-red-500'}`}>{chatbot.status}</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-between mt-4 space-y-2 sm:space-y-0 sm:space-x-2">
                  <button
                    onClick={() => openModal('openChatbot')}
                    className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600 flex items-center"
                  >
                    Open Smartbot
                    <FaArrowRight className="ml-1 sm:ml-2" />
                  </button>
                  <button
                    onClick={() => openModal('settings')}
                    className="bg-gray-500 text-white px-3 py-2 rounded-md hover:bg-gray-600 flex items-center"
                  >
                    Settings
                    <FaCog className="ml-1 sm:ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-lg sm:text-xl font-semibold mb-2 text-blue-500">Manage Subscriptions</h2>

{/* Main Plan Dropdown */}
<div className="mb-6">
  <h2 className="text-lg sm:text-xl font-semibold mb-2 text-blue-500">Select Main Plan:</h2>
  <div className="relative">
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded-md w-full text-left flex justify-between items-center"
      onClick={() => setShowMainPlanDropdown(!showMainPlanDropdown)}
    >
      {mainPlan ? mainPlan : 'Select Main Plan'}
      {showMainPlanDropdown ? <FaChevronUp /> : <FaChevronDown />}
    </button>
    {showMainPlanDropdown && (
      <div className="absolute bg-gray-400 border border-gray-200 w-full rounded-md mt-2 p-2 shadow-lg z-50">
        {mainPlans.map((plan, index) => (
          <button
            key={index}
            onClick={() => {
              handleMainPlanSelect(plan);
              fetchPlanPrice(plan, subPlan);
            }}
            className="block w-full text-left px-4 py-2 hover:bg-blue-500"
          >
            {plan}
          </button>
        ))}
      </div>
    )}
  </div>
</div>

{/* Sub Plan Dropdown */}
{mainPlan && (
  <div className="mb-6">
    <h2 className="text-lg sm:text-xl font-semibold mb-2 text-blue-500">Select Sub Plan:</h2>
    <div className="relative">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md w-full text-left flex justify-between items-center"
        onClick={() => setShowSubPlanDropdown(!showSubPlanDropdown)}
      >
        {subPlan ? subPlan : 'Select Sub Plan'}
        {showSubPlanDropdown ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {showSubPlanDropdown && (
        <div className="absolute bg-gray-400 border border-gray-200 w-full rounded-md mt-2 p-2 shadow-lg z-50">
          {subPlans.map((plan, index) => (
            <button
              key={index}
              onClick={() => {
                handleSubPlanSelect(plan);
                fetchPlanPrice(mainPlan, plan);
              }}
              className="block w-full text-left px-4 py-2 hover:bg-blue-500"
            >
              {plan}
            </button>
          ))}
        </div>
      )}
    </div>
  </div>
)}

{/* PayPal Button for Payment */}
{mainPlan && subPlan && planPrice && (
  <div className="mb-6">
    <h2 className="text-lg sm:text-xl font-semibold mb-2 text-blue-500">Pay with PayPal:</h2>
    <PayPalButton 
      hostedButtonId={hostedButtonIds[mainPlan]} // Accessing the correct button ID
      planPrice={planPrice} 
      onPaymentSuccess={() => handleSubscriptionAPI('create')} // Callback for successful payment
    />
  </div>
)}

{/* Removed the standalone "Create Subscription" button since it's now tied to PayPal success */}

{/* Upgrade/Downgrade Subscription buttons tied to PayPal Payment */}

<div className="flex space-x-4 mb-6">
  <button
    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 flex items-center"
    onClick={() => handleSubscriptionAPI('upgrade')}
    disabled={loading || !mainPlan || !subPlan}
  >
    {loading === 'upgrade' ? 'Upgrading...' : 'Upgrade Subscription'}
    <FaChevronUp className="ml-1 sm:ml-2" />
  </button>
  
  <button
    className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 flex items-center"
    onClick={() => handleSubscriptionAPI('downgrade')}
    disabled={loading || !mainPlan || !subPlan}
  >
    {loading === 'downgrade' ? 'Downgrading...' : 'Downgrade Subscription'}
    <FaChevronDown className="ml-1 sm:ml-2" />
  </button>
  
  <button
    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 flex items-center"
    onClick={() => handleSubscriptionAPI('cancel')}
    disabled={loading}
  >
    {loading === 'cancel' ? 'Cancelling...' : 'Cancel Subscription'}
    <FaTimes className="ml-1 sm:ml-2" />
  </button>
</div>


        {/* Current Subscription Display */}
        <div className="p-4 bg-white rounded-md shadow-md">
          <h3 className="text-lg font-semibold text-blue-500">Current Subscription:</h3>
          <p>{currentPlan}</p>
        </div>

        <div>
      <div className="mb-6">
        <h2 className="text-lg sm:text-xl font-semibold mb-2 text-blue-500">Select Chatbots:</h2>
        <div className="relative">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md w-full text-left flex justify-between items-center"
            onClick={() => setShowChatbotDropdown(!showChatbotDropdown)}
          >
            {selectedChatbots.length > 0 ? `${selectedChatbots.length} Chatbots Selected` : 'Select Chatbots'}
            {showChatbotDropdown ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {showChatbotDropdown && (
            <div className="absolute bg-gray-400 border border-gray-200 w-full rounded-md mt-2 p-2 shadow-lg z-50">
              {chatbots.map((chatbot) => {
                console.log("Chatbot object:", chatbot); // Debugging line
                return (
                  <div key={chatbot.chatbot_id} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedChatbots.includes(chatbot.chatbot_id)}
                      onChange={() => toggleChatbotSelection(chatbot.chatbot_id)}
                      className="mr-2"
                    />
                    <label className="text-white">{chatbot.name}</label>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <div className="mb-6">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-md w-full hover:bg-blue-700 flex items-center justify-center"
          onClick={handleAllocateChatbots}
          disabled={loading}
        >
          {loading ? 'Allocating Chatbots...' : 'Allocate Selected Chatbots'}
        </button>
      </div>
    </div>
        {/* Modal Logic */}
        {modalType === 'openChatbot' && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-4 rounded-md shadow-md">
              <h3 className="text-xl font-semibold text-blue-500">Chatbot is now live!</h3>
              <button onClick={closeModal} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Close</button>
            </div>
          </div>
        )}
        {modalType === 'settings' && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-4 rounded-md shadow-md">
              <h3 className="text-xl font-semibold text-blue-500">Settings</h3>
              <button onClick={closeModal} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyChatbots;
