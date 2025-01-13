import React, { useState } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import { heroBackground } from "../../../assets";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import ButtonGradient from "../../../assets/svg/ButtonGradient";

const ArtAdvisor = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const features = [
    {
      title: "Technique Tutorials",
      description:
        "Provides step-by-step tutorials on various art techniques, including drawing, painting, and digital art.",
    },
    {
      title: "Project Ideas",
      description:
        "Offers a range of project ideas and inspiration for different art forms and styles.",
    },
    {
      title: "Critique and Feedback",
      description:
        "Provides constructive critique and feedback on user-submitted artwork to help improve artistic skills.",
    },
  ];

  const useCases = [
    "Art students seeking guidance and support for their projects.",
    "Art teachers needing resources and tools for instruction.",
    "Art enthusiasts interested in improving their skills and techniques.",
  ];

  const faqs = [
    {
      question: "How does Art Advisor Pro™ provide technique tutorials?",
      answer:
        "Art Advisor Pro™ offers step-by-step tutorials on various art techniques, including drawing, painting, and digital art.",
    },
    {
      question: "Can Art Advisor Pro™ suggest project ideas?",
      answer:
        "Yes, Art Advisor Pro™ provides a range of project ideas and inspiration for different art forms and styles.",
    },
    {
      question: "How does Art Advisor Pro™ offer critique and feedback?",
      answer:
        "Art Advisor Pro™ provides constructive critique and feedback on user-submitted artwork, helping artists improve their skills.",
    },
    {
      question: "Does Art Advisor Pro™ cover different art mediums?",
      answer:
        "Yes, Art Advisor Pro™ covers various art mediums, including traditional and digital art.",
    },
    {
      question: "Can Art Advisor Pro™ assist with art portfolio development?",
      answer:
        "Yes, Art Advisor Pro™ provides guidance and tips for developing and showcasing an art portfolio.",
    },
    {
      question: "How frequently is Art Advisor Pro™ updated with new content?",
      answer:
        "Art Advisor Pro™ is regularly updated with new tutorials, project ideas, and resources to keep the content fresh and relevant.",
    },
    {
      question: "Does Art Advisor Pro™ offer interactive features for learning?",
      answer:
        "Yes, Art Advisor Pro™ includes interactive features such as exercises and critiques to engage users in learning.",
    },
    {
      question: "Can Art Advisor Pro™ integrate with art education platforms?",
      answer:
        "Yes, Art Advisor Pro™ can integrate with art education tools and platforms for a comprehensive learning experience.",
    },
    {
      question: "How does Art Advisor Pro™ ensure the quality of its content?",
      answer:
        "Art Advisor Pro™ uses expert input and high-quality resources to ensure the quality and relevance of its content.",
    },
    {
      question: "Is Art Advisor Pro™ suitable for all skill levels?",
      answer:
        "Yes, Art Advisor Pro™ provides resources and support for various skill levels, from beginners to advanced artists.",
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
            <h1 className="text-6xl font-bold text-center mb-8 pt-8">Art Advisor Pro™</h1>
            <p className="text-xl text-center max-w-3xl mx-auto mb-8">
              Art Advisor Pro™ is a smartbot designed to provide guidance and support for learning and practicing art. It offers technique tutorials, project ideas, and critique and feedback to enhance artistic skills.
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

export default ArtAdvisor;
