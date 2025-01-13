import React, { useState } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import { heroBackground } from "../../../assets";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import ButtonGradient from "../../../assets/svg/ButtonGradient";

const TutorBot = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const features = [
    {
      title: "Subject-Specific Tutoring",
      description:
        "Offers personalized tutoring for different subjects based on user needs.",
    },
    {
      title: "Progress Tracking",
      description:
        "Monitors and tracks student progress over time.",
    },
    {
      title: "Interactive Lessons",
      description:
        "Provides engaging and interactive lessons to facilitate learning.",
    },
  ];

  const useCases = [
    "Students needing personalized tutoring in specific subjects.",
    "Tutoring centers providing additional support to students.",
    "Educational institutions offering supplemental tutoring resources.",
  ];

  const faqs = [
    {
      question: "How does Smart Tutor Pro™ provide personalized tutoring?",
      answer:
        "Smart Tutor Pro™ offers personalized tutoring by adapting lessons and support based on individual student needs and progress.",
    },
    {
      question: "Can Smart Tutor Pro™ help with multiple subjects?",
      answer:
        "Yes, Smart Tutor Pro™ provides tutoring across various subjects, including math, science, language arts, and more.",
    },
    {
      question: "How does Smart Tutor Pro™ track student progress?",
      answer:
        "Smart Tutor Pro™ tracks student progress through assessments, quizzes, and lesson interactions, providing regular updates.",
    },
    {
      question: "Are Smart Tutor Pro™’s lessons interactive?",
      answer:
        "Yes, Smart Tutor Pro™’s lessons are designed to be interactive, incorporating quizzes, exercises, and feedback.",
    },
    {
      question: "Can Smart Tutor Pro™ assist with exam preparation?",
      answer:
        "Yes, Smart Tutor Pro™ provides targeted support and practice to help students prepare for exams.",
    },
    {
      question: "Does Smart Tutor Pro™ offer resources for additional learning?",
      answer:
        "Yes, Smart Tutor Pro™ provides links to additional resources and materials to support further learning.",
    },
    {
      question: "How does Smart Tutor Pro™ handle complex topics?",
      answer:
        "Smart Tutor Pro™ breaks down complex topics into manageable parts, offering step-by-step explanations and practice.",
    },
    {
      question: "Can Smart Tutor Pro™ integrate with other educational tools?",
      answer:
        "Yes, Smart Tutor Pro™ can integrate with various educational tools and platforms to enhance the tutoring experience.",
    },
    {
      question: "Does Smart Tutor Pro™ provide feedback on student performance?",
      answer:
        "Yes, Smart Tutor Pro™ provides detailed feedback on student performance, highlighting strengths and areas for improvement.",
    },
    {
      question: "Is Smart Tutor Pro™ suitable for all educational levels?",
      answer:
        "Yes, Smart Tutor Pro™ offers support for different educational levels, from elementary to higher education.",
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
            <h1 className="text-6xl font-bold text-center mb-8 pt-8">Smart Tutor Pro™</h1>
            <p className="text-xl text-center max-w-3xl mx-auto mb-8">
              Smart Tutor Pro™ provides personalized tutoring in various subjects. It offers subject-specific tutoring, progress tracking, and interactive lessons to enhance learning and academic performance.
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

export default TutorBot;
