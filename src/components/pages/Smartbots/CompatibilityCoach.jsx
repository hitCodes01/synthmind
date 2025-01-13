import React, { useState } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import { heroBackground } from "../../../assets";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import ButtonGradient from "../../../assets/svg/ButtonGradient";

const CompatibilityCoach = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const features = [
    {
      title: "Compatibility Assessments",
      description:
        "Analyzes user profiles to assess compatibility with potential partners.",
    },
    {
      title: "Relationship Advice",
      description:
        "Offers tips and strategies for building and maintaining strong relationships.",
    },
    {
      title: "Communication Tips",
      description:
        "Provides advice on effective communication and relationship enhancement.",
    },
  ];

  const useCases = [
    "Dating apps and services seeking to enhance compatibility features.",
    "Couples and individuals looking for relationship-building advice.",
  ];

  const faqs = [
    {
      question: "How does CompatibilityCoach assess compatibility?",
      answer:
        "CompatibilityCoach uses user profiles and preferences to analyze and assess compatibility with potential partners.",
    },
    {
      question: "Can CompatibilityCoach provide relationship-building tips?",
      answer:
        "Yes, CompatibilityCoach offers advice and strategies for strengthening and maintaining relationships.",
    },
    {
      question: "What kind of communication tips does CompatibilityCoach provide?",
      answer:
        "CompatibilityCoach offers tips on effective communication and improving interactions with partners.",
    },
    {
      question: "Does CompatibilityCoach integrate with dating platforms?",
      answer:
        "Yes, CompatibilityCoach can integrate with dating apps and platforms to enhance compatibility features.",
    },
    {
      question: "How frequently is CompatibilityCoach updated with new content?",
      answer:
        "CompatibilityCoach is regularly updated with new relationship advice, compatibility assessments, and communication tips.",
    },
    {
      question: "Does CompatibilityCoach offer personalized relationship advice?",
      answer:
        "Yes, CompatibilityCoach tailors its advice based on individual user profiles and relationship situations.",
    },
    {
      question: "Can CompatibilityCoach assist with both new and established relationships?",
      answer:
        "Yes, CompatibilityCoach provides support and advice for both new relationships and long-term partnerships.",
    },
    {
      question: "How does CompatibilityCoach ensure the accuracy of its compatibility analysis?",
      answer:
        "CompatibilityCoach uses sophisticated algorithms and user data to ensure accurate and reliable compatibility analysis.",
    },
    {
      question: "Can CompatibilityCoach assist with relationship challenges beyond compatibility?",
      answer:
        "Yes, CompatibilityCoach offers advice on various relationship challenges, including communication and conflict resolution.",
    },
    {
      question: "Is CompatibilityCoach suitable for users of all relationship statuses?",
      answer:
        "Yes, CompatibilityCoach provides support for users in different relationship statuses, from dating to committed partnerships.",
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
            <h1 className="text-6xl font-bold text-center mb-8 pt-8">CompatibilityCoach</h1>
            <p className="text-xl text-center max-w-3xl mx-auto mb-8">
              CompatibilityCoach is a smartbot designed to offer compatibility analysis and relationship-building tips. It provides assessments of compatibility and advice on improving relationships.
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

export default CompatibilityCoach;
