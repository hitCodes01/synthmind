import React, { useState } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import { heroBackground } from "../../../assets";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import ButtonGradient from "../../../assets/svg/ButtonGradient";

const AIResearcher = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const features = [
    {
      title: "Research Paper Summaries",
      description:
        "Provides concise summaries of AI and machine learning research papers.",
    },
    {
      title: "Algorithm Recommendations",
      description:
        "Suggests algorithms and models for various AI applications and tasks.",
    },
    {
      title: "Trend Analysis",
      description:
        "Analyzes industry trends and developments in AI and machine learning.",
    },
  ];

  const useCases = [
    "AI researchers seeking access to the latest research and trends.",
    "Data scientists looking for algorithm recommendations and insights.",
    "Businesses aiming to stay updated on AI advancements.",
  ];

  const faqs = [
    {
      question: "How does AI Researcher Pro™ provide research paper summaries?",
      answer:
        "AI Researcher Pro™ uses natural language processing to generate concise summaries of research papers, highlighting key findings and implications.",
    },
    {
      question: "Can AI Researcher Pro™ recommend algorithms for specific tasks?",
      answer:
        "Yes, AI Researcher Pro™ offers algorithm recommendations based on task requirements, data characteristics, and performance goals.",
    },
    {
      question: "How often is AI Researcher Pro™ updated with new research?",
      answer:
        "AI Researcher Pro™ is regularly updated with the latest research papers, conference proceedings, and journal articles in AI and machine learning.",
    },
    {
      question: "Does AI Researcher Pro™ offer resources for learning AI concepts?",
      answer:
        "Yes, AI Researcher Pro™ provides tutorials, guides, and resources for learning fundamental and advanced AI concepts.",
    },
    {
      question: "Can AI Researcher Pro™ integrate with data science tools?",
      answer:
        "Yes, AI Researcher Pro™ can integrate with popular data science tools like Jupyter Notebook, TensorFlow, and PyTorch to streamline workflows.",
    },
    {
      question: "Is AI Researcher Pro™ suitable for non-experts?",
      answer:
        "Absolutely, AI Researcher Pro™ offers explanations and resources tailored to the needs of non-experts, helping them understand AI concepts and applications.",
    },
    {
      question: "How does AI Researcher Pro™ handle data privacy?",
      answer:
        "AI Researcher Pro™ follows strict data privacy protocols, ensuring all user data and interactions are securely stored and encrypted.",
    },
    {
      question: "Does AI Researcher Pro™ provide trend analysis for specific industries?",
      answer:
        "Yes, AI Researcher Pro™ offers trend analysis tailored to specific industries, providing insights into AI applications and developments.",
    },
    {
      question: "Can AI Researcher Pro™ assist with model evaluation and selection?",
      answer:
        "Yes, AI Researcher Pro™ provides tools and resources for evaluating and selecting AI models based on performance metrics and requirements.",
    },
    {
      question: "How does AI Researcher Pro™ support AI project development?",
      answer:
        "AI Researcher Pro™ offers guidance and recommendations for planning, implementing, and optimizing AI projects across various domains.",
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
            <h1 className="text-6xl font-bold text-center mb-8 pt-8">AI Researcher Pro™</h1>
            <p className="text-xl text-center max-w-3xl mx-auto mb-8">
              AI Researcher Pro™ is a smartbot focused on AI and machine learning research and insights. It offers research paper summaries, algorithm recommendations, and trend analysis, making it an essential tool for AI researchers and data scientists.
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

export default AIResearcher;
