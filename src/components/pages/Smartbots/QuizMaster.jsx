import React, { useState } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import { heroBackground } from "../../../assets";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import ButtonGradient from "../../../assets/svg/ButtonGradient";

const QuizMaster = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const features = [
    {
      title: "Quiz Generation",
      description:
        "Creates quizzes and tests based on user-defined criteria and subjects.",
    },
    {
      title: "Automated Grading",
      description:
        "Provides automatic grading of quizzes and tests with instant feedback.",
    },
    {
      title: "Performance Tracking",
      description:
        "Tracks and reports on quiz and test performance.",
    },
  ];

  const useCases = [
    "Teachers creating and administering quizzes and tests.",
    "E-learning platforms providing assessments and feedback.",
    "Educational institutions needing automated assessment tools.",
  ];

  const faqs = [
    {
      question: "How does QuizMaster generate quizzes?",
      answer:
        "QuizMaster creates quizzes based on user-defined criteria, including subject, difficulty level, and question types.",
    },
    {
      question: "Can QuizMaster grade quizzes automatically?",
      answer:
        "Yes, QuizMaster provides automated grading and instant feedback for quizzes and tests.",
    },
    {
      question: "How does QuizMaster track performance?",
      answer:
        "QuizMaster tracks quiz performance and generates reports on individual and group results.",
    },
    {
      question: "Can QuizMaster handle different question formats?",
      answer:
        "Yes, QuizMaster supports various question formats, including multiple-choice, true/false, and short answer.",
    },
    {
      question: "Does QuizMaster offer customization options for quizzes?",
      answer:
        "Yes, QuizMaster allows users to customize quizzes by adjusting question types, difficulty levels, and topics.",
    },
    {
      question: "Can QuizMaster integrate with learning management systems (LMS)?",
      answer:
        "Yes, QuizMaster can integrate with LMS platforms for seamless quiz administration and tracking.",
    },
    {
      question: "How does QuizMaster provide feedback on quizzes?",
      answer:
        "QuizMaster offers detailed feedback on each question, highlighting correct and incorrect answers.",
    },
    {
      question: "Can QuizMaster handle large volumes of quiz submissions?",
      answer:
        "Yes, QuizMaster is designed to manage and process large volumes of quiz submissions efficiently.",
    },
    {
      question: "Does QuizMaster offer analytics and reporting features?",
      answer:
        "Yes, QuizMaster provides analytics and reporting features to assess performance and identify trends.",
    },
    {
      question: "Is QuizMaster suitable for all educational levels?",
      answer:
        "Yes, QuizMaster can be used for various educational levels, from primary education to higher education.",
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
            <h1 className="text-6xl font-bold text-center mb-8 pt-8">QuizMaster</h1>
            <p className="text-xl text-center max-w-3xl mx-auto mb-8">
              QuizMaster is a smartbot focused on creating and administering quizzes and tests. It offers quiz generation, automated grading, and performance tracking to support educators and e-learning platforms.
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

export default QuizMaster;
