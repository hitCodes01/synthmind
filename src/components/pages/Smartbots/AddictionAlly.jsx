import React, { useState } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import { heroBackground } from "../../../assets";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import ButtonGradient from "../../../assets/svg/ButtonGradient";

const AddictionAlly = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const features = [
    {
      title: "Recovery Tracking",
      description:
        "Allows users to monitor their progress and achievements in recovery.",
    },
    {
      title: "Coping Strategies",
      description:
        "Provides various strategies and exercises to manage cravings and maintain recovery.",
    },
    {
      title: "Support Resources",
      description:
        "Includes resources such as support groups and counseling services for additional help.",
    },
  ];

  const useCases = [
    "Individuals in recovery seeking support and resources to maintain their progress.",
    "Support groups and counseling services looking to provide additional resources for addiction recovery.",
    "Wellness programs focusing on addiction recovery and mental health.",
  ];

  const faqs = [
    {
      question: "How does Addiction Counsel AI™ assist with recovery tracking?",
      answer:
        "Addiction Counsel AI™ provides tools for logging and monitoring recovery progress, helping users stay on track and celebrate achievements.",
    },
    {
      question: "Can Addiction Counsel AI™ provide coping strategies for managing cravings?",
      answer:
        "Yes, Addiction Counsel AI™ offers various coping strategies and exercises designed to manage cravings and support recovery.",
    },
    {
      question: "How frequently is Addiction Counsel AI™ updated with new recovery strategies?",
      answer:
        "Addiction Counsel AI™ is regularly updated with the latest research and strategies for addiction recovery to provide effective support.",
    },
    {
      question: "Does Addiction Counsel AI™ offer resources for finding support groups?",
      answer:
        "Yes, Addiction Counsel AI™ provides information on support groups and counseling services for additional help and community support.",
    },
    {
      question: "Can Addiction Counsel AI™ integrate with other recovery and wellness apps?",
      answer:
        "Yes, Addiction Counsel AI™ can integrate with various recovery and wellness apps to offer a comprehensive support experience.",
    },
    {
      question: "How does Addiction Counsel AI™ ensure user privacy?",
      answer:
        "Addiction Counsel AI™ follows strict data privacy protocols, ensuring all user data and interactions are securely stored and encrypted.",
    },
    {
      question: "Does Addiction Counsel AI™ offer personalized recovery plans?",
      answer:
        "Yes, Addiction Counsel AI™ tailors its recovery plans and recommendations based on individual user inputs and progress.",
    },
    {
      question: "Can Addiction Counsel AI™ assist with finding professional counseling services?",
      answer:
        "Yes, Addiction Counsel AI™ provides information and referrals to professional counseling services for additional support.",
    },
    {
      question: "How does Addiction Counsel AI™ support collaborative recovery care?",
      answer:
        "Addiction Counsel AI™ offers tools for sharing recovery progress and insights with support professionals, facilitating collaborative care.",
    },
    {
      question: "Is Addiction Counsel AI™ suitable for all age groups?",
      answer:
        "Yes, Addiction Counsel AI™ provides resources and strategies suitable for various age groups, ensuring effective support for addiction recovery for everyone.",
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
            <h1 className="text-6xl font-bold text-center mb-8 pt-8">Addiction Counsel AI™</h1>
            <p className="text-xl text-center max-w-3xl mx-auto mb-8">
              Addiction Counsel AI™ is a smartbot designed to provide support and resources for addiction recovery. It offers recovery tracking, coping strategies, and support resources to assist individuals in recovery and support groups.
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

export default AddictionAlly;
