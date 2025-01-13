import React, { useState } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import { heroBackground } from "../../../assets";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import ButtonGradient from "../../../assets/svg/ButtonGradient";

const CodeAssist = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const features = [
    {
      title: "Code Suggestions",
      description:
        "Provides code snippets and suggestions for various programming languages and frameworks.",
    },
    {
      title: "Bug Fixing",
      description:
        "Offers assistance in identifying and resolving coding errors and bugs.",
    },
    {
      title: "Code Review",
      description:
        "Provides automated code review and feedback to improve code quality and efficiency.",
    },
  ];

  const useCases = [
    "Developers seeking assistance with coding challenges and bug fixing.",
    "Coding bootcamps looking for tools to support their students' learning.",
    "Software development teams aiming to improve code quality.",
  ];

  const faqs = [
    {
      question: "How does Code Assist Pro™ provide code suggestions?",
      answer:
        "Code Assist Pro™ uses machine learning to analyze code and provide relevant suggestions, snippets, and best practices for various programming languages.",
    },
    {
      question: "Can Code Assist Pro™ help with debugging?",
      answer:
        "Yes, Code Assist Pro™ offers tools and resources to identify and fix bugs in code, along with explanations of common error messages.",
    },
    {
      question: "Does Code Assist Pro™ support multiple programming languages?",
      answer:
        "Yes, Code Assist Pro™ supports a wide range of programming languages, including Python, JavaScript, Java, C++, and more.",
    },
    {
      question: "How does Code Assist Pro™ perform code reviews?",
      answer:
        "Code Assist Pro™ provides automated code reviews, highlighting areas for improvement and offering feedback on code quality, performance, and maintainability.",
    },
    {
      question: "Can Code Assist Pro™ integrate with version control systems?",
      answer:
        "Yes, Code Assist Pro™ can integrate with version control systems like Git and GitHub to streamline code review and collaboration.",
    },
    {
      question: "Is Code Assist Pro™ suitable for beginner programmers?",
      answer:
        "Absolutely, Code Assist Pro™ offers guidance and explanations tailored to the needs of beginners, helping them learn and improve their coding skills.",
    },
    {
      question: "How often is Code Assist Pro™ updated with new coding techniques?",
      answer:
        "Code Assist Pro™ is regularly updated with the latest programming techniques, frameworks, and best practices to provide accurate and relevant support.",
    },
    {
      question: "Does Code Assist Pro™ offer resources for learning new programming languages?",
      answer:
        "Yes, Code Assist Pro™ provides tutorials, guides, and resources for learning new programming languages and frameworks.",
    },
    {
      question: "How does Code Assist Pro™ handle data security?",
      answer:
        "Code Assist Pro™ follows strict data security protocols, ensuring all code and user interactions are securely stored and encrypted.",
    },
    {
      question: "Can Code Assist Pro™ assist with software architecture design?",
      answer:
        "Yes, Code Assist Pro™ offers insights and recommendations for designing scalable and efficient software architectures.",
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
            <h1 className="text-6xl font-bold text-center mb-8 pt-8">Code Assist Pro™</h1>
            <p className="text-xl text-center max-w-3xl mx-auto mb-8">
              Code Assist Pro™ is a smartbot designed to assist with programming and software development. It offers code suggestions, bug fixing, and code review, making it an essential tool for developers and coding bootcamps.
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

export default CodeAssist;
