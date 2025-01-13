import React, { useState } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import { heroBackground } from "../../../assets";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import ButtonGradient from "../../../assets/svg/ButtonGradient";

const MathMentor = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const features = [
    {
      title: "Step-by-Step Problem Solving",
      description:
        "Guides users through the process of solving math problems, breaking down each step.",
    },
    {
      title: "Concept Explanations",
      description:
        "Provides detailed explanations of mathematical concepts and principles.",
    },
    {
      title: "Practice Problems",
      description:
        "Offers a variety of practice problems to reinforce learning and understanding.",
    },
  ];

  const useCases = [
    "Math students seeking help with problems and concepts.",
    "Educators needing tools to support math instruction.",
    "Tutoring centers providing additional math support.",
  ];

  const faqs = [
    {
      question: "How does Math Mentor AI™ assist with problem solving?",
      answer:
        "Math Mentor AI™ provides step-by-step guidance for solving math problems, breaking down the process into manageable steps.",
    },
    {
      question: "Can Math Mentor AI™ explain mathematical concepts?",
      answer:
        "Yes, Math Mentor AI™ offers detailed explanations of mathematical concepts and principles to enhance understanding.",
    },
    {
      question: "How does Math Mentor AI™ provide practice problems?",
      answer:
        "Math Mentor AI™ offers a range of practice problems tailored to different math topics and difficulty levels.",
    },
    {
      question: "Does Math Mentor AI™ support multiple math topics?",
      answer:
        "Yes, Math Mentor AI™ covers various math topics, including algebra, geometry, calculus, and statistics.",
    },
    {
      question: "Can Math Mentor AI™ assist with preparing for math exams?",
      answer:
        "Yes, Math Mentor AI™ provides practice problems and review materials to help students prepare for math exams.",
    },
    {
      question: "How frequently is Math Mentor AI™ updated with new content?",
      answer:
        "Math Mentor AI™ is regularly updated with new problems, explanations, and resources to keep the content fresh and relevant.",
    },
    {
      question: "Does Math Mentor AI™ offer interactive features for learning?",
      answer:
        "Yes, Math Mentor AI™ includes interactive features such as quizzes and practice exercises to engage users in learning.",
    },
    {
      question: "Can Math Mentor AI™ integrate with educational tools?",
      answer:
        "Yes, Math Mentor AI™ can integrate with various educational tools and platforms to enhance the math learning experience.",
    },
    {
      question: "How does Math Mentor AI™ track user progress?",
      answer:
        "Math Mentor AI™ tracks user progress through practice problems and assessments, providing feedback and insights.",
    },
    {
      question: "Is Math Mentor AI™ suitable for all educational levels?",
      answer:
        "Yes, Math Mentor AI™ offers support for different educational levels, from elementary to higher education.",
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
            <h1 className="text-6xl font-bold text-center mb-8 pt-8">Math Mentor AI™</h1>
            <p className="text-xl text-center max-w-3xl mx-auto mb-8">
              Math Mentor AI™ is a smartbot designed to provide help with mathematics and related subjects. It offers step-by-step problem solving, concept explanations, and practice problems to support math learning.
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

export default MathMentor;
