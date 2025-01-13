import React, { useState } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import { heroBackground } from "../../../assets";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import ButtonGradient from "../../../assets/svg/ButtonGradient";

const WeddingPlanner = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const features = [
    {
      title: "Wedding Planning Tools",
      description:
        "Provides tools and resources for organizing and managing wedding details.",
    },
    {
      title: "Budget Management",
      description: "Offers guidance on budgeting and managing wedding expenses.",
    },
    {
      title: "Vendor Recommendations",
      description:
        "Suggests vendors and service providers based on user preferences and needs.",
    },
  ];

  const useCases = [
    "Couples planning weddings seeking organizational assistance.",
    "Wedding planners and coordinators needing additional tools and resources.",
  ];

  const faqs = [
    {
      question: "What kind of wedding planning tools does Wedding Planner AI™ offer?",
      answer:
        "Wedding Planner AI™ provides tools for organizing wedding details, including checklists, timelines, and guest lists.",
    },
    {
      question: "Can Wedding Planner AI™ assist with budget management?",
      answer:
        "Yes, Wedding Planner AI™ offers guidance on budgeting and tracking wedding expenses.",
    },
    {
      question: "How does Wedding Planner AI™ provide vendor recommendations?",
      answer:
        "Wedding Planner AI™ suggests vendors and service providers based on user preferences and needs.",
    },
    {
      question: "Does Wedding Planner AI™ offer tips for managing wedding-related stress?",
      answer:
        "Yes, Wedding Planner AI™ provides advice on managing stress and staying organized throughout the planning process.",
    },
    {
      question: "Can Wedding Planner AI™ integrate with event management platforms?",
      answer:
        "Yes, Wedding Planner AI™ can integrate with event management platforms to streamline planning tasks.",
    },
    {
      question: "How frequently is Wedding Planner AI™ updated with new features and vendor recommendations?",
      answer:
        "Wedding Planner AI™ is regularly updated with new features, tools, and vendor recommendations based on user feedback and trends.",
    },
    {
      question: "Does Wedding Planner AI™ offer personalized planning advice?",
      answer:
        "Yes, Wedding Planner AI™ tailors its advice and recommendations based on individual user preferences and wedding details.",
    },
    {
      question: "Can Wedding Planner AI™ assist with both large and small weddings?",
      answer:
        "Yes, Wedding Planner AI™ provides support for weddings of all sizes, from intimate gatherings to large celebrations.",
    },
    {
      question: "How does Wedding Planner AI™ ensure the relevance of its vendor recommendations?",
      answer:
        "Wedding Planner AI™ uses up-to-date information and user feedback to ensure relevant and high-quality vendor recommendations.",
    },
    {
      question: "Is Wedding Planner AI™ suitable for all types of weddings?",
      answer:
        "Yes, Wedding Planner AI™ offers support for various types of weddings, including traditional, destination, and themed events.",
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
            <h1 className="text-6xl font-bold text-center mb-8 pt-8">Wedding Planner AI™</h1>
            <p className="text-xl text-center max-w-3xl mx-auto mb-8">
              Wedding Planner AI™ is a smartbot designed to assist with planning weddings and managing related tasks. It offers wedding planning tools, budget management, and vendor recommendations to help couples plan their special day.
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

export default WeddingPlanner;
