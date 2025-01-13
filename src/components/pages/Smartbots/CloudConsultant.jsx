import React, { useState } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import { heroBackground } from "../../../assets";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import ButtonGradient from "../../../assets/svg/ButtonGradient";

const CloudConsultant = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const features = [
    {
      title: "Cloud Service Recommendations",
      description:
        "Provides guidance on selecting and implementing cloud services based on user needs and preferences.",
    },
    {
      title: "Cost Optimization",
      description:
        "Offers tools and resources for optimizing cloud costs and usage.",
    },
    {
      title: "Deployment Strategies",
      description:
        "Provides support for planning and implementing cloud deployment strategies.",
    },
  ];

  const useCases = [
    "Cloud engineers seeking guidance on cloud service selection and management.",
    "IT departments looking for tools to optimize cloud costs and performance.",
    "Organizations aiming to implement cloud computing strategies.",
  ];

  const faqs = [
    {
      question: "How does Cloud Consultant Pro™ provide cloud service recommendations?",
      answer:
        "Cloud Consultant Pro™ offers tailored cloud service recommendations based on user requirements, industry standards, and provider offerings.",
    },
    {
      question: "Can Cloud Consultant Pro™ help with cloud cost optimization?",
      answer:
        "Yes, Cloud Consultant Pro™ provides tools and resources for analyzing and optimizing cloud costs and usage to reduce expenses and improve efficiency.",
    },
    {
      question: "How frequently is Cloud Consultant Pro™ updated with new cloud technologies?",
      answer:
        "Cloud Consultant Pro™ is regularly updated with the latest cloud technologies, services, and best practices to provide accurate and relevant support.",
    },
    {
      question: "Does Cloud Consultant Pro™ offer resources for learning cloud computing?",
      answer:
        "Yes, Cloud Consultant Pro™ provides tutorials, guides, and resources for learning cloud computing concepts and practices.",
    },
    {
      question: "Can Cloud Consultant Pro™ integrate with cloud management tools?",
      answer:
        "Yes, Cloud Consultant Pro™ can integrate with popular cloud management tools like AWS, Azure, and Google Cloud Platform to streamline workflows.",
    },
    {
      question: "How does Cloud Consultant Pro™ handle data privacy?",
      answer:
        "Cloud Consultant Pro™ follows strict data privacy protocols, ensuring all user data and interactions are securely stored and encrypted.",
    },
    {
      question: "Does Cloud Consultant Pro™ provide real-time cloud monitoring?",
      answer:
        "Yes, Cloud Consultant Pro™ offers tools and resources for conducting real-time monitoring of cloud services and infrastructure.",
    },
    {
      question: "Can Cloud Consultant Pro™ assist with cloud migration?",
      answer:
        "Yes, Cloud Consultant Pro™ provides guidance and resources for planning and executing cloud migration strategies.",
    },
    {
      question: "How does Cloud Consultant Pro™ support collaborative cloud management?",
      answer:
        "Cloud Consultant Pro™ offers tools for sharing insights and collaborating with team members on cloud projects.",
    },
    {
      question: "Is Cloud Consultant Pro™ suitable for small businesses?",
      answer:
        "Absolutely, Cloud Consultant Pro™ offers scalable solutions and resources tailored to the needs of small businesses.",
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
            <h1 className="text-6xl font-bold text-center mb-8 pt-8">Cloud Consultant Pro™</h1>
            <p className="text-xl text-center max-w-3xl mx-auto mb-8">
              Cloud Consultant Pro™ is a smartbot designed to provide cloud computing advice and management. It offers cloud service recommendations, cost optimization, and deployment strategies, making it an essential tool for cloud engineers and IT departments.
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

export default CloudConsultant;
