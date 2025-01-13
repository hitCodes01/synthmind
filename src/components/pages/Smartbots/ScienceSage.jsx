import React, { useState } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import { heroBackground } from "../../../assets";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import ButtonGradient from "../../../assets/svg/ButtonGradient";

const ScienceSage = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const features = [
    {
      title: "Concept Explanations",
      description:
        "Provides detailed explanations of scientific concepts and theories using clear language and examples.",
    },
    {
      title: "Experiment Guides",
      description:
        "Offers step-by-step guides for conducting a variety of science experiments.",
    },
    {
      title: "Interactive Lessons",
      description:
        "Delivers engaging and interactive science lessons with multimedia content and activities.",
    },
  ];

  const useCases = [
    "Science students seeking help with concepts and experiments.",
    "Educators needing resources for science instruction and experiments.",
    "Science enthusiasts interested in learning more about scientific topics.",
  ];

  const faqs = [
    {
      question: "How does ScienceSage explain scientific concepts?",
      answer:
        "ScienceSage provides detailed explanations of scientific concepts and theories, using clear language and examples.",
    },
    {
      question: "Can ScienceSage provide guides for science experiments?",
      answer:
        "Yes, ScienceSage offers step-by-step guides for conducting a variety of science experiments.",
    },
    {
      question: "How does ScienceSage deliver interactive science lessons?",
      answer:
        "ScienceSage uses multimedia content and interactive activities to engage users in science learning.",
    },
    {
      question: "Does ScienceSage cover all science disciplines?",
      answer:
        "Yes, ScienceSage covers various science disciplines, including biology, chemistry, physics, and earth science.",
    },
    {
      question: "Can ScienceSage assist with preparing science project reports?",
      answer:
        "Yes, ScienceSage provides resources and guidance for preparing science project reports and presentations.",
    },
    {
      question: "How frequently is ScienceSage updated with new content?",
      answer:
        "ScienceSage is regularly updated with new concepts, experiments, and lesson materials to keep the content current.",
    },
    {
      question: "Does ScienceSage offer interactive features for learning?",
      answer:
        "Yes, ScienceSage includes interactive features such as quizzes and experiments to enhance the learning experience.",
    },
    {
      question: "Can ScienceSage integrate with educational platforms?",
      answer:
        "Yes, ScienceSage can integrate with educational tools and platforms for a comprehensive science learning experience.",
    },
    {
      question: "How does ScienceSage ensure the accuracy of its scientific information?",
      answer:
        "ScienceSage uses reliable scientific sources and expert input to ensure the accuracy and credibility of its content.",
    },
    {
      question: "Is ScienceSage suitable for all educational levels?",
      answer:
        "Yes, ScienceSage provides resources and support for different educational levels, from elementary to higher education.",
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
            <h1 className="text-6xl font-bold text-center mb-8 pt-8">ScienceSage</h1>
            <p className="text-xl text-center max-w-3xl mx-auto mb-8">
              ScienceSage is a smartbot designed to assist with science education and experiments. It offers concept explanations, experiment guides, and interactive lessons to support science learning.
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

export default ScienceSage;
