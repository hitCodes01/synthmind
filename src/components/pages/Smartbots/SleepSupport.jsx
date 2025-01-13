import React, { useState } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import { heroBackground } from "../../../assets";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import ButtonGradient from "../../../assets/svg/ButtonGradient";

const SleepSupport= () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const features = [
    {
      title: "Sleep Tracking",
      description:
        "Allows users to monitor their sleep patterns and quality over time.",
    },
    {
      title: "Relaxation Techniques",
      description:
        "Includes techniques like guided imagery and progressive muscle relaxation to promote better sleep.",
    },
    {
      title: "Sleep Hygiene Tips",
      description:
        "Offers advice on maintaining good sleep hygiene practices to improve overall sleep quality.",
    },
  ];

  const useCases = [
    "Individuals experiencing sleep issues seeking to improve their sleep quality.",
    "Wellness programs focusing on sleep health and quality.",
    "Healthcare providers looking for tools to assist patients with sleep disorders.",
  ];

  const faqs = [
    {
      question: "How does Sleep Support AI™ assist with sleep tracking?",
      answer:
        "Sleep Support AI™ provides tools to log and analyze sleep patterns, helping users understand their sleep quality and identify areas for improvement.",
    },
    {
      question: "Can Sleep Support AI™ help with relaxation techniques for better sleep?",
      answer:
        "Yes, Sleep Support AI™ offers a variety of relaxation techniques to help users wind down and prepare for restful sleep.",
    },
    {
      question: "How frequently is Sleep Support AI™ updated with new sleep improvement strategies?",
      answer:
        "Sleep Support AI™ is regularly updated with the latest research and strategies for improving sleep quality.",
    },
    {
      question: "Does Sleep Support AI™ offer resources for learning about sleep hygiene?",
      answer:
        "Yes, Sleep Support AI™ provides educational materials and tips on maintaining good sleep hygiene to enhance overall sleep health.",
    },
    {
      question: "Can Sleep Support AI™ integrate with other health and wellness apps?",
      answer:
        "Yes, Sleep Support AI™ can integrate with various health and wellness apps to provide a comprehensive approach to sleep improvement.",
    },
    {
      question: "How does Sleep Support AI™ ensure user privacy?",
      answer:
        "Sleep Support AI™ follows strict data privacy protocols, ensuring all user data and interactions are securely stored and encrypted.",
    },
    {
      question: "Does Sleep Support AI™ offer personalized sleep improvement plans?",
      answer:
        "Yes, Sleep Support AI™ tailors its recommendations and techniques based on individual sleep patterns and user inputs.",
    },
    {
      question: "Can Sleep Support AI™ assist with managing sleep disorders?",
      answer:
        "Yes, Sleep Support AI™ offers tools and tips that can assist with managing common sleep disorders and improving overall sleep quality.",
    },
    {
      question: "How does Sleep Support AI™ support collaborative sleep health?",
      answer:
        "Sleep Support AI™ provides tools for sharing sleep data and progress with healthcare providers, facilitating collaborative care.",
    },
    {
      question: "Is Sleep Support AI™ suitable for all age groups?",
      answer:
        "Yes, Sleep Support AI™ offers resources and techniques that are adaptable to different age groups, ensuring effective sleep support for everyone.",
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
            <h1 className="text-6xl font-bold text-center mb-8 pt-8">Sleep Support AI™</h1>
            <p className="text-xl text-center max-w-3xl mx-auto mb-8">
              Sleep Support AI™ is a smartbot designed to provide support for improving sleep quality. It offers sleep tracking, relaxation techniques, and sleep hygiene tips to help individuals and wellness programs address sleep issues.
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

export default SleepSupport;
