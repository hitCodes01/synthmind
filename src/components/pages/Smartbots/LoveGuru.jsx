import React, { useState } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import { heroBackground } from "../../../assets";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import ButtonGradient from "../../../assets/svg/ButtonGradient";

const LoveGuru = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const features = [
    {
      title: "Dating Tips",
      description:
        "Offers practical advice for successful dating, including strategies for meeting new people and maintaining engaging conversations.",
    },
    {
      title: "Relationship Advice",
      description:
        "Provides insights and guidance on building and maintaining healthy relationships.",
    },
    {
      title: "Conversation Starters",
      description:
        "Suggests effective conversation starters to help users initiate and sustain engaging dialogues.",
    },
  ];

  const useCases = [
    "Individuals seeking dating advice and strategies.",
    "Dating apps and services looking to enhance user experience.",
  ];

  const faqs = [
    {
      question: "What kind of dating tips does LoveGuru provide?",
      answer:
        "LoveGuru offers tips on meeting new people, first-date ideas, and ways to make a positive impression.",
    },
    {
      question: "Can LoveGuru help with relationship advice?",
      answer:
        "Yes, LoveGuru provides guidance on building and maintaining healthy relationships.",
    },
    {
      question: "How does LoveGuru suggest conversation starters?",
      answer:
        "LoveGuru offers creative and effective conversation starters to help users engage in meaningful dialogue.",
    },
    {
      question: "Does LoveGuru provide advice for different types of dating scenarios?",
      answer:
        "Yes, LoveGuru covers various dating scenarios, including online dating, first dates, and maintaining relationships.",
    },
    {
      question: "How does LoveGuru ensure the relevance of its advice?",
      answer:
        "LoveGuru uses up-to-date dating trends and expert input to provide relevant and effective advice.",
    },
    {
      question: "Can LoveGuru integrate with dating apps?",
      answer:
        "Yes, LoveGuru can integrate with dating apps to enhance the user experience and provide seamless advice.",
    },
    {
      question: "How frequently is LoveGuru updated with new content?",
      answer:
        "LoveGuru is regularly updated with new dating tips and advice based on current trends and user feedback.",
    },
    {
      question: "Does LoveGuru offer personalized advice?",
      answer:
        "Yes, LoveGuru tailors its advice based on user input and specific dating scenarios.",
    },
    {
      question: "Can LoveGuru assist with relationship challenges?",
      answer:
        "Yes, LoveGuru provides advice on common relationship challenges and how to address them.",
    },
    {
      question: "Is LoveGuru suitable for users of all ages?",
      answer:
        "Yes, LoveGuru offers advice suitable for a wide range of age groups and dating experiences.",
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
            <h1 className="text-6xl font-bold text-center mb-8 pt-8">LoveGuru</h1>
            <p className="text-xl text-center max-w-3xl mx-auto mb-8">
              LoveGuru is a smartbot designed to offer dating advice and tips. It provides users with dating strategies, relationship guidance, and conversation starters to enhance their dating experiences.
            </p>
            <div className="flex justify-center mb-8 pt-4">
              <button
                className="py-2 px-6 text-xl font-semibold text-white bg-red-500 border border-white rounded-lg shadow-lg hover:bg-red-600 transition duration-300"
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
                    background: 'linear-gradient(135deg, #64748B 0%, #475569 100%)',
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

export default LoveGuru;
