import React, { useState } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import { heroBackground } from "../../../assets";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import ButtonGradient from "../../../assets/svg/ButtonGradient";

const LangLearner = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const features = [
    {
      title: "Vocabulary Building",
      description:
        "Provides tools and exercises for expanding vocabulary.",
    },
    {
      title: "Conversation Practice",
      description:
        "Offers interactive conversation practice to improve speaking and listening skills.",
    },
    {
      title: "Grammar Tips",
      description:
        "Includes tips and explanations to enhance grammar proficiency.",
    },
  ];

  const useCases = [
    "Language learners seeking to improve their language skills.",
    "Language teachers needing tools for practice and reinforcement.",
    "Educational platforms focused on language education.",
  ];

  const faqs = [
    {
      question: "How does Language Learner Pro™ assist with vocabulary building?",
      answer:
        "Language Learner Pro™ offers exercises, quizzes, and flashcards to help users expand their vocabulary in the target language.",
    },
    {
      question: "Can Language Learner Pro™ help with conversation practice?",
      answer:
        "Yes, Language Learner Pro™ provides interactive conversation practice to improve speaking and listening skills.",
    },
    {
      question: "How does Language Learner Pro™ support grammar improvement?",
      answer:
        "Language Learner Pro™ offers grammar tips, explanations, and practice exercises to enhance grammar proficiency.",
    },
    {
      question: "Does Language Learner Pro™ offer practice for different language levels?",
      answer:
        "Yes, Language Learner Pro™ provides practice and resources for various language levels, from beginner to advanced.",
    },
    {
      question: "Can Language Learner Pro™ integrate with other language learning tools?",
      answer:
        "Yes, Language Learner Pro™ can integrate with other language learning apps and platforms for a comprehensive learning experience.",
    },
    {
      question: "How frequently is Language Learner Pro™ updated with new content?",
      answer:
        "Language Learner Pro™ is regularly updated with new vocabulary, grammar tips, and conversation practice to keep the content fresh and relevant.",
    },
    {
      question: "Does Language Learner Pro™ offer personalized learning paths?",
      answer:
        "Yes, Language Learner Pro™ tailors its content and practice based on individual user progress and needs.",
    },
    {
      question: "Can Language Learner Pro™ assist with pronunciation practice?",
      answer:
        "Yes, Language Learner Pro™ includes pronunciation guides and exercises to help improve speaking skills.",
    },
    {
      question: "How does Language Learner Pro™ track progress?",
      answer:
        "Language Learner Pro™ tracks user progress through quizzes, exercises, and practice sessions, providing feedback and insights.",
    },
    {
      question: "Is Language Learner Pro™ suitable for all age groups?",
      answer:
        "Yes, Language Learner Pro™ provides resources and practice suitable for different age groups and learning levels.",
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
            <h1 className="text-6xl font-bold text-center mb-8 pt-8">Language Learner Pro™</h1>
            <p className="text-xl text-center max-w-3xl mx-auto mb-8">
              Language Learner Pro™ is a smartbot designed to assist with language learning and practice. It offers vocabulary building, conversation practice, and grammar tips to help users improve their language skills.
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

export default LangLearner;
