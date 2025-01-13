import React, { useState } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import { heroBackground } from "../../../assets";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import ButtonGradient from "../../../assets/svg/ButtonGradient";

const BrandMaster = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const features = [
    {
      title: "Brand Analysis",
      description: "Evaluates brand performance and market positioning.",
    },
    {
      title: "Marketing Campaign Management",
      description: "Plans, executes, and monitors marketing campaigns.",
    },
    {
      title: "Social Media Monitoring",
      description: "Tracks social media channels for brand mentions and sentiment.",
    },
  ];

  const useCases = [
    "Marketing teams seeking to enhance brand strategies.",
    "Brand managers looking for comprehensive analysis tools.",
    "Companies aiming to improve their social media presence.",
  ];

  const faqs = [
    {
      question: "How does Brand Master Pro™ analyze brand performance?",
      answer:
        "Brand Master Pro™ uses data analytics to assess brand performance, market share, and consumer perception.",
    },
    {
      question: "Can Brand Master Pro™ help plan marketing campaigns?",
      answer:
        "Yes, it offers tools for planning, executing, and monitoring marketing campaigns across various channels.",
    },
    {
      question: "How does Brand Master Pro™ monitor social media?",
      answer:
        "It tracks social media mentions, hashtags, and sentiment to provide insights into brand perception and engagement.",
    },
    {
      question: "Does Brand Master Pro™ support multi-channel marketing?",
      answer:
        "Yes, it supports marketing campaigns across multiple channels, including digital, print, and social media.",
    },
    {
      question: "Can Brand Master Pro™ assist with competitor analysis?",
      answer:
        "Yes, it provides insights into competitors' branding strategies and market positioning.",
    },
    {
      question: "How does Brand Master Pro™ handle data privacy?",
      answer:
        "Brand Master Pro™ follows strict data privacy protocols to ensure all user data is secure and confidential.",
    },
    {
      question: "Can Brand Master Pro™ generate marketing reports?",
      answer:
        "Yes, it provides detailed reports on campaign performance, audience engagement, and ROI.",
    },
    {
      question: "Does Brand Master Pro™ offer influencer marketing tools?",
      answer:
        "Yes, it provides tools for identifying and managing influencer partnerships.",
    },
    {
      question: "Is Brand Master Pro™ suitable for small businesses?",
      answer:
        "Absolutely, Brand Master Pro™ is scalable and can be tailored to meet the needs of businesses of all sizes.",
    },
    {
      question: "How frequently does Brand Master Pro™ update market trends?",
      answer:
        "Market trends and data are updated regularly to provide the latest insights and analysis.",
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
            <h1 className="text-6xl font-bold text-center mb-8 pt-8">Brand Master Pro™</h1>
            <p className="text-xl text-center max-w-3xl mx-auto mb-8">
              Brand Master Pro™ is a smartbot designed to assist with brand management and marketing strategies. It offers brand analysis, marketing campaign management, and social media monitoring to help businesses enhance their brand presence.
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

export default BrandMaster;
