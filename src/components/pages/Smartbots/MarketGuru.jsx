import React, { useState } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import { heroBackground } from "../../../assets";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import ButtonGradient from "../../../assets/svg/ButtonGradient";

const MarketGuru = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const features = [
    {
      title: "Real-Time Market Data Analysis",
      description: "Provides up-to-date insights into market trends.",
    },
    {
      title: "Competitor Tracking",
      description: "Monitors competitors' activities and strategies.",
    },
    {
      title: "SWOT Analysis",
      description: "Conducts strengths, weaknesses, opportunities, and threats analysis.",
    },
  ];

  const useCases = [
    "Market analysts looking for data-driven insights.",
    "Business development teams aiming to stay competitive.",
    "Companies seeking to understand market dynamics.",
  ];

  const faqs = [
    {
      question: "How does MarketGuru track competitors?",
      answer:
        "MarketGuru uses web scraping and AI analysis to monitor competitors' online presence, news, and market activities.",
    },
    {
      question: "Can MarketGuru provide industry-specific insights?",
      answer:
        "Yes, MarketGuru can tailor its analysis to specific industries, providing relevant insights and trends.",
    },
    {
      question: "How does MarketGuru perform SWOT analysis?",
      answer:
        "It gathers data from various sources to identify a company's strengths, weaknesses, opportunities, and threats.",
    },
    {
      question: "Does MarketGuru offer market forecasts?",
      answer:
        "Yes, MarketGuru provides short-term and long-term market forecasts based on historical data and current trends.",
    },
    {
      question: "How frequently is the data in MarketGuru updated?",
      answer:
        "Data is updated in real-time to ensure users have access to the latest market information.",
    },
    {
      question: "Can MarketGuru analyze consumer behavior trends?",
      answer:
        "Yes, it analyzes consumer data to identify trends and patterns in purchasing behavior.",
    },
    {
      question: "Does MarketGuru support international market analysis?",
      answer:
        "Yes, MarketGuru provides insights into global markets and international competitors.",
    },
    {
      question: "Can MarketGuru assist with product positioning?",
      answer:
        "It offers insights into market gaps and consumer preferences to help businesses position their products effectively.",
    },
    {
      question: "How does MarketGuru handle data privacy?",
      answer:
        "MarketGuru adheres to strict data privacy standards, ensuring all user data is secure and confidential.",
    },
    {
      question: "Is there a tutorial for new users of MarketGuru?",
      answer:
        "Yes, MarketGuru includes a comprehensive tutorial and user guide to help new users navigate its features.",
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
            <h1 className="text-6xl font-bold text-center mb-8 pt-8">MarketGuru</h1>
            <p className="text-xl text-center max-w-3xl mx-auto mb-8">
              MarketGuru is a smartbot focused on market trends and competitive analysis. It provides real-time market data analysis, competitor tracking, and SWOT analysis.
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
                    background: 'linear-gradient(135deg, #64748B 0%, #475569 100%)', // Softer blue-gray gradient
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

export default MarketGuru;
