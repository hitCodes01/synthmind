import React, { useState } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import { heroBackground } from "../../../assets";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import ButtonGradient from "../../../assets/svg/ButtonGradient";

const DataScientist = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const features = [
    {
      title: "Data Cleaning",
      description:
        "Provides tools and techniques for cleaning and preparing data for analysis.",
    },
    {
      title: "Statistical Analysis",
      description:
        "Offers support for conducting various statistical analyses and tests.",
    },
    {
      title: "Visualization Tools",
      description:
        "Provides tools for creating visualizations and dashboards to present data insights.",
    },
  ];

  const useCases = [
    "Data analysts seeking tools to enhance data analysis workflows.",
    "Business intelligence teams looking for visualization and reporting tools.",
    "Organizations aiming to derive insights from their data.",
  ];

  const faqs = [
    {
      question: "How does Data Scientist Pro™ assist with data cleaning?",
      answer:
        "Data Scientist Pro™ offers tools and techniques for handling missing values, outliers, and data inconsistencies to ensure clean and reliable data.",
    },
    {
      question: "Can Data Scientist Pro™ perform statistical analysis?",
      answer:
        "Yes, Data Scientist Pro™ supports a wide range of statistical analyses, including regression, hypothesis testing, and clustering.",
    },
    {
      question: "How frequently is Data Scientist Pro™ updated with new analysis techniques?",
      answer:
        "Data Scientist Pro™ is regularly updated with the latest data analysis techniques, tools, and best practices to provide accurate and relevant support.",
    },
    {
      question: "Does Data Scientist Pro™ offer resources for learning data analysis?",
      answer:
        "Yes, Data Scientist Pro™ provides tutorials, guides, and resources for learning data analysis and visualization techniques.",
    },
    {
      question: "Can Data Scientist Pro™ integrate with data analysis tools?",
      answer:
        "Yes, Data Scientist Pro™ can integrate with popular data analysis tools like R, Python, and Tableau to streamline workflows.",
    },
    {
      question: "How does Data Scientist Pro™ handle data privacy?",
      answer:
        "Data Scientist Pro™ follows strict data privacy protocols, ensuring all user data and interactions are securely stored and encrypted.",
    },
    {
      question: "Does Data Scientist Pro™ provide real-time data analysis?",
      answer:
        "Yes, Data Scientist Pro™ offers tools and resources for conducting real-time data analysis and monitoring.",
    },
    {
      question: "Can Data Scientist Pro™ assist with data visualization?",
      answer:
        "Yes, Data Scientist Pro™ provides tools for creating visualizations and dashboards to present data insights effectively.",
    },
    {
      question: "How does Data Scientist Pro™ support collaborative analysis?",
      answer:
        "Data Scientist Pro™ offers tools for sharing analysis results and collaborating with team members on data projects.",
    },
    {
      question: "Is Data Scientist Pro™ suitable for beginners?",
      answer:
        "Absolutely, Data Scientist Pro™ offers explanations and resources tailored to the needs of beginners, helping them learn and improve their data analysis skills.",
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
            <h1 className="text-6xl font-bold text-center mb-8 pt-8">Data Scientist Pro™</h1>
            <p className="text-xl text-center max-w-3xl mx-auto mb-8">
              Data Scientist Pro™ is a smartbot designed for data analysis and visualization. It offers data cleaning, statistical analysis, and visualization tools, making it an essential tool for data analysts and business intelligence teams.
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

export default DataScientist;
