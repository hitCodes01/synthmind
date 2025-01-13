import React, { useState } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import { heroBackground } from "../../../assets";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import ButtonGradient from "../../../assets/svg/ButtonGradient";

const MindfulnessMentor = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const features = [
    {
      title: "Guided Meditations",
      description:
        "Provides a variety of guided meditations to promote relaxation and mindfulness.",
    },
    {
      title: "Mindfulness Exercises",
      description:
        "Includes exercises designed to improve mindfulness and focus.",
    },
    {
      title: "Progress Tracking",
      description:
        "Allows users to monitor their mindfulness practice and progress over time.",
    },
  ];

  const useCases = [
    "Individuals seeking to improve their mindfulness practice and overall well-being.",
    "Mindfulness practitioners looking for tools and resources to enhance their practice.",
    "Wellness programs aiming to incorporate mindfulness techniques.",
  ];

  const faqs = [
    {
      question: "How does Mindfulness AI™ assist with mindfulness practices?",
      answer:
        "Mindfulness AI™ offers guided meditations and exercises designed to enhance mindfulness and relaxation.",
    },
    {
      question: "Can Mindfulness AI™ help with progress tracking in mindfulness practice?",
      answer:
        "Yes, Mindfulness AI™ allows users to log and monitor their mindfulness practice and progress, providing insights into their practice.",
    },
    {
      question: "How frequently is Mindfulness AI™ updated with new mindfulness techniques?",
      answer:
        "Mindfulness AI™ is regularly updated with the latest mindfulness techniques and practices to provide effective support.",
    },
    {
      question: "Does Mindfulness AI™ offer resources for learning about mindfulness?",
      answer:
        "Yes, Mindfulness AI™ provides educational materials and guides for understanding and practicing mindfulness.",
    },
    {
      question: "Can Mindfulness AI™ integrate with other wellness apps?",
      answer:
        "Yes, Mindfulness AI™ can integrate with various wellness and mental health apps to provide a comprehensive mindfulness experience.",
    },
    {
      question: "How does Mindfulness AI™ ensure user privacy?",
      answer:
        "Mindfulness AI™ follows strict data privacy protocols, ensuring all user data and interactions are securely stored and encrypted.",
    },
    {
      question: "Does Mindfulness AI™ offer personalized mindfulness exercises?",
      answer:
        "Yes, Mindfulness AI™ tailors its mindfulness exercises and recommendations based on user inputs and progress.",
    },
    {
      question: "Can Mindfulness AI™ assist with mindfulness techniques for stress reduction?",
      answer:
        "Yes, Mindfulness AI™ provides mindfulness techniques specifically designed to help reduce stress and improve overall well-being.",
    },
    {
      question: "How does Mindfulness AI™ support collaborative mindfulness practice?",
      answer:
        "Mindfulness AI™ offers tools for sharing mindfulness progress and insights with mindfulness practitioners and coaches, facilitating collaborative practice.",
    },
    {
      question: "Is Mindfulness AI™ suitable for all age groups?",
      answer:
        "Yes, Mindfulness AI™ provides resources and techniques that are adaptable to different age groups, ensuring effective mindfulness support for everyone.",
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
            <h1 className="text-6xl font-bold text-center mb-8 pt-8">Mindfulness AI™</h1>
            <p className="text-xl text-center max-w-3xl mx-auto mb-8">
              Mindfulness AI™ is a smartbot focused on mindfulness practices and techniques. It offers guided meditations, mindfulness exercises, and progress tracking to help individuals and mindfulness practitioners enhance their mindfulness practice.
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

export default MindfulnessMentor;
