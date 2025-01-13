import React, { useState } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import { heroBackground } from "../../../assets";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import ButtonGradient from "../../../assets/svg/ButtonGradient";

const AnxietyAid = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const features = [
    {
      title: "Anxiety Assessments",
      description:
        "Provides tools for evaluating anxiety levels and identifying symptoms.",
    },
    {
      title: "Coping Techniques",
      description:
        "Offers a variety of strategies and exercises to manage anxiety.",
    },
    {
      title: "Relaxation Exercises",
      description:
        "Includes techniques such as guided imagery and progressive muscle relaxation to reduce anxiety.",
    },
  ];

  const useCases = [
    "Individuals experiencing anxiety seeking effective management strategies.",
    "Mental health practitioners needing additional tools for anxiety treatment.",
    "Wellness programs focused on anxiety reduction and support.",
  ];

  const faqs = [
    {
      question: "How does Anxiety Aid Pro™ assist with anxiety assessments?",
      answer:
        "Anxiety Aid Pro™ provides interactive assessments to evaluate anxiety levels and identify key symptoms, helping users understand their condition better.",
    },
    {
      question: "Can Anxiety Aid Pro™ help with coping techniques for anxiety?",
      answer:
        "Yes, Anxiety Aid Pro™ offers a range of coping techniques and exercises designed to manage and alleviate anxiety symptoms.",
    },
    {
      question: "How frequently is Anxiety Aid Pro™ updated with new anxiety management strategies?",
      answer:
        "Anxiety Aid Pro™ is regularly updated with the latest research and strategies in anxiety management to provide effective support.",
    },
    {
      question: "Does Anxiety Aid Pro™ offer resources for understanding anxiety disorders?",
      answer:
        "Yes, Anxiety Aid Pro™ provides educational materials, guides, and resources for understanding anxiety disorders and their treatments.",
    },
    {
      question: "Can Anxiety Aid Pro™ integrate with other mental health apps?",
      answer:
        "Yes, Anxiety Aid Pro™ can integrate with various mental health and wellness apps to offer a comprehensive anxiety management experience.",
    },
    {
      question: "How does Anxiety Aid Pro™ ensure user privacy?",
      answer:
        "Anxiety Aid Pro™ adheres to strict data privacy protocols, ensuring all user data and interactions are securely stored and encrypted.",
    },
    {
      question: "Does Anxiety Aid Pro™ offer personalized coping strategies?",
      answer:
        "Yes, Anxiety Aid Pro™ tailors its coping techniques and recommendations based on individual user inputs and anxiety assessments.",
    },
    {
      question: "Can Anxiety Aid Pro™ assist with relaxation techniques for anxiety?",
      answer:
        "Yes, Anxiety Aid Pro™ includes guided relaxation exercises such as progressive muscle relaxation and deep breathing to help manage anxiety.",
    },
    {
      question: "How does Anxiety Aid Pro™ support collaborative anxiety treatment?",
      answer:
        "Anxiety Aid Pro™ offers tools for sharing anxiety assessments and coping progress with mental health professionals, facilitating collaborative care.",
    },
    {
      question: "Is Anxiety Aid Pro™ suitable for all age groups?",
      answer:
        "Yes, Anxiety Aid Pro™ provides resources and strategies suitable for various age groups, ensuring effective anxiety management for everyone.",
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
            <h1 className="text-6xl font-bold text-center mb-8 pt-8">Anxiety Aid Pro™</h1>
            <p className="text-xl text-center max-w-3xl mx-auto mb-8">
              Anxiety Aid Pro™ is a smartbot designed to assist with anxiety management and coping strategies. It offers anxiety assessments, coping techniques, and relaxation exercises to support individuals dealing with anxiety and mental health practitioners.
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

export default AnxietyAid;
