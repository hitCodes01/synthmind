import React, { useState } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import { heroBackground } from "../../../assets";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import ButtonGradient from "../../../assets/svg/ButtonGradient";

const DevOpsBuddy = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const features = [
    {
      title: "CI/CD Pipeline Management",
      description:
        "Provides tools for managing and automating CI/CD pipelines.",
    },
    {
      title: "Infrastructure as Code",
      description:
        "Supports the implementation and management of infrastructure as code practices.",
    },
    {
      title: "Monitoring",
      description:
        "Offers tools for monitoring application performance and infrastructure health.",
    },
  ];

  const useCases = [
    "DevOps teams seeking tools to enhance automation and efficiency.",
    "Software development teams looking for resources to implement DevOps practices.",
    "Organizations aiming to optimize their development and deployment processes.",
  ];

  const faqs = [
    {
      question: "How does DevOps Pro™ assist with CI/CD pipeline management?",
      answer:
        "DevOps Pro™ provides tools for automating and managing CI/CD pipelines, ensuring efficient and reliable software delivery.",
    },
    {
      question: "Can DevOps Pro™ help with infrastructure as code implementation?",
      answer:
        "Yes, DevOps Pro™ offers guidance and resources for implementing and managing infrastructure as code practices using tools like Terraform and Ansible.",
    },
    {
      question: "How often is DevOps Pro™ updated with new DevOps practices?",
      answer:
        "DevOps Pro™ is regularly updated with the latest DevOps practices, tools, and best practices to provide accurate and relevant support.",
    },
    {
      question: "Does DevOps Pro™ offer resources for learning DevOps?",
      answer:
        "Yes, DevOps Pro™ provides tutorials, guides, and resources for learning DevOps practices and tools.",
    },
    {
      question: "Can DevOps Pro™ integrate with DevOps tools?",
      answer:
        "Yes, DevOps Pro™ can integrate with popular DevOps tools like Jenkins, Docker, and Kubernetes to streamline workflows.",
    },
    {
      question: "How does DevOps Pro™ handle data privacy?",
      answer:
        "DevOps Pro™ follows strict data privacy protocols, ensuring all user data and interactions are securely stored and encrypted.",
    },
    {
      question: "Does DevOps Pro™ provide real-time monitoring?",
      answer:
        "Yes, DevOps Pro™ offers tools and resources for conducting real-time monitoring of applications and infrastructure.",
    },
    {
      question: "Can DevOps Pro™ assist with automated testing?",
      answer:
        "Yes, DevOps Pro™ provides tools and resources for implementing automated testing practices within CI/CD pipelines.",
    },
    {
      question: "How does DevOps Pro™ support collaborative DevOps practices?",
      answer:
        "DevOps Pro™ offers tools for sharing insights and collaborating with team members on DevOps projects.",
    },
    {
      question: "Is DevOps Pro™ suitable for small development teams?",
      answer:
        "Absolutely, DevOps Pro™ offers scalable solutions and resources tailored to the needs of small development teams.",
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
            <h1 className="text-6xl font-bold text-center mb-8 pt-8">DevOps Pro™</h1>
            <p className="text-xl text-center max-w-3xl mx-auto mb-8">
              DevOps Pro™ is a smartbot designed to support DevOps practices and automation. It offers CI/CD pipeline management, infrastructure as code, and monitoring, making it an essential tool for DevOps and software development teams.
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

export default DevOpsBuddy;
