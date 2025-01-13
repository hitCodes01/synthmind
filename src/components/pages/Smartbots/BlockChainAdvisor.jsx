import React, { useState } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import { heroBackground } from "../../../assets";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import ButtonGradient from "../../../assets/svg/ButtonGradient";

const BlockchainAdvisor = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const features = [
    {
      title: "Smart Contract Development",
      description:
        "Provides tools and resources for developing and deploying smart contracts.",
    },
    {
      title: "Blockchain Integration",
      description:
        "Offers guidance on integrating blockchain technology with existing systems and applications.",
    },
    {
      title: "Trend Analysis",
      description:
        "Provides insights and analysis of blockchain trends and developments.",
    },
  ];

  const useCases = [
    "Blockchain developers seeking tools for smart contract development and deployment.",
    "Fintech companies looking for resources to integrate blockchain technology.",
    "Organizations aiming to leverage blockchain for business and technological innovation.",
  ];

  const faqs = [
    {
      question: "How does BlockchainAdvisor assist with smart contract development?",
      answer:
        "BlockchainAdvisor offers tools and resources for developing, testing, and deploying smart contracts on various blockchain platforms.",
    },
    {
      question: "Can BlockchainAdvisor help with blockchain integration?",
      answer:
        "Yes, BlockchainAdvisor provides guidance and resources for integrating blockchain technology with existing systems and applications.",
    },
    {
      question: "How frequently is BlockchainAdvisor updated with new blockchain technologies?",
      answer:
        "BlockchainAdvisor is regularly updated with the latest blockchain technologies, platforms, and best practices to provide accurate and relevant support.",
    },
    {
      question: "Does BlockchainAdvisor offer resources for learning about blockchain?",
      answer:
        "Yes, BlockchainAdvisor provides tutorials, guides, and resources for learning about blockchain concepts, platforms, and applications.",
    },
    {
      question: "Can BlockchainAdvisor integrate with blockchain development tools?",
      answer:
        "Yes, BlockchainAdvisor can integrate with popular blockchain development tools like Truffle, Remix, and Ganache to streamline workflows.",
    },
    {
      question: "How does BlockchainAdvisor handle data privacy?",
      answer:
        "BlockchainAdvisor follows strict data privacy protocols, ensuring all user data and interactions are securely stored and encrypted.",
    },
    {
      question: "Does BlockchainAdvisor provide real-time blockchain monitoring?",
      answer:
        "Yes, BlockchainAdvisor offers tools and resources for conducting real-time monitoring of blockchain networks and smart contracts.",
    },
    {
      question: "Can BlockchainAdvisor assist with blockchain security?",
      answer:
        "Yes, BlockchainAdvisor provides guidance and resources for implementing blockchain security best practices to protect networks and smart contracts.",
    },
    {
      question: "How does BlockchainAdvisor support collaborative blockchain development?",
      answer:
        "BlockchainAdvisor offers tools for sharing insights and collaborating with team members on blockchain projects.",
    },
    {
      question: "Is BlockchainAdvisor suitable for small blockchain projects?",
      answer:
        "Absolutely, BlockchainAdvisor offers scalable solutions and resources tailored to the needs of small blockchain projects.",
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
            <h1 className="text-6xl font-bold text-center mb-8 pt-8">BlockchainAdvisor</h1>
            <p className="text-xl text-center max-w-3xl mx-auto mb-8">
              BlockchainAdvisor is a smartbot designed to provide insights and support for blockchain technology. It offers smart contract development, blockchain integration, and trend analysis, making it an essential tool for blockchain developers and fintech companies.
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

export default BlockchainAdvisor;
