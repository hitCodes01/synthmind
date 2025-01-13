import React, { useState } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import { heroBackground } from "../../../assets";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import ButtonGradient from "../../../assets/svg/ButtonGradient";

const OpsManager = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const features = [
    {
      title: "Inventory Management",
      description: "Tracks and manages inventory levels and orders.",
    },
    {
      title: "Logistics Optimization",
      description: "Analyzes logistics data to improve efficiency.",
    },
    {
      title: "Process Automation",
      description: "Automates routine operational tasks.",
    },
  ];

  const useCases = [
    "Operations managers seeking to improve efficiency.",
    "Supply chain professionals aiming to optimize logistics.",
    "Companies looking to automate operational processes.",
  ];

  const faqs = [
    {
      question: "How does OpsManager optimize logistics?",
      answer:
        "OpsManager analyzes logistics data to identify bottlenecks and suggests improvements for more efficient supply chain management.",
    },
    {
      question: "Can OpsManager track inventory in real-time?",
      answer:
        "Yes, it provides real-time tracking of inventory levels, orders, and shipments.",
    },
    {
      question: "How does OpsManager automate operational tasks?",
      answer:
        "It uses AI to automate repetitive tasks like order processing, scheduling, and reporting.",
    },
    {
      question: "Does OpsManager support multi-location operations?",
      answer:
        "Yes, OpsManager can manage operations across multiple locations and provide centralized insights.",
    },
    {
      question: "Can OpsManager integrate with ERP systems?",
      answer:
        "Yes, it integrates with popular ERP systems like SAP, Oracle, and Microsoft Dynamics.",
    },
    {
      question: "How does OpsManager handle demand forecasting?",
      answer:
        "It uses historical data and market trends to predict demand and optimize inventory levels accordingly.",
    },
    {
      question: "Can OpsManager assist with supplier management?",
      answer:
        "Yes, it provides tools for managing supplier relationships, contracts, and performance.",
    },
    {
      question: "Does OpsManager offer performance analytics?",
      answer:
        "Yes, it provides detailed analytics and reports on operational performance and efficiency.",
    },
    {
      question: "Is OpsManager suitable for e-commerce businesses?",
      answer:
        "Absolutely, OpsManager is ideal for e-commerce businesses looking to optimize their supply chain and logistics.",
    },
    {
      question: "How does OpsManager ensure data security?",
      answer:
        "OpsManager uses advanced encryption and security protocols to protect sensitive operational data.",
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
            <h1 className="text-6xl font-bold text-center mb-8 pt-8">OpsManager</h1>
            <p className="text-xl text-center max-w-3xl mx-auto mb-8">
              OpsManager is a smartbot focused on optimizing operations and supply chain management. It offers inventory management, logistics optimization, and process automation to streamline operational efficiency.
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

export default OpsManager;
