import React, { useState } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import { heroBackground } from "../../../assets";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import ButtonGradient from "../../../assets/svg/ButtonGradient";

const TechGuru = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const features = [
    {
      title: "IT Support",
      description:
        "Provides troubleshooting assistance for common technical issues and offers solutions for hardware and software problems.",
    },
    {
      title: "Software Recommendations",
      description:
        "Suggests software tools and applications based on user needs and preferences.",
    },
    {
      title: "Technical Documentation",
      description:
        "Offers access to technical guides and manuals for a wide range of devices and software.",
    },
  ];

  const useCases = [
    "IT support teams needing quick access to troubleshooting resources.",
    "Tech enthusiasts looking for software recommendations and technical guides.",
    "Businesses aiming to enhance their IT support capabilities.",
  ];

  const faqs = [
    {
      question: "How does Tech Guru Pro™ assist with IT support?",
      answer:
        "Tech Guru Pro™ provides step-by-step troubleshooting guides for resolving common technical issues, helping users diagnose and fix problems efficiently.",
    },
    {
      question: "Can Tech Guru Pro™ recommend software for specific needs?",
      answer:
        "Yes, Tech Guru Pro™ offers personalized software recommendations based on user requirements, industry standards, and user reviews.",
    },
    {
      question: "How frequently is Tech Guru Pro™ updated with new technical information?",
      answer:
        "Tech Guru Pro™ is regularly updated with the latest technical documentation, software releases, and IT support techniques.",
    },
    {
      question: "Does Tech Guru Pro™ support remote troubleshooting?",
      answer:
        "Yes, Tech Guru Pro™ offers remote troubleshooting advice and guides for resolving issues without on-site assistance.",
    },
    {
      question: "Can Tech Guru Pro™ integrate with existing IT support systems?",
      answer:
        "Yes, Tech Guru Pro™ can integrate with popular IT support systems like ServiceNow and Zendesk to enhance support workflows.",
    },
    {
      question: "Is Tech Guru Pro™ suitable for non-technical users?",
      answer:
        "Absolutely, Tech Guru Pro™ provides user-friendly guides and explanations to help non-technical users resolve issues.",
    },
    {
      question: "How does Tech Guru Pro™ handle data privacy?",
      answer:
        "Tech Guru Pro™ follows strict data privacy protocols, ensuring all user data and interactions are securely stored and encrypted.",
    },
    {
      question: "Can Tech Guru Pro™ provide hardware recommendations?",
      answer:
        "Yes, Tech Guru Pro™ can suggest hardware options based on performance requirements and budget constraints.",
    },
    {
      question: "Does Tech Guru Pro™ offer training resources for IT professionals?",
      answer:
        "Yes, it provides access to technical documentation and resources for training IT professionals in various technologies.",
    },
    {
      question: "How does Tech Guru Pro™ assist with software updates?",
      answer:
        "Tech Guru Pro™ offers notifications and guidance on updating software applications to the latest versions.",
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
            <h1 className="text-6xl font-bold text-center mb-8 pt-8">Tech Guru Pro™</h1>
            <p className="text-xl text-center max-w-3xl mx-auto mb-8">
              Tech Guru Pro™ is a smartbot designed to offer technology advice and troubleshooting support. It provides IT support, software recommendations, and technical documentation, making it an essential tool for IT support teams and tech enthusiasts.
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

export default TechGuru;
