import React, { useState } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import { heroBackground } from "../../../assets";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import ButtonGradient from "../../../assets/svg/ButtonGradient";

const LegalEagle = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const features = [
    {
      title: "Contract Analysis",
      description: "Reviews and provides insights into legal documents and contracts.",
    },
    {
      title: "Legal Research",
      description: "Accesses a vast database of legal information for research purposes.",
    },
    {
      title: "Compliance Monitoring",
      description: "Keeps track of legal compliance requirements and updates.",
    },
  ];

  const useCases = [
    "Legal departments seeking document automation.",
    "Law firms requiring efficient legal research.",
    "Companies aiming to ensure compliance with legal standards.",
  ];

  const faqs = [
    {
      question: "How does Smart Law Pro™ analyze contracts?",
      answer:
        "Smart Law Pro™ uses natural language processing to review contracts and identify key clauses, potential issues, and compliance requirements.",
    },
    {
      question: "Can Smart Law Pro™ provide legal advice?",
      answer:
        "Smart Law Pro™ offers general legal information but is not a substitute for professional legal advice.",
    },
    {
      question: "How frequently is the legal database updated?",
      answer:
        "The legal database is updated regularly to ensure access to the latest information and case law.",
    },
    {
      question: "Can Smart Law Pro™ assist with intellectual property management?",
      answer:
        "Yes, it provides information on intellectual property laws and helps manage related documents.",
    },
    {
      question: "Does Smart Law Pro™ support international legal systems?",
      answer:
        "Smart Law Pro™ covers multiple jurisdictions and provides insights into various international legal systems.",
    },
    {
      question: "How does Smart Law Pro™ handle data security?",
      answer:
        "Smart Law Pro™ adheres to strict data security protocols, ensuring all user data and documents are encrypted and secure.",
    },
    {
      question: "Can Smart Law Pro™ automate legal document creation?",
      answer:
        "Yes, it provides templates and automation tools to streamline the creation of legal documents.",
    },
    {
      question: "Does Smart Law Pro™ offer compliance alerts?",
      answer:
        "Yes, it offers alerts and reminders for upcoming compliance deadlines and changes in regulations.",
    },
    {
      question: "Can Smart Law Pro™ integrate with document management systems?",
      answer:
        "Smart Law Pro™ integrates with popular document management systems like DocuSign and SharePoint.",
    },
    {
      question: "Is Smart Law Pro™ suitable for startups?",
      answer:
        "Yes, Smart Law Pro™ provides resources and support tailored to the legal needs of startups.",
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
            <h1 className="text-6xl font-bold text-center mb-8 pt-8">Smart Law Pro™</h1>
            <p className="text-xl text-center max-w-3xl mx-auto mb-8">
              Smart Law Pro™ is a smartbot that provides legal information and document automation. It offers contract analysis, legal research, and compliance monitoring to streamline legal operations and ensure regulatory compliance.
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

export default LegalEagle;
