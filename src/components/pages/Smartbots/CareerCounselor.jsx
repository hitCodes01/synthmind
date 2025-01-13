import React, { useState } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import { heroBackground } from "../../../assets";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import ButtonGradient from "../../../assets/svg/ButtonGradient";

const CareerCounselor = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const features = [
    {
      title: "Career Assessments",
      description:
        "Offers assessments to help users identify their career interests and strengths.",
    },
    {
      title: "Job Search Tips",
      description:
        "Provides guidance and tips for finding job opportunities and preparing for interviews.",
    },
    {
      title: "Resume Building",
      description:
        "Assists with creating and improving resumes to enhance job applications.",
    },
  ];

  const useCases = [
    "Students and job seekers needing career advice and planning support.",
    "Career centers providing resources and tools for career development.",
    "Professionals seeking to improve their job search and resume.",
  ];

  const faqs = [
    {
      question: "How does Career Counselor Pro™ provide career assessments?",
      answer:
        "Career Counselor Pro™ offers assessments to help users identify their interests, skills, and career goals.",
    },
    {
      question: "Can Career Counselor Pro™ assist with job search strategies?",
      answer:
        "Yes, Career Counselor Pro™ provides tips and strategies for finding job opportunities, networking, and preparing for interviews.",
    },
    {
      question: "How does Career Counselor Pro™ help with resume building?",
      answer:
        "Career Counselor Pro™ offers tools and guidance for creating and improving resumes, including formatting tips and content suggestions.",
    },
    {
      question: "Does Career Counselor Pro™ provide career planning resources?",
      answer:
        "Yes, Career Counselor Pro™ provides resources and advice for long-term career planning and goal setting.",
    },
    {
      question: "Can Career Counselor Pro™ assist with interview preparation?",
      answer:
        "Yes, Career Counselor Pro™ offers tips and practice questions for preparing for job interviews.",
    },
    {
      question: "How frequently is Career Counselor Pro™ updated with new content?",
      answer:
        "Career Counselor Pro™ is regularly updated with new career advice, job search tips, and resume-building resources.",
    },
    {
      question: "Does Career Counselor Pro™ offer personalized career advice?",
      answer:
        "Yes, Career Counselor Pro™ provides personalized advice based on user assessments and career goals.",
    },
    {
      question: "Can Career Counselor Pro™ integrate with job search platforms?",
      answer:
        "Yes, Career Counselor Pro™ can integrate with job search platforms and career resources for a comprehensive experience.",
    },
    {
      question: "How does Career Counselor Pro™ ensure the relevance of its advice?",
      answer:
        "Career Counselor Pro™ uses up-to-date industry trends and expert input to provide relevant and accurate career advice.",
    },
    {
      question: "Is Career Counselor Pro™ suitable for all career stages?",
      answer:
        "Yes, Career Counselor Pro™ offers support for various career stages, from entry-level job seekers to experienced professionals.",
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
            <h1 className="text-6xl font-bold text-center mb-8 pt-8">Career Counselor Pro™</h1>
            <p className="text-xl text-center max-w-3xl mx-auto mb-8">
              Career Counselor Pro™ is a smartbot designed to offer career advice and planning. It provides career assessments, job search tips, and resume building to support career development and job searching.
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

export default CareerCounselor;
