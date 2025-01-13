import React, { useState } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import { heroBackground } from "../../../assets";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import ButtonGradient from "../../../assets/svg/ButtonGradient";

const LongDistanceLove = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const features = [
    {
      title: "Communication Tips",
      description:
        "Offers advice on effective communication and staying connected in long-distance relationships.",
    },
    {
      title: "Activity Suggestions",
      description:
        "Provides ideas for activities and virtual experiences to maintain engagement.",
    },
    {
      title: "Emotional Support",
      description:
        "Offers support and encouragement to help couples navigate the challenges of long-distance relationships.",
    },
  ];

  const useCases = [
    "Couples in long-distance relationships seeking advice and support.",
    "Relationship counselors providing resources for managing long-distance relationships.",
  ];

  const faqs = [
    {
      question: "What kind of communication tips does LongDistanceLove offer?",
      answer:
        "LongDistanceLove provides advice on maintaining effective communication and staying connected despite the distance.",
    },
    {
      question: "Can LongDistanceLove suggest activities for long-distance couples?",
      answer:
        "Yes, LongDistanceLove offers ideas for virtual activities and experiences to keep the relationship engaging.",
    },
    {
      question: "How does LongDistanceLove provide emotional support?",
      answer:
        "LongDistanceLove offers comforting advice and encouragement to help couples manage the emotional aspects of long-distance relationships.",
    },
    {
      question: "Does LongDistanceLove offer tips for overcoming common long-distance challenges?",
      answer:
        "Yes, LongDistanceLove provides strategies for addressing common challenges such as time zone differences and communication issues.",
    },
    {
      question: "Can LongDistanceLove integrate with communication apps?",
      answer:
        "Yes, LongDistanceLove can integrate with communication apps to enhance connectivity and interaction.",
    },
    {
      question: "How frequently is LongDistanceLove updated with new content?",
      answer:
        "LongDistanceLove is regularly updated with new communication tips, activity ideas, and emotional support resources.",
    },
    {
      question: "Does LongDistanceLove offer personalized advice?",
      answer:
        "Yes, LongDistanceLove tailors its advice based on individual user situations and relationship dynamics.",
    },
    {
      question: "Can LongDistanceLove assist with planning visits and reunions?",
      answer:
        "Yes, LongDistanceLove offers advice on planning visits and managing the anticipation of reunions.",
    },
    {
      question: "How does LongDistanceLove ensure the relevance of its suggestions?",
      answer:
        "LongDistanceLove uses current trends and user feedback to provide relevant and effective suggestions.",
    },
    {
      question: "Is LongDistanceLove suitable for all types of long-distance relationships?",
      answer:
        "Yes, LongDistanceLove offers support for various types of long-distance relationships, including romantic and familial.",
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
            <h1 className="text-6xl font-bold text-center mb-8 pt-8">LongDistanceLove</h1>
            <p className="text-xl text-center max-w-3xl mx-auto mb-8">
              LongDistanceLove is a smartbot designed to assist with maintaining long-distance relationships. It provides communication tips, activity suggestions, and emotional support to help couples stay connected.
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

export default LongDistanceLove;
