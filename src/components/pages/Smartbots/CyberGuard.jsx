import React, { useState } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import { heroBackground } from "../../../assets";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import ButtonGradient from "../../../assets/svg/ButtonGradient";

const CyberGuard = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const features = [
    {
      title: "Threat Detection",
      description:
        "Monitors and identifies potential cybersecurity threats and vulnerabilities.",
    },
    {
      title: "Security Best Practices",
      description:
        "Provides guidelines and resources for implementing effective security measures.",
    },
    {
      title: "Incident Response",
      description:
        "Offers support and guidance for responding to security incidents and breaches.",
    },
  ];

  const useCases = [
    "Security teams looking for tools to enhance threat detection and response.",
    "IT departments seeking to improve cybersecurity practices.",
    "Businesses aiming to protect their digital assets and data.",
  ];

  const faqs = [
    {
      question: "How does Cyber Guardian Pro™ detect cybersecurity threats?",
      answer:
        "Cyber Guardian Pro™ uses advanced algorithms and machine learning to monitor network traffic and identify potential threats and anomalies.",
    },
    {
      question: "Can Cyber Guardian Pro™ recommend security measures?",
      answer:
        "Yes, Cyber Guardian Pro™ offers tailored security recommendations based on industry best practices and specific organizational needs.",
    },
    {
      question: "How often is Cyber Guardian Pro™ updated with new threat information?",
      answer:
        "Cyber Guardian Pro™ is regularly updated with the latest threat intelligence and security research to ensure accurate and relevant support.",
    },
    {
      question: "Does Cyber Guardian Pro™ offer training resources for security professionals?",
      answer:
        "Yes, Cyber Guardian Pro™ provides access to training materials and resources for enhancing cybersecurity skills and knowledge.",
    },
    {
      question: "Can Cyber Guardian Pro™ integrate with existing security systems?",
      answer:
        "Yes, Cyber Guardian Pro™ can integrate with popular security tools and platforms like SIEM systems and firewalls to enhance security workflows.",
    },
    {
      question: "How does Cyber Guardian Pro™ handle data privacy?",
      answer:
        "Cyber Guardian Pro™ follows strict data privacy protocols, ensuring all user data and interactions are securely stored and encrypted.",
    },
    {
      question: "Does Cyber Guardian Pro™ offer incident response planning?",
      answer:
        "Yes, Cyber Guardian Pro™ provides guidance and resources for developing and implementing effective incident response plans.",
    },
    {
      question: "Can Cyber Guardian Pro™ assist with compliance requirements?",
      answer:
        "Yes, Cyber Guardian Pro™ offers insights and tools to help organizations meet regulatory compliance requirements and standards.",
    },
    {
      question: "How does Cyber Guardian Pro™ support threat intelligence sharing?",
      answer:
        "Cyber Guardian Pro™ provides tools for sharing threat intelligence and collaborating with other security teams and organizations.",
    },
    {
      question: "Is Cyber Guardian Pro™ suitable for small businesses?",
      answer:
        "Absolutely, Cyber Guardian Pro™ offers scalable solutions and resources tailored to the needs of small businesses.",
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
            <h1 className="text-6xl font-bold text-center mb-8 pt-8">Cyber Guardian Pro™</h1>
            <p className="text-xl text-center max-w-3xl mx-auto mb-8">
              Cyber Guardian Pro™ is a smartbot designed to provide cybersecurity tips and threat analysis. It offers threat detection, security best practices, and incident response support, making it an essential tool for security teams and IT departments.
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

export default CyberGuard;
