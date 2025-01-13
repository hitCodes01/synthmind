import React, { useState } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import { heroBackground } from "../../../assets";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import ButtonGradient from "../../../assets/svg/ButtonGradient";

const StressBuster = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const features = [
    {
      title: "Breathing Exercises",
      description:
        "Provides guided breathing techniques to promote relaxation and reduce stress.",
    },
    {
      title: "Guided Meditations",
      description:
        "Offers a variety of meditations focused on stress reduction and mindfulness.",
    },
    {
      title: "Stress Tracking",
      description:
        "Allows users to monitor and manage their stress levels over time.",
    },
  ];

  const useCases = [
    "Individuals seeking tools for managing stress and improving mental well-being.",
    "Wellness programs looking to incorporate stress management resources.",
    "Organizations aiming to promote stress reduction among employees.",
  ];

  const faqs = [
    {
      question: "How does Smart Stress Relief™ assist with stress management?",
      answer:
        "Smart Stress Relief™ offers a range of techniques and exercises designed to reduce stress and promote relaxation, such as guided breathing and meditation.",
    },
    {
      question: "Can Smart Stress Relief™ help with stress tracking?",
      answer:
        "Yes, Smart Stress Relief™ allows users to log their stress levels regularly, providing insights into stress patterns and potential triggers.",
    },
    {
      question: "How frequently is Smart Stress Relief™ updated with new stress management techniques?",
      answer:
        "Smart Stress Relief™ is regularly updated with the latest stress management techniques and research to provide accurate and relevant support.",
    },
    {
      question: "Does Smart Stress Relief™ offer resources for learning about stress management?",
      answer:
        "Yes, Smart Stress Relief™ provides educational materials, guides, and resources for understanding stress management techniques and practices.",
    },
    {
      question: "Can Smart Stress Relief™ integrate with other wellness apps?",
      answer:
        "Yes, Smart Stress Relief™ can integrate with various wellness and mental health apps to provide a comprehensive stress management experience.",
    },
    {
      question: "How does Smart Stress Relief™ ensure user privacy?",
      answer:
        "Smart Stress Relief™ follows strict data privacy protocols, ensuring all user data and interactions are securely stored and encrypted.",
    },
    {
      question: "Does Smart Stress Relief™ offer personalized stress reduction plans?",
      answer:
        "Yes, Smart Stress Relief™ tailors its stress reduction plans based on user inputs and preferences to provide a personalized experience.",
    },
    {
      question: "Can Smart Stress Relief™ assist with mindfulness exercises?",
      answer:
        "Yes, Smart Stress Relief™ provides guided mindfulness exercises to help users reduce stress and improve focus.",
    },
    {
      question: "How does Smart Stress Relief™ support collaborative stress management?",
      answer:
        "Smart Stress Relief™ offers tools for sharing stress management insights and progress with mental health professionals, facilitating collaborative care.",
    },
    {
      question: "Is Smart Stress Relief™ suitable for all age groups?",
      answer:
        "Yes, Smart Stress Relief™ offers resources and exercises tailored to different age groups, ensuring accessible and effective stress management support for everyone.",
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
            <h1 className="text-6xl font-bold text-center mb-8 pt-8">Smart Stress Relief™</h1>
            <p className="text-xl text-center max-w-3xl mx-auto mb-8">
              Smart Stress Relief™ is a smartbot designed to provide stress management techniques and relaxation exercises. It offers breathing exercises, guided meditations, and stress tracking to help individuals and wellness programs manage stress effectively.
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

export default StressBuster;
