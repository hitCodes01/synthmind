import React, { useState } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import { heroBackground } from "../../../assets";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import ButtonGradient from "../../../assets/svg/ButtonGradient";

const MatchMaker = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const features = [
    {
      title: "Match Suggestions",
      description:
        "Provides users with suggestions for potential matches based on their preferences and interests.",
    },
    {
      title: "Compatibility Analysis",
      description:
        "Analyzes user profiles and offers insights into compatibility with potential matches.",
    },
    {
      title: "Relationship Tips",
      description:
        "Offers advice on building and nurturing relationships.",
    },
  ];

  const useCases = [
    "Dating apps seeking to enhance matchmaking features.",
    "Individuals looking for compatible partners and relationship advice.",
  ];

  const faqs = [
    {
      question: "How does Matchmaker Pro™ suggest potential matches?",
      answer:
        "Matchmaker Pro™ uses user preferences and interests to suggest compatible matches.",
    },
    {
      question: "Can Matchmaker Pro™ analyze compatibility with potential matches?",
      answer:
        "Yes, Matchmaker Pro™ provides insights into compatibility based on user profiles and preferences.",
    },
    {
      question: "What kind of relationship tips does Matchmaker Pro™ offer?",
      answer:
        "Matchmaker Pro™ offers advice on building strong relationships, communication, and maintaining connections.",
    },
    {
      question: "How does Matchmaker Pro™ ensure the accuracy of compatibility analysis?",
      answer:
        "Matchmaker Pro™ uses sophisticated algorithms and user data to ensure accurate compatibility analysis.",
    },
    {
      question: "Can Matchmaker Pro™ integrate with existing dating platforms?",
      answer:
        "Yes, Matchmaker Pro™ can integrate with dating apps and platforms to enhance matchmaking features.",
    },
    {
      question: "How frequently is Matchmaker Pro™ updated with new features?",
      answer:
        "Matchmaker Pro™ is regularly updated with new features and improvements based on user feedback and trends.",
    },
    {
      question: "Does Matchmaker Pro™ offer personalized relationship advice?",
      answer:
        "Yes, Matchmaker Pro™ provides personalized advice based on individual user profiles and experiences.",
    },
    {
      question: "Can Matchmaker Pro™ assist with relationship building beyond dating?",
      answer:
        "Yes, Matchmaker Pro™ offers advice on maintaining and nurturing long-term relationships.",
    },
    {
      question: "How does Matchmaker Pro™ handle user privacy?",
      answer:
        "Matchmaker Pro™ ensures user privacy through secure data handling and confidentiality measures.",
    },
    {
      question: "Is Matchmaker Pro™ suitable for all types of relationships?",
      answer:
        "Yes, Matchmaker Pro™ provides support for various types of relationships, including dating and long-term partnerships.",
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
            <h1 className="text-6xl font-bold text-center mb-8 pt-8">Matchmaker Pro™</h1>
            <p className="text-xl text-center max-w-3xl mx-auto mb-8">
              Matchmaker Pro™ is a smartbot designed to assist users with finding compatible matches and building relationships. It offers match suggestions, compatibility analysis, and relationship tips.
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

export default MatchMaker;
