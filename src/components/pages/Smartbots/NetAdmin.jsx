import React, { useState } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import { heroBackground } from "../../../assets";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import ButtonGradient from "../../../assets/svg/ButtonGradient";

const NetAdmin = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const features = [
    {
      title: "Network Performance Analysis",
      description:
        "Provides tools for monitoring and analyzing network performance metrics.",
    },
    {
      title: "Troubleshooting",
      description:
        "Offers guidance and resources for diagnosing and resolving network issues.",
    },
    {
      title: "Configuration Management",
      description:
        "Supports network configuration management and optimization.",
    },
  ];

  const useCases = [
    "Network administrators seeking tools to enhance network performance and reliability.",
    "IT support teams looking for resources to troubleshoot network issues.",
    "Businesses aiming to optimize their network infrastructure.",
  ];

  const faqs = [
    {
      question: "How does Net Admin Pro™ assist with network performance analysis?",
      answer:
        "Net Admin Pro™ provides tools for monitoring network performance metrics, identifying bottlenecks, and optimizing network traffic.",
    },
    {
      question: "Can Net Admin Pro™ help with network troubleshooting?",
      answer:
        "Yes, Net Admin Pro™ offers step-by-step guidance and resources for diagnosing and resolving network issues.",
    },
    {
      question: "How often is Net Admin Pro™ updated with new network management techniques?",
      answer:
        "Net Admin Pro™ is regularly updated with the latest network management techniques, tools, and best practices to provide accurate and relevant support.",
    },
    {
      question: "Does Net Admin Pro™ offer resources for learning network administration?",
      answer:
        "Yes, Net Admin Pro™ provides tutorials, guides, and resources for learning network administration and management techniques.",
    },
    {
      question: "Can Net Admin Pro™ integrate with network management tools?",
      answer:
        "Yes, Net Admin Pro™ can integrate with popular network management tools like Nagios, SolarWinds, and PRTG to streamline workflows.",
    },
    {
      question: "How does Net Admin Pro™ handle data privacy?",
      answer:
        "Net Admin Pro™ follows strict data privacy protocols, ensuring all user data and interactions are securely stored and encrypted.",
    },
    {
      question: "Does Net Admin Pro™ provide real-time network monitoring?",
      answer:
        "Yes, Net Admin Pro™ offers tools and resources for conducting real-time network monitoring and analysis.",
    },
    {
      question: "Can Net Admin Pro™ assist with network configuration management?",
      answer:
        "Yes, Net Admin Pro™ provides tools for managing and optimizing network configurations to ensure efficient and reliable performance.",
    },
    {
      question: "How does Net Admin Pro™ support collaborative network management?",
      answer:
        "Net Admin Pro™ offers tools for sharing network management insights and collaborating with team members on network projects.",
    },
    {
      question: "Is Net Admin Pro™ suitable for small networks?",
      answer:
        "Absolutely, Net Admin Pro™ offers scalable solutions and resources tailored to the needs of small networks.",
    },
  ];

  return (
    <>
      <div
        className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden text-white"
        style={{ backgroundImage: `url(${heroBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <Header />

        <div className="container mx-auto px-4 py-8 lg:py-16">
          {/* Overview */}
          <section className="mb-16 pt-12">
            <h1 className="text-6xl font-bold text-center mb-8 pt-8">Net Admin Pro™</h1>
            <p className="text-xl text-center max-w-3xl mx-auto mb-8">
              Net Admin Pro™ is a smartbot designed to assist with network administration and monitoring. It offers network performance analysis, troubleshooting, and configuration management, making it an essential tool for network administrators and IT support teams.
            </p>
            <div className="flex justify-center mb-8 pt-4">
              <button
                className="py-2 px-6 text-xl font-semibold text-white bg-blue-500 border border-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
              >
                Coming Soon
              </button>
            </div>
          </section>

          {/* Features */}
          <section className="mb-12">
            <h2 className="text-4xl font-bold text-center mb-10 pt-16">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 bg-opacity-70 bg-gray-700 hover:bg-opacity-100 transition duration-300">
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Potential Use Cases */}
          <section className="mb-12">
            <h2 className="text-4xl font-bold text-center mb-10 pt-16">Potential Use Cases</h2>
            <div className="max-w-4xl mx-auto flex gap-8 justify-center">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 text-center text-white"
                  style={{
                    background: 'linear-gradient(135deg, #64748B 0%, #475569 100%)', // Darker gray gradient
                    backgroundSize: '200% 200%',
                    transition: 'background-position 0.3s',
                    backgroundPosition: 'left bottom',
                  }}
                >
                  <p className="text-lg font-medium">{useCase}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQs */}
          <section>
            <h2 className="text-4xl font-bold text-center mb-10 pt-16">FAQs</h2>
            <div className="max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="mb-6">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="text-2xl font-semibold bg-opacity-50 hover:bg-opacity-75 transition-all duration-300 bg-gray-600 text-white py-2 px-4 w-full text-left rounded-md relative"
                  >
                    <span>{faq.question}</span>
                    <div className="absolute top-0 right-5 h-full flex items-center">
                      {activeFAQ === index ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                  </button>
                  {activeFAQ === index && (
                    <div className="mt-4 bg-gray-800 bg-opacity-70 text-white p-4 rounded-md">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
        <ButtonGradient />
        <Footer />
      </div>
    </>
  );
};

export default NetAdmin;
