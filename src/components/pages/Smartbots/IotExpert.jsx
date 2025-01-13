import React, { useState } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import { heroBackground } from "../../../assets";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import ButtonGradient from "../../../assets/svg/ButtonGradient";

const IoTExpert = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const features = [
    {
      title: "Device Management",
      description:
        "Provides tools for managing and configuring IoT devices.",
    },
    {
      title: "Data Collection",
      description:
        "Offers support for collecting and analyzing data from IoT devices.",
    },
    {
      title: "Integration Advice",
      description:
        "Provides guidance on integrating IoT devices with other systems and platforms.",
    },
  ];

  const useCases = [
    "IoT developers seeking tools for managing and integrating IoT devices.",
    "Smart home enthusiasts looking for resources to enhance their smart home setups.",
    "Organizations aiming to implement IoT solutions and strategies.",
  ];

  const faqs = [
    {
      question: "How does IoTExpert assist with device management?",
      answer:
        "IoTExpert offers tools for configuring, monitoring, and managing IoT devices to ensure optimal performance and reliability.",
    },
    {
      question: "Can IoTExpert help with data collection from IoT devices?",
      answer:
        "Yes, IoTExpert provides support for collecting and analyzing data from IoT devices to derive insights and optimize performance.",
    },
    {
      question: "How frequently is IoTExpert updated with new IoT technologies?",
      answer:
        "IoTExpert is regularly updated with the latest IoT technologies, devices, and best practices to provide accurate and relevant support.",
    },
    {
      question: "Does IoTExpert offer resources for learning about IoT?",
      answer:
        "Yes, IoTExpert provides tutorials, guides, and resources for learning about IoT concepts, devices, and integrations.",
    },
    {
      question: "Can IoTExpert integrate with IoT management platforms?",
      answer:
        "Yes, IoTExpert can integrate with popular IoT management platforms like AWS IoT, Azure IoT Hub, and Google Cloud IoT to streamline workflows.",
    },
    {
      question: "How does IoTExpert handle data privacy?",
      answer:
        "IoTExpert follows strict data privacy protocols, ensuring all user data and interactions are securely stored and encrypted.",
    },
    {
      question: "Does IoTExpert provide real-time device monitoring?",
      answer:
        "Yes, IoTExpert offers tools and resources for conducting real-time monitoring of IoT devices and systems.",
    },
    {
      question: "Can IoTExpert assist with IoT security?",
      answer:
        "Yes, IoTExpert provides guidance and resources for implementing IoT security best practices to protect devices and data.",
    },
    {
      question: "How does IoTExpert support collaborative IoT development?",
      answer:
        "IoTExpert offers tools for sharing insights and collaborating with team members on IoT projects.",
    },
    {
      question: "Is IoTExpert suitable for small IoT projects?",
      answer:
        "Absolutely, IoTExpert offers scalable solutions and resources tailored to the needs of small IoT projects.",
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
            <h1 className="text-6xl font-bold text-center mb-8 pt-8">IoTExpert</h1>
            <p className="text-xl text-center max-w-3xl mx-auto mb-8">
              IoTExpert is a smartbot designed to focus on Internet of Things (IoT) devices and integrations. It offers device management, data collection, and integration advice, making it an essential tool for IoT developers and smart home enthusiasts.
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

export default IoTExpert;
