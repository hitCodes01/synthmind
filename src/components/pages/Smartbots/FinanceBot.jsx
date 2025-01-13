import React, { useState } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import { heroBackground } from "../../../assets";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import ButtonGradient from "../../../assets/svg/ButtonGradient";

const FinanceBot = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const features = [
    {
      title: "Budgeting",
      description: "Helps create and manage personal and business budgets.",
    },
    {
      title: "Financial Forecasting",
      description: "Provides predictions and insights into future financial performance.",
    },
    {
      title: "Expense Tracking",
      description: "Monitors and categorizes expenses for better financial management.",
    },
  ];

  const useCases = [
    "Financial planners seeking advanced analytical tools.",
    "Accountants looking to streamline financial processes.",
    "Businesses aiming to improve financial management.",
  ];

  const faqs = [
    {
      question: "How does Finance Wizard Pro™ assist with budgeting?",
      answer:
        "Finance Wizard Pro™ creates customized budgets based on income, expenses, and financial goals, offering suggestions for optimization.",
    },
    {
      question: "Can Finance Wizard Pro™ integrate with accounting software?",
      answer:
        "Yes, it integrates with popular accounting software like QuickBooks and Xero for seamless financial management.",
    },
    {
      question: "How accurate is Finance Wizard Pro™'s financial forecasting?",
      answer:
        "Finance Wizard Pro™ uses advanced algorithms to provide highly accurate financial forecasts based on historical and real-time data.",
    },
    {
      question: "Does Finance Wizard Pro™ offer investment advice?",
      answer:
        "While Finance Wizard Pro™ provides insights into market trends, it is not a substitute for professional investment advice.",
    },
    {
      question: "Can Finance Wizard Pro™ track expenses automatically?",
      answer:
        "Yes, it can automatically categorize and track expenses by linking to bank accounts and credit cards.",
    },
    {
      question: "Does Finance Wizard Pro™ support multiple currencies?",
      answer:
        "Yes, Finance Wizard Pro™ supports multiple currencies for users managing international finances.",
    },
    {
      question: "How does Finance Wizard Pro™ handle data security?",
      answer:
        "Finance Wizard Pro™ uses advanced encryption and security protocols to ensure user data is protected.",
    },
    {
      question: "Can Finance Wizard Pro™ generate financial reports?",
      answer:
        "Yes, it generates detailed financial reports, including income statements, balance sheets, and cash flow statements.",
    },
    {
      question: "Is Finance Wizard Pro™ suitable for personal finance management?",
      answer:
        "Absolutely, Finance Wizard Pro™ is designed to assist with both personal and business financial management.",
    },
    {
      question: "Can Finance Wizard Pro™ help with tax preparation?",
      answer:
        "While Finance Wizard Pro™ can organize financial data, it is recommended to consult a tax professional for specific tax advice.",
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
            <h1 className="text-6xl font-bold text-center mb-8 pt-8">Finance Wizard Pro™</h1>
            <p className="text-xl text-center max-w-3xl mx-auto mb-8">
              Finance Wizard Pro™ is a smartbot designed to assist with financial planning and analysis. It offers budgeting, financial forecasting, and expense tracking to help users manage their finances effectively.
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

export default FinanceBot;
