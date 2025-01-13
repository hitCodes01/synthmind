import React, { useState } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import { heroBackground } from "../../../assets";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import ButtonGradient from "../../../assets/svg/ButtonGradient";

const FlirtFriend = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const features = [
    {
      title: "Flirting Techniques",
      description:
        "Offers tips and techniques for effective flirting and making a positive impression.",
    },
    {
      title: "Conversation Tips",
      description:
        "Provides advice on how to start and maintain engaging conversations.",
    },
    {
      title: "Confidence Building",
      description:
        "Offers guidance on building self-confidence and improving social interactions.",
    },
  ];

  const useCases = [
    "Individuals looking to improve their flirting skills and confidence.",
    "Dating services providing additional resources for users.",
  ];

  const faqs = [
    {
      question: "What kind of flirting techniques does FlirtFriend offer?",
      answer:
        "FlirtFriend provides tips on body language, conversation starters, and ways to create a positive impression.",
    },
    {
      question: "Can FlirtFriend help with conversation starters?",
      answer:
        "Yes, FlirtFriend offers a range of conversation starters to help users initiate engaging dialogues.",
    },
    {
      question: "How does FlirtFriend provide confidence-building advice?",
      answer:
        "FlirtFriend offers practical advice and exercises to help users build self-confidence and improve their social skills.",
    },
    {
      question: "Does FlirtFriend offer tips for different dating scenarios?",
      answer:
        "Yes, FlirtFriend provides tips for various dating scenarios, including first dates, casual encounters, and more.",
    },
    {
      question: "Can FlirtFriend integrate with dating apps?",
      answer:
        "Yes, FlirtFriend can integrate with dating apps to enhance user experience and provide additional resources.",
    },
    {
      question: "How frequently is FlirtFriend updated with new content?",
      answer:
        "FlirtFriend is regularly updated with new flirting tips, conversation starters, and confidence-building advice.",
    },
    {
      question: "Does FlirtFriend offer personalized advice?",
      answer:
        "Yes, FlirtFriend provides personalized advice based on user input and dating scenarios.",
    },
    {
      question: "Can FlirtFriend assist with improving online dating interactions?",
      answer:
        "Yes, FlirtFriend offers tips and advice specifically for online dating and virtual interactions.",
    },
    {
      question: "How does FlirtFriend ensure the relevance of its advice?",
      answer:
        "FlirtFriend uses up-to-date trends and user feedback to ensure relevant and effective advice.",
    },
    {
      question: "Is FlirtFriend suitable for users of all experience levels?",
      answer:
        "Yes, FlirtFriend provides advice suitable for both beginners and experienced daters.",
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
            <h1 className="text-6xl font-bold text-center mb-8 pt-8">FlirtFriend</h1>
            <p className="text-xl text-center max-w-3xl mx-auto mb-8">
              FlirtFriend is a smartbot designed to offer flirting tips and conversation starters. It provides users with techniques for flirting, tips for engaging conversations, and confidence-building advice.
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

export default FlirtFriend;
