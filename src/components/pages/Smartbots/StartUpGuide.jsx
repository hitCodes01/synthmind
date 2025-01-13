import React, { useState } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import { heroBackground } from "../../../assets";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import ButtonGradient from "../../../assets/svg/ButtonGradient";

const StartupGuide = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const features = [
    {
      title: "Business Plan Creation",
      description:
        "Offers templates and guidance to help startups develop comprehensive business plans tailored to their industry and goals.",
    },
    {
      title: "Funding Advice",
      description:
        "Provides insights into various funding options, including venture capital, angel investors, crowdfunding, and grants.",
    },
    {
      title: "Growth Strategies",
      description:
        "Suggests actionable strategies to scale operations, enhance market presence, and drive business growth.",
    },
  ];

  const useCases = [
    "Entrepreneurs seeking structured support in launching and scaling their businesses.",
    "Startup incubators looking for tools to assist their cohorts with planning and growth.",
    "Small business owners needing expert advice on business strategy and funding.",
  ];

  const faqs = [
    {
      question: "How does Startup Guide Pro™ help with business plan creation?",
      answer:
        "Startup Guide Pro™ offers customizable templates and step-by-step guidance to create a professional and comprehensive business plan, covering aspects like market analysis, financial projections, and operational strategies.",
    },
    {
      question: "What types of funding options does Startup Guide Pro™ cover?",
      answer:
        "It covers a wide range of funding options, including traditional bank loans, venture capital, angel investors, crowdfunding platforms, and government grants, along with guidance on how to pursue them.",
    },
    {
      question: "Can Startup Guide Pro™ help with market research?",
      answer:
        "Yes, Startup Guide Pro™ provides tools and resources to conduct thorough market research, analyze industry trends, and identify target demographics.",
    },
    {
      question: "How does Startup Guide Pro™ assist with growth strategies?",
      answer:
        "It offers personalized growth strategies based on the startup's goals, market conditions, and competitive landscape, including marketing, sales, and operational enhancements.",
    },
    {
      question: "Is Startup Guide Pro™ suitable for tech startups?",
      answer:
        "Absolutely, Startup Guide Pro™ is designed to cater to a variety of industries, including tech, providing sector-specific advice and resources.",
    },
    {
      question: "How often is the information in Startup Guide Pro™ updated?",
      answer:
        "The information is regularly updated to reflect the latest industry trends, funding opportunities, and strategic best practices.",
    },
    {
      question: "Can Startup Guide Pro™ integrate with project management tools?",
      answer:
        "Yes, Startup Guide Pro™ can integrate with popular project management tools like Trello, Asana, and Jira to streamline task management and execution.",
    },
    {
      question: "Does Startup Guide Pro™ offer networking opportunities?",
      answer:
        "While it doesn't directly facilitate networking, Startup Guide Pro™ provides tips and resources for connecting with industry peers, mentors, and investors.",
    },
    {
      question: "How does Startup Guide Pro™ ensure data privacy?",
      answer:
        "Startup Guide Pro™ adheres to strict data privacy protocols, ensuring all user data and business information are securely stored and encrypted.",
    },
    {
      question: "Is there support for international startups?",
      answer:
        "Yes, Startup Guide Pro™ offers resources and advice tailored to international markets, including information on global funding opportunities and cross-border growth strategies.",
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
            <h1 className="text-6xl font-bold text-center mb-8 pt-8">Startup Guide Pro™</h1>
            <p className="text-xl text-center max-w-3xl mx-auto mb-8">
              Startup Guide Pro™ is a smartbot designed to provide guidance and resources for startups. It assists entrepreneurs and startup incubators with business plan creation, funding advice, and growth strategies, making it an essential tool for new and growing businesses.
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

export default StartupGuide;
