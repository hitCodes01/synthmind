import React, { useState } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import { heroBackground } from "../../../assets";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import ButtonGradient from "../../../assets/svg/ButtonGradient";

const ConsultantX = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const features = [
    {
      title: "Business Audits",
      description: "Conducts comprehensive audits to identify areas for improvement.",
    },
    {
      title: "Strategic Advice",
      description: "Offers expert advice on business strategy and planning.",
    },
    {
      title: "Implementation Support",
      description: "Assists with the implementation of strategic initiatives.",
    },
  ];

  const useCases = [
    "Business consultants seeking AI-powered tools.",
    "Advisory firms aiming to enhance their service offerings.",
    "Companies looking for expert business advice.",
  ];

  const faqs = [
    {
      question: "How does ConsultantX conduct business audits?",
      answer:
        "ConsultantX uses data analysis and benchmarking to conduct thorough business audits and identify improvement opportunities.",
    },
    {
      question: "Can ConsultantX provide industry-specific advice?",
      answer:
        "Yes, ConsultantX offers tailored advice based on industry trends and best practices.",
    },
    {
      question: "How does ConsultantX support strategy implementation?",
      answer:
        "It provides step-by-step guidance and tools to assist businesses in implementing strategic initiatives effectively.",
    },
    {
      question: "Does ConsultantX offer financial analysis?",
      answer:
        "Yes, ConsultantX provides financial analysis to support strategic decision-making and planning.",
    },
    {
      question: "Can ConsultantX help with change management?",
      answer:
        "Yes, it offers insights and strategies for managing organizational change and ensuring successful transitions.",
    },
    {
      question: "How does ConsultantX ensure data confidentiality?",
      answer:
        "ConsultantX follows strict data privacy protocols to ensure all business data is secure and confidential.",
    },
    {
      question: "Can ConsultantX assist with digital transformation?",
      answer:
        "Yes, it offers guidance on leveraging technology to drive digital transformation and innovation.",
    },
    {
      question: "Does ConsultantX provide competitive analysis?",
      answer:
        "Yes, ConsultantX provides insights into competitors' strengths and weaknesses to help businesses stay competitive.",
    },
    {
      question: "Is ConsultantX suitable for startups?",
      answer:
        "Absolutely, ConsultantX offers resources and advice tailored to the needs of startups and emerging businesses.",
    },
    {
      question: "How frequently is industry data updated in ConsultantX?",
      answer:
        "Industry data is updated regularly to provide businesses with the most current insights and trends.",
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
            <h1 className="text-6xl font-bold text-center mb-8 pt-8">ConsultantX</h1>
            <p className="text-xl text-center max-w-3xl mx-auto mb-8">
              ConsultantX is a smartbot offering consultancy services in various business domains. It provides business audits, strategic advice, and implementation support to help businesses thrive.
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

export default ConsultantX;
