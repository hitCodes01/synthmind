import React, { useState } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import { heroBackground } from "../../../assets";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import ButtonGradient from "../../../assets/svg/ButtonGradient";

const STEMGuide = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const features = [
    {
      title: "Interactive Lessons",
      description:
        "Provides engaging lessons in STEM subjects with multimedia content.",
    },
    {
      title: "Problem-Solving Exercises",
      description:
        "Offers exercises and challenges to develop problem-solving skills.",
    },
    {
      title: "Project Guidance",
      description:
        "Assists with STEM project ideas and implementation.",
    },
  ];

  const useCases = [
    "Students pursuing STEM education and projects.",
    "STEM educators seeking tools to enhance teaching and learning.",
    "Educational institutions focused on STEM curriculum development.",
  ];

  const faqs = [
    {
      question: "How does STEMGuide offer interactive lessons?",
      answer:
        "STEMGuide provides engaging lessons with multimedia content, including videos, simulations, and interactive activities.",
    },
    {
      question: "Can STEMGuide assist with problem-solving exercises?",
      answer:
        "Yes, STEMGuide offers a variety of problem-solving exercises and challenges to develop critical thinking and analytical skills.",
    },
    {
      question: "How does STEMGuide support STEM projects?",
      answer:
        "STEMGuide provides project ideas, guidance, and resources to assist with the planning and implementation of STEM projects.",
    },
    {
      question: "Does STEMGuide offer resources for different STEM subjects?",
      answer:
        "Yes, STEMGuide covers a wide range of STEM subjects, including science, technology, engineering, and mathematics.",
    },
    {
      question: "Can STEMGuide integrate with educational platforms?",
      answer:
        "Yes, STEMGuide can integrate with educational platforms and tools to enhance the STEM learning experience.",
    },
    {
      question: "How does STEMGuide ensure the accuracy of its content?",
      answer:
        "STEMGuide uses reliable sources and expert input to ensure the accuracy and relevance of its STEM content.",
    },
    {
      question: "Does STEMGuide provide personalized learning experiences?",
      answer:
        "Yes, STEMGuide tailors its lessons and exercises based on individual user needs and progress.",
    },
    {
      question: "Can STEMGuide assist with STEM career guidance?",
      answer:
        "Yes, STEMGuide provides information and resources for exploring STEM careers and pathways.",
    },
    {
      question: "How frequently is STEMGuide updated with new content?",
      answer:
        "STEMGuide is regularly updated with new lessons, exercises, and project ideas to keep the content current and engaging.",
    },
    {
      question: "Is STEMGuide suitable for all educational levels?",
      answer:
        "Yes, STEMGuide offers resources and support for various educational levels, from elementary to higher education.",
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
            <h1 className="text-6xl font-bold text-center mb-8 pt-8">STEMGuide</h1>
            <p className="text-xl text-center max-w-3xl mx-auto mb-8">
              STEMGuide is a smartbot focused on STEM (Science, Technology, Engineering, Mathematics) education. It offers interactive lessons, problem-solving exercises, and project guidance to support STEM learning.
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

export default STEMGuide;
