import React, { useState } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import { heroBackground } from "../../../assets";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import ButtonGradient from "../../../assets/svg/ButtonGradient";

const TherapyBot = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const features = [
    {
      title: "Cognitive Behavioral Therapy (CBT) Techniques",
      description:
        "Provides tools and resources for applying CBT methods to manage and improve mental health.",
    },
    {
      title: "Mood Tracking",
      description:
        "Allows users to track their mood over time, identifying patterns and triggers.",
    },
    {
      title: "Mindfulness Exercises",
      description:
        "Offers guided mindfulness exercises to promote relaxation and mental clarity.",
    },
  ];

  const useCases = [
    "Individuals seeking mental health support and therapy resources.",
    "Therapists looking for digital tools to complement traditional therapy.",
    "Mental health apps aiming to provide CBT-based support.",
  ];

  const faqs = [
    {
      question: "How does Smart Therapy AI™ use CBT techniques?",
      answer:
        "Smart Therapy AI™ offers interactive exercises and tools based on CBT principles, helping users challenge negative thought patterns and develop healthier coping strategies.",
    },
    {
      question: "Can Smart Therapy AI™ help with mood tracking?",
      answer:
        "Yes, Smart Therapy AI™ allows users to log their moods regularly, offering insights into emotional patterns and potential triggers.",
    },
    {
      question: "How often is Smart Therapy AI™ updated with new mental health techniques?",
      answer:
        "Smart Therapy AI™ is regularly updated with the latest mental health techniques and research to provide accurate and relevant support.",
    },
    {
      question: "Does Smart Therapy AI™ offer resources for learning about mental health?",
      answer:
        "Yes, Smart Therapy AI™ provides educational materials, guides, and resources for understanding mental health conditions and treatments.",
    },
    {
      question: "Can Smart Therapy AI™ integrate with other mental health apps?",
      answer:
        "Yes, Smart Therapy AI™ can integrate with various mental health and wellness apps to provide a comprehensive support experience.",
    },
    {
      question: "How does Smart Therapy AI™ ensure user privacy?",
      answer:
        "Smart Therapy AI™ follows strict data privacy protocols, ensuring all user data and interactions are securely stored and encrypted.",
    },
    {
      question: "Does Smart Therapy AI™ offer personalized therapy sessions?",
      answer:
        "Yes, Smart Therapy AI™ tailors its therapy sessions based on user inputs and preferences to provide a personalized experience.",
    },
    {
      question: "Can Smart Therapy AI™ assist with mindfulness exercises?",
      answer:
        "Yes, Smart Therapy AI™ provides a variety of guided mindfulness exercises to help users reduce stress and improve focus.",
    },
    {
      question: "How does Smart Therapy AI™ support collaborative therapy?",
      answer:
        "Smart Therapy AI™ offers tools for sharing insights and progress with therapists, facilitating collaborative care.",
    },
    {
      question: "Is Smart Therapy AI™ suitable for all age groups?",
      answer:
        "Yes, Smart Therapy AI™ offers resources and exercises tailored to different age groups, ensuring accessible and effective support for everyone.",
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
            <h1 className="text-6xl font-bold text-center mb-8 pt-8">Smart Therapy AI™</h1>
            <p className="text-xl text-center max-w-3xl mx-auto mb-8">
              Smart Therapy AI™ is a smartbot designed to offer mental health support and therapy. It utilizes Cognitive Behavioral Therapy (CBT) techniques, mood tracking, and mindfulness exercises to provide comprehensive support to individuals seeking mental health care and therapists.
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

export default TherapyBot;
