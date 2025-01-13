import React, { useState } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import { heroBackground } from "../../../assets";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import ButtonGradient from "../../../assets/svg/ButtonGradient";

const GriefGuide = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const features = [
    {
      title: "Grief Journaling",
      description:
        "Provides a platform for users to journal their thoughts and feelings related to grief and loss.",
    },
    {
      title: "Coping Strategies",
      description:
        "Offers various strategies and exercises to manage and cope with grief.",
    },
    {
      title: "Support Resources",
      description:
        "Includes resources such as support groups and counseling services for additional help.",
    },
  ];

  const useCases = [
    "Individuals experiencing grief and loss seeking support and coping strategies.",
    "Support groups and counseling services looking to provide additional resources for those grieving.",
    "Wellness programs focusing on grief support and mental health.",
  ];

  const faqs = [
    {
      question: "How does GriefGuide assist with grief journaling?",
      answer:
        "GriefGuide offers a dedicated space for users to express their thoughts and feelings related to their grief, helping them process their emotions.",
    },
    {
      question: "Can GriefGuide provide coping strategies for dealing with grief?",
      answer:
        "Yes, GriefGuide offers various coping strategies and exercises designed to help users manage their grief and find comfort.",
    },
    {
      question: "How frequently is GriefGuide updated with new grief support resources?",
      answer:
        "GriefGuide is regularly updated with the latest resources and strategies for coping with grief and loss.",
    },
    {
      question: "Does GriefGuide offer resources for finding support groups?",
      answer:
        "Yes, GriefGuide provides information on support groups and counseling services for additional help and community support.",
    },
    {
      question: "Can GriefGuide integrate with other mental health apps?",
      answer:
        "Yes, GriefGuide can integrate with various mental health apps to offer a comprehensive grief support experience.",
    },
    {
      question: "How does GriefGuide ensure user privacy?",
      answer:
        "GriefGuide adheres to strict data privacy protocols, ensuring all user data and interactions are securely stored and encrypted.",
    },
    {
      question: "Does GriefGuide offer personalized grief support?",
      answer:
        "Yes, GriefGuide tailors its coping strategies and resources based on individual user inputs and grief experiences.",
    },
    {
      question: "Can GriefGuide assist with finding professional counseling services?",
      answer:
        "Yes, GriefGuide provides information and referrals to professional counseling services for additional support.",
    },
    {
      question: "How does GriefGuide support collaborative grief support?",
      answer:
        "GriefGuide offers tools for sharing grief journaling and progress with support professionals, facilitating collaborative care.",
    },
    {
      question: "Is GriefGuide suitable for all age groups?",
      answer:
        "Yes, GriefGuide offers resources and support suitable for various age groups, ensuring effective grief assistance for everyone.",
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
            <h1 className="text-6xl font-bold text-center mb-8 pt-8">GriefGuide</h1>
            <p className="text-xl text-center max-w-3xl mx-auto mb-8">
              GriefGuide is a smartbot designed to offer support and resources for coping with grief and loss. It provides grief journaling, coping strategies, and support resources to help individuals navigate through their grieving process.
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

export default GriefGuide;
