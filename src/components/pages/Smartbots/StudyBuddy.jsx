import React, { useState } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import { heroBackground } from "../../../assets";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import ButtonGradient from "../../../assets/svg/ButtonGradient";

const StudyBuddy = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const features = [
    {
      title: "Homework Help",
      description:
        "Provides assistance with homework assignments and problem-solving.",
    },
    {
      title: "Study Tips",
      description:
        "Offers tips and strategies for effective studying and exam preparation.",
    },
    {
      title: "Subject-Specific Guidance",
      description:
        "Provides tailored help and resources for various subjects.",
    },
  ];

  const useCases = [
    "Students seeking support with homework and studying.",
    "Educators needing tools to assist students outside of class.",
    "Study groups and academic support centers.",
  ];

  const faqs = [
    {
      question: "How does StudyMate AI™ assist with homework help?",
      answer:
        "StudyMate AI™ provides step-by-step guidance and explanations to help students complete their homework assignments.",
    },
    {
      question: "Can StudyMate AI™ provide study tips for exams?",
      answer:
        "Yes, StudyMate AI™ offers various study tips and techniques to improve exam preparation and performance.",
    },
    {
      question: "Is StudyMate AI™ suitable for all school subjects?",
      answer:
        "Yes, StudyMate AI™ offers support for a wide range of subjects, providing tailored guidance based on the topic.",
    },
    {
      question: "How does StudyMate AI™ handle complex questions?",
      answer:
        "For complex questions, StudyMate AI™ breaks down the problem into manageable steps and provides detailed explanations.",
    },
    {
      question: "Can StudyMate AI™ help with creating study schedules?",
      answer:
        "Yes, StudyMate AI™ can assist in creating personalized study schedules to help manage time effectively.",
    },
    {
      question: "Does StudyMate AI™ offer resources for additional learning?",
      answer:
        "Yes, StudyMate AI™ provides links to additional resources and materials for further learning.",
    },
    {
      question: "How does StudyMate AI™ ensure the accuracy of its help?",
      answer:
        "StudyMate AI™ uses reliable educational sources and algorithms to provide accurate and up-to-date information.",
    },
    {
      question: "Can StudyMate AI™ assist with exam preparation strategies?",
      answer:
        "Yes, StudyMate AI™ offers strategies and tips for effective exam preparation and reducing test anxiety.",
    },
    {
      question: "Does StudyMate AI™ integrate with other educational tools?",
      answer:
        "StudyMate AI™ can integrate with various educational tools and platforms to provide a comprehensive learning experience.",
    },
    {
      question: "Is StudyMate AI™ suitable for all educational levels?",
      answer:
        "Yes, StudyMate AI™ provides support for different educational levels, from elementary to higher education.",
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
            <h1 className="text-6xl font-bold text-center mb-8 pt-8">StudyMate AI™</h1>
            <p className="text-xl text-center max-w-3xl mx-auto mb-8">
              StudyMate AI™ is a smartbot designed to assist students with studying and homework. It offers homework help, study tips, and subject-specific guidance to enhance learning and academic performance.
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

export default StudyBuddy;
