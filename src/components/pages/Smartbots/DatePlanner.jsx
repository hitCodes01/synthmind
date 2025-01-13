import React, { useState } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import { heroBackground } from "../../../assets";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import ButtonGradient from "../../../assets/svg/ButtonGradient";

const DatePlanner = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const features = [
    {
      title: "Date Ideas",
      description:
        "Provides creative and enjoyable date ideas based on user preferences and interests.",
    },
    {
      title: "Planning Tools",
      description:
        "Offers tools to help users plan and organize their dates efficiently.",
    },
    {
      title: "Location Suggestions",
      description:
        "Suggests suitable locations and venues for different types of dates.",
    },
  ];

  const useCases = [
    "Couples looking for date planning assistance.",
    "Dating services providing date ideas and planning tools.",
  ];

  const faqs = [
    {
      question: "What kind of date ideas does Date Planner Pro™ provide?",
      answer:
        "Date Planner Pro™ offers a variety of date ideas, including romantic, adventurous, and casual options.",
    },
    {
      question: "Can Date Planner Pro™ help with planning and organizing dates?",
      answer:
        "Yes, Date Planner Pro™ provides tools and guidance for planning and organizing dates, including itinerary suggestions.",
    },
    {
      question: "How does Date Planner Pro™ suggest locations for dates?",
      answer:
        "Date Planner Pro™ suggests locations based on user preferences, date type, and local options.",
    },
    {
      question: "Does Date Planner Pro™ offer suggestions for special occasions?",
      answer:
        "Yes, Date Planner Pro™ provides date ideas and planning tools for special occasions such as anniversaries and birthdays.",
    },
    {
      question: "Can Date Planner Pro™ integrate with calendar apps?",
      answer:
        "Yes, Date Planner Pro™ can integrate with calendar apps to help users schedule and manage their date plans.",
    },
    {
      question: "How frequently is Date Planner Pro™ updated with new ideas and tools?",
      answer:
        "Date Planner Pro™ is regularly updated with new date ideas, planning tools, and location suggestions.",
    },
    {
      question: "Does Date Planner Pro™ offer personalized date recommendations?",
      answer:
        "Yes, Date Planner Pro™ provides personalized recommendations based on user preferences and past date experiences.",
    },
    {
      question: "Can Date Planner Pro™ assist with virtual date planning?",
      answer:
        "Yes, Date Planner Pro™ offers suggestions and tools for planning virtual dates and online experiences.",
    },
    {
      question: "How does Date Planner Pro™ ensure the relevance of its location suggestions?",
      answer:
        "Date Planner Pro™ uses up-to-date information and user feedback to ensure relevant and current location suggestions.",
    },
    {
      question: "Is Date Planner Pro™ suitable for all types of dates?",
      answer:
        "Yes, Date Planner Pro™ offers ideas and tools for various types of dates, from casual outings to special celebrations.",
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
            <h1 className="text-6xl font-bold text-center mb-8 pt-8">Date Planner Pro™</h1>
            <p className="text-xl text-center max-w-3xl mx-auto mb-8">
              Date Planner Pro™ is a smartbot designed to assist with planning dates. It offers date ideas, planning tools, and location suggestions to help users create memorable experiences.
            </p>
            <div className="flex justify-center mb-8 pt-4">
              <button
                className="py-2 px-6 text-xl font-semibold text-white bg-red-500 border border-white rounded-lg shadow-lg hover:bg-red-600 transition duration-300"
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

export default DatePlanner;
