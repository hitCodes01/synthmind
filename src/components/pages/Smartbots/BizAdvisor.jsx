import React, { useState } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import { heroBackground } from "../../../assets";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import ButtonGradient from "../../../assets/svg/ButtonGradient";

const BizAdvisor = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const features = [
    {
      title: "Financial Forecasting",
      description: "Provides data-driven predictions on financial performance.",
    },
    {
      title: "Market Analysis",
      description: "Offers insights into market trends and consumer behavior.",
    },
    {
      title: "Strategic Planning",
      description: "Helps design long-term business strategies.",
    },
    {
      title: "Project Management",
      description: "Aids in planning, executing, and monitoring projects.",
    },
  ];

  const useCases = [
    "Startups seeking initial guidance.",
    "SMEs looking to scale operations.",
    "Business consultations for strategic advice.",
  ];

  const faqs = [
    {
      question: "How does BizAdvisor assist in financial forecasting?",
      answer:
        "BizAdvisor analyzes historical data and market trends to predict future financial outcomes, helping businesses plan budgets and allocate resources effectively.",
    },
    {
      question: "Can BizAdvisor help with market entry strategies?",
      answer:
        "Yes, it provides insights into market dynamics and competitor analysis, assisting in developing effective market entry strategies.",
    },
    {
      question: "What project management tools does BizAdvisor integrate with?",
      answer:
        "BizAdvisor integrates with popular tools like Asana, Trello, and Jira to streamline project management tasks.",
    },
    {
      question: "Is BizAdvisor suitable for non-profit organizations?",
      answer:
        "Absolutely. BizAdvisor's strategic planning and financial management features can be tailored to meet the needs of non-profit organizations.",
    },
    {
      question: "Can BizAdvisor help identify new business opportunities?",
      answer:
        "Yes, it offers market analysis and trend prediction features that can identify emerging business opportunities.",
    },
    {
      question: "How does BizAdvisor support strategic planning?",
      answer:
        "It provides data-driven insights and scenario analysis to help businesses create robust strategic plans.",
    },
    {
      question: "Is there a limit to the size of business BizAdvisor can support?",
      answer:
        "No, BizAdvisor is scalable and can support businesses of all sizes, from startups to large enterprises.",
    },
    {
      question: "How frequently is market data updated in BizAdvisor?",
      answer:
        "Market data is updated in real-time to ensure businesses have access to the latest information.",
    },
    {
      question: "Does BizAdvisor offer personalized business advice?",
      answer:
        "Yes, BizAdvisor tailors its recommendations based on the specific needs and goals of the business.",
    },
    {
      question: "Can BizAdvisor assist in crisis management?",
      answer:
        "Yes, it provides risk assessment and management strategies to help businesses navigate crises effectively.",
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
            <h1 className="text-6xl font-bold text-center mb-8 pt-8">BizAdvisor</h1>
            <p className="text-xl text-center max-w-3xl mx-auto mb-8">
              BizAdvisor is a smartbot designed to offer business advice and consultation. It assists businesses by providing insights into financial forecasting, market analysis, strategic planning, and project management.
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

export default BizAdvisor;
