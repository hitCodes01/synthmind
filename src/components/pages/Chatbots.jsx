import React, { useState } from "react";
import { AiOutlineClose, AiOutlineSearch, AiOutlineFilter } from "react-icons/ai";
import Header from "../Header";
import Footer from "../Footer";
import { heroBackground } from "../../assets";
import ButtonGradient from "../../assets/svg/ButtonGradient";
import { chatbots, upcomingChatbots } from "../../constants";
import { useNavigate } from "react-router-dom";

const ChatbotsPage = () => {
  const [selectedChatbot, setSelectedChatbot] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [subscriptionFilter, setSubscriptionFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [isUpcoming, setIsUpcoming] = useState(false);

  const navigate = useNavigate();

  const filteredChatbots = chatbots.filter(
    (chatbot) =>
      chatbot.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (subscriptionFilter === "" || chatbot.subscription.includes(subscriptionFilter)) &&
      (categoryFilter === "" || chatbot.category === categoryFilter)
  );

  const filteredUpcomingChatbots = upcomingChatbots.filter(
    (chatbot) =>
      chatbot.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (subscriptionFilter === "" || chatbot.subscription.includes(subscriptionFilter)) &&
      (categoryFilter === "" || chatbot.category === categoryFilter)
  );

  const handleLearnMore = (chatbot, upcoming) => {
    if (upcoming) {
      // Redirect to the specified link for upcoming chatbots
      window.location.href = chatbot.link;
    } else {
      // For non-upcoming chatbots, show the modal with details
      setSelectedChatbot(chatbot);
      setIsUpcoming(upcoming);
    }
  };

  return (
    <>
      <div
        className="min-h-screen pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden text-white relative"
        style={{ backgroundImage: `url(${heroBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <Header />
        <ButtonGradient />
        <div className="relative z-10 flex flex-col items-center p-8 mt-10">
          <h1 className="text-6xl font-bold text-white text-center mb-8">Discover Our Smartbots</h1>

          <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-6xl mb-6 space-y-4 md:space-y-0">
            <div className="relative w-full md:w-1/3">
              <input
                type="text"
                placeholder="Search smartbots..."
                className="bg-gray-700 text-white px-4 py-2 pl-10 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <AiOutlineSearch className="absolute left-3 top-3 text-gray-400" size={24} />
            </div>
            <div className="relative w-full md:w-1/4">
              <select
                className="bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full appearance-none"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option value="">All Categories</option>
                <option value="business">Business</option>
                <option value="education">Education</option>
                <option value="mental health">Mental Health</option>
                <option value="technology">Technology</option>
                <option value="dating/relationships">Dating/Relationships</option>
              </select>
              <AiOutlineFilter className="absolute right-3 top-3 text-gray-400" size={24} />
            </div>
          </div>

          <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {filteredChatbots.map((chatbot) => (
              <div
                key={chatbot.id}
                className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105"
              >
                <h3 className="text-2xl font-semibold text-white mb-2">{chatbot.name}</h3>
                <p className="text-gray-300 mb-4">{chatbot.overview}</p>
                <button
                  className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600 transition-colors"
                  onClick={() => handleLearnMore(chatbot, false)}
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>

          <div className="w-full max-w-6xl mt-12">
            <h2 className="text-4xl font-bold text-white text-center mb-8">Upcoming Smartbots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredUpcomingChatbots.map((chatbot) => (
                <div
                  key={chatbot.id}
                  className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105"
                >
                  <h3 className="text-2xl font-semibold text-white mb-2">{chatbot.name}</h3>
                  <p className="text-gray-300 mb-4">{chatbot.overview}</p>
                  <button
                    className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600 transition-colors"
                    onClick={() => handleLearnMore(chatbot, true)}
                  >
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedChatbot && !isUpcoming && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300">
          <div className="bg-gray-800 bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-4xl relative transform transition-transform duration-300 scale-100">
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={() => setSelectedChatbot(null)}
            >
              <AiOutlineClose />
            </button>
            <h2 className="text-3xl font-bold text-white mb-4">{selectedChatbot.name}</h2>
            <p className="text-gray-300 mb-6">{selectedChatbot.overview}</p>

            {!isUpcoming && (
              <>
                <h3 className="text-2xl font-semibold text-white mb-4">Subscription Options</h3>
                <p className="text-gray-300 mb-6">{selectedChatbot.subscription}</p>

                <h3 className="text-2xl font-semibold text-white mb-4">User Reviews</h3>
                <ul className="text-gray-300 mb-6">
                  {selectedChatbot.reviews.map((review, index) => (
                    <li key={index} className="mb-2">{review}</li>
                  ))}
                </ul>

                <h3 className="text-2xl font-semibold text-white mb-4">Demo/Trial</h3>
                <p className="text-gray-300 mb-6">
                  Try it free for 7 days or watch our{" "}
                  <a href={selectedChatbot.demoLink} className="text-blue-400 hover:underline">
                    demo video
                  </a>.
                </p>
              </>
            )}
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default ChatbotsPage;
