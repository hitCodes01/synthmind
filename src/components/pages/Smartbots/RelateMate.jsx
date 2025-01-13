import React, { useState } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import { heroBackground } from "../../../assets";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import ButtonGradient from "../../../assets/svg/ButtonGradient";

const RelateMate = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const features = [
    {
      title: "Communication Tips",
      description:
        "Provides advice on effective communication within relationships.",
    },
    {
      title: "Conflict Resolution Strategies",
      description:
        "Offers strategies for resolving conflicts and addressing relationship issues.",
    },
    {
      title: "Relationship Advice",
      description:
        "Provides general advice on maintaining and improving relationships.",
    },
  ];

  const useCases = [
    "Couples seeking guidance on improving communication and resolving conflicts.",
    "Relationship counselors needing additional resources for their practice.",
  ];

  const faqs = [
    {
      question: "What kind of communication tips does RelateMate provide?",
      answer:
        "RelateMate offers advice on effective communication techniques, active listening, and expressing feelings.",
    },
    {
      question: "Can RelateMate help with conflict resolution?",
      answer:
        "Yes, RelateMate provides strategies for resolving conflicts and addressing common relationship issues.",
    },
    {
      question: "How does RelateMate offer general relationship advice?",
      answer:
        "RelateMate provides practical advice on maintaining healthy relationships and improving connections.",
    },
    {
      question: "Does RelateMate offer advice for different types of relationship issues?",
      answer:
        "Yes, RelateMate addresses various relationship issues, including communication problems, trust issues, and more.",
    },
    {
      question: "Can RelateMate integrate with relationship counseling platforms?",
      answer:
        "Yes, RelateMate can integrate with counseling platforms to provide additional resources and support.",
    },
    {
      question: "How frequently is RelateMate updated with new advice and strategies?",
      answer:
        "RelateMate is regularly updated with new advice, strategies, and resources based on user feedback and trends.",
    },
    {
      question: "Does RelateMate provide personalized relationship advice?",
      answer:
        "Yes, RelateMate tailors its advice based on individual user situations and needs.",
    },
    {
      question: "Can RelateMate assist with pre-marital counseling?",
      answer:
        "Yes, RelateMate offers advice and resources suitable for pre-marital counseling and preparation.",
    },
    {
      question: "How does RelateMate ensure the quality of its conflict resolution strategies?",
      answer:
        "RelateMate uses expert input and proven strategies to ensure effective and reliable conflict resolution advice.",
    },
    {
      question: "Is RelateMate suitable for both romantic and non-romantic relationships?",
      answer:
        "Yes, RelateMate offers advice and support for various types of relationships, including romantic and platonic.",
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
            <h1 className="text-6xl font-bold text-center mb-8 pt-8">RelateMate</h1>
            <p className="text-xl text-center max-w-3xl mx-auto mb-8">
              RelateMate is a smartbot focused on providing relationship advice and conflict resolution. It offers communication tips, conflict resolution strategies, and general relationship advice.
            </p>
            <div className="flex justify-center mb-8 pt-4">
              <button
                className="py-2 px-6 text-xl font-semibold text-white bg-red-500 border border-white rounded-lg shadow-lg hover:bg-red-600 transition duration-300"
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
                    background: 'linear-gradient(135deg, #64748B 0%, #475569 100%)', // Softer blue-gray gradient
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

export default RelateMate;
