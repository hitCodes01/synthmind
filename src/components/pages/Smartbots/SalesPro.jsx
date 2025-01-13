import React, { useState } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import { heroBackground } from "../../../assets";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import ButtonGradient from "../../../assets/svg/ButtonGradient";

const SalesPro = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const features = [
    {
      title: "Sales Forecasting",
      description: "Predicts future sales trends and performance.",
    },
    {
      title: "CRM Integration",
      description: "Seamlessly integrates with popular CRM platforms.",
    },
    {
      title: "Lead Management",
      description: "Manages and prioritizes sales leads efficiently.",
    },
  ];

  const useCases = [
    "Sales teams seeking to enhance their strategies.",
    "CRM platforms looking for AI integration.",
    "Marketing agencies aiming to improve client management.",
  ];

  const faqs = [
    {
      question: "How does Smart Sales Pro™ improve lead management?",
      answer:
        "Smart Sales Pro™ categorizes and prioritizes leads based on potential, ensuring sales teams focus on high-value opportunities.",
    },
    {
      question: "Can Smart Sales Pro™ integrate with existing CRM systems?",
      answer:
        "Yes, Smart Sales Pro™ integrates with major CRM systems like Salesforce, HubSpot, and Zoho.",
    },
    {
      question: "Does Smart Sales Pro™ provide sales training resources?",
      answer:
        "Smart Sales Pro™ offers sales training materials and best practices to help teams improve their skills.",
    },
    {
      question: "How does Smart Sales Pro™ handle customer segmentation?",
      answer:
        "It uses AI algorithms to segment customers based on behavior, demographics, and purchasing patterns.",
    },
    {
      question: "Can Smart Sales Pro™ automate follow-up tasks?",
      answer:
        "Yes, Smart Sales Pro™ automates follow-up emails and reminders to ensure timely communication with leads.",
    },
    {
      question: "How accurate is Smart Sales Pro™'s sales forecasting?",
      answer:
        "Smart Sales Pro™ uses advanced data analysis to provide highly accurate sales forecasts based on historical and current data.",
    },
    {
      question: "Does Smart Sales Pro™ support multi-channel sales strategies?",
      answer:
        "Yes, it supports integration across multiple sales channels, including online, retail, and B2B.",
    },
    {
      question: "How can Smart Sales Pro™ improve customer retention?",
      answer:
        "By analyzing customer behavior and feedback, Smart Sales Pro™ provides strategies to enhance customer satisfaction and loyalty.",
    },
    {
      question: "Is there a mobile version of Smart Sales Pro™?",
      answer:
        "Yes, Smart Sales Pro™ is available as a mobile app for both iOS and Android devices.",
    },
    {
      question: "Can Smart Sales Pro™ generate sales reports?",
      answer:
        "Yes, it generates detailed sales reports and analytics to help teams track performance and identify areas for improvement.",
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
            <h1 className="text-6xl font-bold text-center mb-8 pt-8">Smart Sales Pro™</h1>
            <p className="text-xl text-center max-w-3xl mx-auto mb-8">
            Smart Sales Pro™ is a smartbot designed to assist with sales strategies and customer relationship management (CRM). It provides sales forecasting, CRM integration, and lead management.
            </p>
            <div className="flex justify-center mb-8 pt-4">
              <button
                className="py-2 px-6 text-xl font-semibold text-white border border-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
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

export default SalesPro;
