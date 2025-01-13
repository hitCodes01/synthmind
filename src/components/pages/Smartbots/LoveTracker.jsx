import React, { useState } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import { heroBackground } from "../../../assets";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import ButtonGradient from "../../../assets/svg/ButtonGradient";

const LoveTracker = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const features = [
    {
      title: "Relationship Health Assessments",
      description:
        "Provides assessments to gauge the overall health and satisfaction in a relationship.",
    },
    {
      title: "Progress Tracking",
      description:
        "Allows users to track improvements and changes in their relationship over time.",
    },
    {
      title: "Activity Suggestions",
      description:
        "Offers ideas for activities and practices to enhance relationship quality and connection.",
    },
  ];

  const useCases = [
    "Couples looking to monitor and improve their relationship health.",
    "Relationship counselors and therapists providing additional resources for clients.",
  ];

  const faqs = [
    {
      question: "What kind of relationship health assessments does AI Love Tracker™ provide?",
      answer:
        "AI Love Tracker™ offers assessments to evaluate overall relationship satisfaction and health.",
    },
    {
      question: "Can AI Love Tracker™ track progress in a relationship?",
      answer:
        "Yes, AI Love Tracker™ allows users to track improvements and changes in their relationship over time.",
    },
    {
      question: "How does AI Love Tracker™ provide activity suggestions?",
      answer:
        "AI Love Tracker™ offers ideas for activities and practices designed to enhance relationship quality and connection.",
    },
    {
      question: "Does AI Love Tracker™ integrate with relationship counseling tools?",
      answer:
        "Yes, AI Love Tracker™ can integrate with counseling tools to provide additional resources and support.",
    },
    {
      question: "How frequently is AI Love Tracker™ updated with new features and content?",
      answer:
        "AI Love Tracker™ is regularly updated with new assessments, tracking tools, and activity suggestions.",
    },
    {
      question: "Does AI Love Tracker™ offer personalized relationship advice?",
      answer:
        "Yes, AI Love Tracker™ tailors its advice and suggestions based on individual relationship assessments and user input.",
    },
    {
      question: "Can AI Love Tracker™ assist with both new and established relationships?",
      answer:
        "Yes, AI Love Tracker™ provides support for both new relationships and long-term partnerships.",
    },
    {
      question: "How does AI Love Tracker™ ensure the accuracy of its assessments?",
      answer:
        "AI Love Tracker™ uses evidence-based methods and user feedback to ensure accurate and reliable assessments.",
    },
    {
      question: "Can AI Love Tracker™ assist with relationship challenges beyond tracking?",
      answer:
        "Yes, AI Love Tracker™ offers advice and resources for addressing various relationship challenges.",
    },
    {
      question: "Is AI Love Tracker™ suitable for users of all ages and relationship statuses?",
      answer:
        "Yes, AI Love Tracker™ provides support for users of different ages and relationship statuses.",
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
            <h1 className="text-6xl font-bold text-center mb-8 pt-8">AI Love Tracker™</h1>
            <p className="text-xl text-center max-w-3xl mx-auto mb-8">
              AI Love Tracker™ is a smartbot designed to help track and improve relationship health. It offers relationship health assessments, progress tracking, and activity suggestions to enhance relationship well-being.
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
                    background: 'linear-gradient(135deg, #64748B 0%, #475569 100%)',
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

export default LoveTracker;
