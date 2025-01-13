import React, { useState } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import { heroBackground } from "../../../assets";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import ButtonGradient from "../../../assets/svg/ButtonGradient";

const HRHelper = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const features = [
    {
      title: "Recruitment Automation",
      description: "Streamlines the hiring process by automating candidate screening and interview scheduling.",
    },
    {
      title: "Employee Feedback Analysis",
      description: "Gathers and analyzes employee feedback to improve workplace culture.",
    },
    {
      title: "Policy Management",
      description: "Helps manage HR policies and compliance.",
    },
  ];

  const useCases = [
    "HR departments looking to improve efficiency.",
    "Recruitment agencies seeking automation tools.",
    "Companies aiming to enhance employee engagement.",
  ];

  const faqs = [
    {
      question: "How does HR Assist Pro™ automate recruitment?",
      answer:
        "HR Assist Pro™ automates tasks such as resume screening, interview scheduling, and candidate follow-ups to streamline the hiring process.",
    },
    {
      question: "Can HR Assist Pro™ conduct employee surveys?",
      answer:
        "Yes, HR Assist Pro™ can create and distribute employee surveys to gather feedback and assess workplace satisfaction.",
    },
    {
      question: "How does HR Assist Pro™ assist with policy management?",
      answer:
        "It helps manage HR policies by offering templates, reminders, and updates on compliance requirements.",
    },
    {
      question: "Can HR Assist Pro™ analyze employee performance data?",
      answer:
        "Yes, HR Assist Pro™ can collect and analyze performance data to identify trends and areas for improvement.",
    },
    {
      question: "Is HR Assist Pro™ suitable for small businesses?",
      answer:
        "Absolutely, HR Assist Pro™ is scalable and can be tailored to meet the needs of businesses of all sizes.",
    },
    {
      question: "How does HR Assist Pro™ support remote work management?",
      answer:
        "HR Assist Pro™ provides tools for managing remote teams, including communication, performance tracking, and engagement strategies.",
    },
    {
      question: "Can HR Assist Pro™ integrate with existing HR software?",
      answer:
        "Yes, HR Assist Pro™ integrates with popular HR systems like Workday, BambooHR, and ADP.",
    },
    {
      question: "How frequently does HR Assist Pro™ update compliance information?",
      answer:
        "Compliance information is updated regularly to ensure companies adhere to the latest regulations.",
    },
    {
      question: "Does HR Assist Pro™ offer onboarding support?",
      answer:
        "Yes, it provides resources and automation tools to streamline the onboarding process for new employees.",
    },
    {
      question: "Can HR Assist Pro™ assist with diversity and inclusion initiatives?",
      answer:
        "Yes, HR Assist Pro™ offers insights and strategies to promote diversity and inclusion within the workplace.",
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
            <h1 className="text-6xl font-bold text-center mb-8 pt-8">HR Assist Pro™</h1>
            <p className="text-xl text-center max-w-3xl mx-auto mb-8">
              HR Assist Pro™ is a smartbot designed to assist with human resources management and employee engagement. It offers recruitment automation, employee feedback analysis, and policy management to streamline HR operations and enhance workplace culture.
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
                    background: 'linear-gradient(135deg, #64748B 0%, #475569 100%)',
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

export default HRHelper;
