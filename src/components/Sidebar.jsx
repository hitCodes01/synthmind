import React, { useState } from 'react';
import { FaBars, FaTimes, FaHome,FaComments, FaBook,FaEnvelope } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faCogs, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname.slice(1); 

  const toggleSidebar = () => {
    setIsOpen(prevState => !prevState);
  };

  const handleItemClick = (item) => {
    if (isOpen) {
      toggleSidebar(); 
    }
  };

  const getIcon = (item) => {
    switch (item) {
      case 'dashboard':
        return <FaHome className="mr-2" />;
      case 'mychatbots':
        return <FaComments className="mr-2" />;
      case 'recommendations':
        return <FaBook className="mr-2" />;
      case 'usage':
        return <FontAwesomeIcon icon={faChartBar} className="mr-2" />;
      case 'profile-settings':
        return <FontAwesomeIcon icon={faCogs} className="mr-2" />;
      case 'billing-information':
        return <FontAwesomeIcon icon={faDollarSign} className="mr-2" />;
      case 'support':
        return <FaEnvelope className="mr-2" />;
      default:
        return <FaHome className="mr-2" />;
    }
  };

  return (
    <>
      <div className={`fixed inset-0 bg-blue-600 text-white transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:hidden z-50`}>
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h1 className="text-xl font-bold">AI-Chatbot</h1>
          <FaTimes className="text-2xl cursor-pointer" onClick={toggleSidebar} />
        </div>
        <nav className="flex flex-col p-4">
          {['dashboard', 'mychatbots', 'recommendations', 'usage', 'profile-settings', 'billing-information', 'support'].map((item) => (
            <a 
              href={`/${item === 'profile-settings' ? 'settings' : item === 'usage' ? 'usage' : item === 'billing-information' ? 'billinfo' : item}`} 
              key={item}
              className={`flex items-center mb-4 p-3 rounded-lg text-white hover:bg-blue-700 transition-colors duration-300 ${currentPath === (item === 'profile-settings' ? 'settings' : item === 'usage' ? 'usage' : item === 'billing-information' ? 'billinfo' : item) ? 'bg-blue-800' : ''}`} 
              onClick={() => handleItemClick(item)}
            >
              {getIcon(item)}
              {item === 'mychatbots' ? 'My Smartbots' : item.replace(/-/g, ' ').replace(/^\w/, (c) => c.toUpperCase())}
            </a>
          ))}
        </nav>
        <div className="flex-grow"></div>
        <div className="p-4 border-t border-gray-700">
          <a 
            href="/" 
            className="flex items-center p-3 rounded-lg text-white hover:bg-blue-700 transition-colors duration-300"
            onClick={() => handleItemClick('home')}
          >
            <FaHome className="mr-2" />
            Return to Home
          </a>
        </div>
      </div>
      <div className="fixed top-0 left-0 w-64 h-full bg-blue-600 text-white hidden lg:flex flex-col p-4 border-r border-gray-700">
        <h1 className="text-2xl font-bold mb-8">AI Smartbots</h1>
        <nav className="flex flex-col flex-grow">
          {['dashboard', 'mychatbots', 'recommendations', 'usage', 'profile-settings', 'billing-information', 'support'].map((item) => (
            <a 
              href={`/${item === 'profile-settings' ? 'settings' : item === 'usage' ? 'usage' : item === 'billing-information' ? 'billinfo' : item}`} 
              key={item}
              className={`flex items-center mb-6 p-3 rounded-lg text-white hover:bg-blue-700 transition-colors duration-300 ${currentPath === (item === 'profile-settings' ? 'settings' : item === 'usage' ? 'usage' : item === 'billing-information' ? 'billinfo' : item) ? 'bg-blue-800' : ''}`} 
              onClick={() => handleItemClick(item)}
            >
              {getIcon(item)}
              {item === 'mychatbots' ? 'My Smartbots' : item.replace(/-/g, ' ').replace(/^\w/, (c) => c.toUpperCase())}
            </a>
          ))}
        </nav>
        <div className="flex-grow"></div>
        <div className="p-4 border-t border-gray-700">
          <a 
            href="/" 
            className="flex items-center p-3 rounded-lg text-white hover:bg-blue-700 transition-colors duration-300"
            onClick={() => handleItemClick('home')}
          >
            <FaHome className="mr-2" />
            Return to Home
          </a>
        </div>
      </div>
      {!isOpen && (
        <div className="fixed top-4 left-4 z-50 lg:hidden">
          <FaBars className="text-2xl text-blue-600 cursor-pointer" onClick={toggleSidebar} />
        </div>
      )}
    </>
  );
};

export default Sidebar;
