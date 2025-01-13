import React, { useState } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import { heroBackground } from "../../../assets";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import ButtonGradient from "../../../assets/svg/ButtonGradient";

const HistoryHelper = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const features = [
    {
      title: "Historical Facts",
      description:
        "Provides information and facts about historical events and figures.",
    },
    {
      title: "Timelines",
      description:
        "Offers timelines of historical events to help users understand historical context and chronology.",
    },
    {
      title: "Context Explanations",
      description:
        "Explains the significance and impact of historical events and developments.",
    },
  ];

  const useCases = [
    "History students seeking support and additional information.",
    "Teachers needing resources for history lessons and curriculum.",
    "History enthusiasts interested in learning more about historical events.",
  ];

  const faqs = [
    {
      question: "How does HistoryMate Pro™ provide historical facts?",
      answer:
        "HistoryMate Pro™ offers detailed information and facts about historical events, figures, and periods.",
    },
    {
      question: "Can HistoryMate Pro™ generate historical timelines?",
      answer:
        "Yes, HistoryMate Pro™ provides timelines of historical events to help users visualize historical context and sequence.",
    },
    {
      question: "How does HistoryMate Pro™ explain historical context?",
      answer:
        "HistoryMate Pro™ offers explanations of the significance and impact of historical events, helping users understand their broader context.",
    },
    {
      question: "Does HistoryMate Pro™ cover all historical periods?",
      answer:
        "Yes, HistoryMate Pro™ covers a wide range of historical periods, from ancient history to modern times.",
    },
    {
      question: "Can HistoryMate Pro™ assist with research for history projects?",
      answer:
        "Yes, HistoryMate Pro™ provides information and resources to support research and project development in history.",
    },
    {
      question: "How frequently is HistoryMate Pro™ updated with new content?",
      answer:
        "HistoryMate Pro™ is regularly updated with new facts, timelines, and explanations to keep the content current and accurate.",
    },
    {
      question: "Does HistoryMate Pro™ offer interactive features for learning?",
      answer:
        "Yes, HistoryMate Pro™ includes interactive features such as quizzes and exploration tools to enhance the learning experience.",
    },
    {
      question: "Can HistoryMate Pro™ integrate with educational platforms?",
      answer:
        "Yes, HistoryMate Pro™ can integrate with educational tools and platforms to provide a seamless learning experience.",
    },
    {
      question: "How does HistoryMate Pro™ ensure the accuracy of its historical information?",
      answer:
        "HistoryMate Pro™ uses reliable historical sources and expert input to ensure the accuracy and credibility of its content.",
    },
    {
      question: "Is HistoryMate Pro™ suitable for all educational levels?",
      answer:
        "Yes, HistoryMate Pro™ provides resources and support for different educational levels, from elementary to higher education.",
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
            <h1 className="text-6xl font-bold text-center mb-8 pt-8">HistoryMate Pro™</h1>
            <p className="text-xl text-center max-w-3xl mx-auto mb-8">
              HistoryMate Pro™ is a smartbot designed to assist with learning and understanding history. It offers historical facts, timelines, and context explanations to support history education.
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

export default HistoryHelper;
