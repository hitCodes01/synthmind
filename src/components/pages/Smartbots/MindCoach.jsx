import React, { useState } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import { heroBackground } from "../../../assets";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import ButtonGradient from "../../../assets/svg/ButtonGradient";

const MindCoach = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const features = [
    {
      title: "Goal Setting",
      description:
        "Offers tools and resources for setting and achieving personal and professional goals.",
    },
    {
      title: "Progress Tracking",
      description:
        "Allows users to monitor their progress and achievements over time.",
    },
    {
      title: "Motivational Advice",
      description:
        "Provides personalized motivational tips and guidance to support personal growth.",
    },
  ];

  const useCases = [
    "Life coaches seeking tools to enhance coaching sessions and client engagement.",
    "Individuals looking for resources to achieve personal growth and development.",
    "Wellness programs aiming to incorporate self-improvement tools.",
  ];

  const faqs = [
    {
      question: "How does Mind Coach Pro™ assist with goal setting?",
      answer:
        "Mind Coach Pro™ provides interactive tools for setting, prioritizing, and achieving personal and professional goals.",
    },
    {
      question: "Can Mind Coach Pro™ help with progress tracking?",
      answer:
        "Yes, Mind Coach Pro™ allows users to log their achievements and monitor progress, offering insights into personal growth and development.",
    },
    {
      question: "How frequently is Mind Coach Pro™ updated with new self-improvement techniques?",
      answer:
        "Mind Coach Pro™ is regularly updated with the latest self-improvement techniques and research to provide accurate and relevant support.",
    },
    {
      question: "Does Mind Coach Pro™ offer resources for learning about personal growth?",
      answer:
        "Yes, Mind Coach Pro™ provides educational materials, guides, and resources for understanding personal growth and development strategies.",
    },
    {
      question: "Can Mind Coach Pro™ integrate with other self-improvement apps?",
      answer:
        "Yes, Mind Coach Pro™ can integrate with various self-improvement and wellness apps to provide a comprehensive personal growth experience.",
    },
    {
      question: "How does Mind Coach Pro™ ensure user privacy?",
      answer:
        "Mind Coach Pro™ follows strict data privacy protocols, ensuring all user data and interactions are securely stored and encrypted.",
    },
    {
      question: "Does Mind Coach Pro™ offer personalized motivational advice?",
      answer:
        "Yes, Mind Coach Pro™ tailors its motivational tips and guidance based on user inputs and preferences to provide a personalized experience.",
    },
    {
      question: "Can Mind Coach Pro™ assist with time management techniques?",
      answer:
        "Yes, Mind Coach Pro™ offers guidance on time management techniques to help users optimize productivity and achieve their goals.",
    },
    {
      question: "How does Mind Coach Pro™ support collaborative personal development?",
      answer:
        "Mind Coach Pro™ offers tools for sharing insights and progress with life coaches, facilitating collaborative growth.",
    },
    {
      question: "Is Mind Coach Pro™ suitable for all age groups?",
      answer:
        "Yes, Mind Coach Pro™ provides resources and tools that are adaptable to different age groups, ensuring effective support for personal growth and development at any stage of life.",
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
            <h1 className="text-6xl font-bold text-center mb-8 pt-8">Mind Coach Pro™</h1>
            <p className="text-xl text-center max-w-3xl mx-auto mb-8">
              Mind Coach Pro™ is a smartbot designed to offer mental wellness coaching and self-improvement tips. It provides goal setting, progress tracking, and motivational advice to help individuals and life coaches promote personal growth and development.
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

export default MindCoach;
