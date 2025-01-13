import React, { useState } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import { heroBackground } from "../../../assets";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import ButtonGradient from "../../../assets/svg/ButtonGradient";

const BreakUpBuddy = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const features = [
    {
      title: "Emotional Support",
      description:
        "Provides comforting advice and encouragement for dealing with the emotional aspects of a breakup.",
    },
    {
      title: "Coping Strategies",
      description:
        "Offers practical strategies for managing stress and emotional pain.",
    },
    {
      title: "Self-Care Tips",
      description:
        "Provides tips for self-care and personal well-being during the breakup process.",
    },
  ];

  const useCases = [
    "Individuals going through a breakup seeking support and guidance.",
    "Support groups providing resources for those dealing with relationship challenges.",
  ];

  const faqs = [
    {
      question: "What kind of emotional support does Smart Breakup™ provide?",
      answer:
        "Smart Breakup™ offers comforting advice and encouragement to help users cope with the emotional aspects of a breakup.",
    },
    {
      question: "Can Smart Breakup™ help with coping strategies?",
      answer:
        "Yes, Smart Breakup™ provides practical strategies for managing stress and emotional pain during a breakup.",
    },
    {
      question: "How does Smart Breakup™ offer self-care tips?",
      answer:
        "Smart Breakup™ provides advice on self-care practices and activities to support personal well-being.",
    },
    {
      question: "Does Smart Breakup™ provide guidance for moving on from a breakup?",
      answer:
        "Yes, Smart Breakup™ offers advice on moving forward and finding closure after a breakup.",
    },
    {
      question: "Can Smart Breakup™ integrate with mental health apps?",
      answer:
        "Yes, Smart Breakup™ can integrate with mental health apps to provide additional support and resources.",
    },
    {
      question: "How frequently is Smart Breakup™ updated with new content?",
      answer:
        "Smart Breakup™ is regularly updated with new coping strategies, self-care tips, and emotional support resources.",
    },
    {
      question: "Does Smart Breakup™ offer personalized support?",
      answer:
        "Yes, Smart Breakup™ tailors its support based on individual user experiences and needs.",
    },
    {
      question: "Can Smart Breakup™ assist with both short-term and long-term breakups?",
      answer:
        "Yes, Smart Breakup™ offers support for both short-term and long-term breakup situations.",
    },
    {
      question: "How does Smart Breakup™ ensure the quality of its advice?",
      answer:
        "Smart Breakup™ uses expert input and user feedback to provide high-quality and effective advice.",
    },
    {
      question: "Is Smart Breakup™ suitable for users of all ages?",
      answer:
        "Yes, Smart Breakup™ provides support suitable for a wide range of ages and breakup experiences.",
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
            <h1 className="text-6xl font-bold text-center mb-8 pt-8">Smart Breakup™</h1>
            <p className="text-xl text-center max-w-3xl mx-auto mb-8">
              Smart Breakup™ is a smartbot designed to provide support and advice for dealing with breakups. It offers emotional support, coping strategies, and self-care tips to help users navigate through difficult times.
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

export default BreakUpBuddy;
