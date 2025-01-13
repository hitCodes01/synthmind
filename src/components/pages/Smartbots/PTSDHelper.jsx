import React, { useState } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import { heroBackground } from "../../../assets";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import ButtonGradient from "../../../assets/svg/ButtonGradient";

const PTSDHelper = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const features = [
    {
      title: "PTSD Assessments",
      description:
        "Provides tools for evaluating PTSD symptoms and severity.",
    },
    {
      title: "Coping Techniques",
      description:
        "Offers strategies and exercises to manage and cope with PTSD symptoms.",
    },
    {
      title: "Support Resources",
      description:
        "Includes resources such as counseling services and support groups for additional help.",
    },
  ];

  const useCases = [
    "Individuals experiencing PTSD seeking effective management and coping strategies.",
    "Therapists needing additional tools for PTSD treatment and support.",
    "Wellness programs focused on PTSD support and mental health.",
  ];

  const faqs = [
    {
      question: "How does PTSD Aid™ assist with PTSD assessments?",
      answer:
        "PTSD Aid™ provides interactive assessments to evaluate PTSD symptoms and severity, helping users understand their condition better.",
    },
    {
      question: "Can PTSD Aid™ help with coping techniques for PTSD?",
      answer:
        "Yes, PTSD Aid™ offers various coping strategies and exercises designed to manage and alleviate PTSD symptoms.",
    },
    {
      question: "How frequently is PTSD Aid™ updated with new PTSD management strategies?",
      answer:
        "PTSD Aid™ is regularly updated with the latest research and strategies in PTSD management to provide effective support.",
    },
    {
      question: "Does PTSD Aid™ offer resources for understanding PTSD?",
      answer:
        "Yes, PTSD Aid™ provides educational materials and guides for understanding PTSD and its treatments.",
    },
    {
      question: "Can PTSD Aid™ integrate with other mental health apps?",
      answer:
        "Yes, PTSD Aid™ can integrate with various mental health and wellness apps to offer a comprehensive PTSD management experience.",
    },
    {
      question: "How does PTSD Aid™ ensure user privacy?",
      answer:
        "PTSD Aid™ follows strict data privacy protocols, ensuring all user data and interactions are securely stored and encrypted.",
    },
    {
      question: "Does PTSD Aid™ offer personalized coping strategies for PTSD?",
      answer:
        "Yes, PTSD Aid™ tailors its coping techniques and recommendations based on individual user inputs and PTSD assessments.",
    },
    {
      question: "Can PTSD Aid™ assist with finding professional counseling services?",
      answer:
        "Yes, PTSD Aid™ provides information and referrals to professional counseling services for additional support.",
    },
    {
      question: "How does PTSD Aid™ support collaborative PTSD treatment?",
      answer:
        "PTSD Aid™ offers tools for sharing PTSD assessments and progress with mental health professionals, facilitating collaborative care.",
    },
    {
      question: "Is PTSD Aid™ suitable for all age groups?",
      answer:
        "Yes, PTSD Aid™ offers resources and strategies that are adaptable to different age groups, ensuring effective PTSD support for everyone.",
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
            <h1 className="text-6xl font-bold text-center mb-8 pt-8">PTSD Aid™</h1>
            <p className="text-xl text-center max-w-3xl mx-auto mb-8">
              PTSD Aid™ is a smartbot designed to assist with managing PTSD symptoms and providing resources. It offers PTSD assessments, coping techniques, and support resources to help individuals and therapists address PTSD-related challenges.
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

export default PTSDHelper;
