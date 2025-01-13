import React, { useState } from 'react';
import Sidebar from '../../Sidebar';
import { FaQuestionCircle, FaBook, FaEnvelope, FaComments, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Support = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const faqs = [
    {
      category: 'General Questions',
      questions: [
        {
          id: 'q1',
          question: 'What is Phoenix Labs?',
          answer: 'Phoenix Labs is a global technology company dedicated to leveraging advanced AI and data analytics to revolutionize healthcare, gaming, agriculture, and more.',
        },
        {
          id: 'q2',
          question: 'How can I contact customer support?',
          answer: 'You can contact our customer support team via email at support@phoenixlabs.com or by calling +1 (800) 123-4567.',
        },
        {
          id: 'q3',
          question: 'How do I sign up for a subscription?',
          answer: 'Visit our Subscription Plans page, select the plan that suits your needs, and follow the instructions to complete the sign-up process.',
        },
        {
          id: 'q4',
          question: 'What payment methods do you accept?',
          answer: 'We accept major credit cards, including Visa, MasterCard, and American Express. We also accept PayPal and other online payment methods.',
        },
      ],
    },
    {
      category: 'Smartbots and Services',
      questions: [
        {
          id: 'q5',
          question: 'How do I access my subscribed smartbots?',
          answer: 'Log in to your account and navigate to the "My Smartbots" section. You will find all your subscribed smartbots there, ready to be accessed.',
        },
        {
          id: 'q6',
          question: 'Can I try a smartbot before subscribing?',
          answer: 'Yes, we offer free trials for some of our smartbots. Check the specific smartbot page for more details on trial availability.',
        },
        {
          id: 'q7',
          question: 'How do I manage my subscriptions?',
          answer: 'You can manage your subscriptions by logging into your account and navigating to the "My Smartbots" section. From there, you can upgrade, downgrade, or cancel your subscriptions.',
        },
        {
          id: 'q8',
          question: 'What happens if I cancel my subscription?',
          answer: 'If you cancel your subscription, you will still have access to the smartbot until the end of the current billing cycle. After that, access will be revoked.',
        },
      ],
    },
    {
      category: 'Privacy and Security',
      questions: [
        {
          id: 'q9',
          question: 'How does Phoenix Labs protect my personal information?',
          answer: 'We use commercially reasonable security measures, including encryption and secure servers, to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure.',
        },
        {
          id: 'q10',
          question: 'How can I update my personal information?',
          answer: 'You can update your personal information by logging into your account and navigating to the "Profile Settings" section.',
        },
        {
          id: 'q11',
          question: 'What should I do if I suspect unauthorized access to my account?',
          answer: 'If you suspect unauthorized access to your account, please contact our customer support immediately. We recommend changing your password and enabling two-factor authentication.',
        },
      ],
    },
    {
      category: 'Technical Issues',
      questions: [
        {
          id: 'q12',
          question: 'What should I do if I encounter a technical issue with a smartbot?',
          answer: 'If you encounter a technical issue, please visit our Support page for troubleshooting guides or contact our customer support team for assistance.',
        },
        {
          id: 'q13',
          question: 'How can I reset my password?',
          answer: 'You can reset your password by clicking the "Forgot Password" link on the login page and following the instructions sent to your registered email address.',
        },
      ],
    },
    {
      category: 'Billing and Payments',
      questions: [
        {
          id: 'q14',
          question: 'How do I update my payment information?',
          answer: 'You can update your payment information by logging into your account and navigating to the "Billing Information" section.',
        },
        {
          id: 'q15',
          question: 'Can I get a refund for my subscription?',
          answer: 'Refund policies vary depending on the specific smartbot and subscription plan. Please refer to our Refund Policy page for detailed information.',
        },
      ],
    },
    {
      category: 'Customization and Personalization',
      questions: [
        {
          id: 'q16',
          question: 'Can I customize the smartbots to suit my needs?',
          answer: 'Yes, many of our smartbots offer customization options. You can adjust settings and preferences within the chatbot\'s interface or settings menu.',
        },
        {
          id: 'q17',
          question: 'How do I provide feedback on a smartbot?',
          answer: 'We value your feedback. You can provide feedback directly within the smartbot interface or by contacting our customer support team.',
        },
      ],
    },
    {
      category: 'Usage and Interaction',
      questions: [
        {
          id: 'q18',
          question: 'How do I track my usage statistics?',
          answer: 'You can track your usage statistics by logging into your account and navigating to the "Usage Statistics" section. Here, you will find detailed reports and graphs.',
        },
        {
          id: 'q19',
          question: 'Are there any limitations on smartbot usage?',
          answer: 'Some subscription plans may have usage limitations. Please refer to the specific smartbot\'s subscription plan details for more information.',
        },
      ],
    },
    {
      category: 'Data and Privacy Rights',
      questions: [
        {
          id: 'q20',
          question: 'How can I exercise my data privacy rights?',
          answer: 'To exercise your data privacy rights, such as access, correction, deletion, or objection, please contact us at privacy@phoenixlabs.com. We will respond to your request in accordance with applicable laws.',
        },
      ],
    },
  ];

  const toggleFAQ = (id) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-4 sm:p-8 bg-gray-100 overflow-y-auto lg:pl-80 sm:pt-10">
        <div className="mb-4 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-500 text-center">Support</h1>
        </div>

        {/* FAQ Section */}
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-blue-500">Frequently Asked Questions (FAQs)</h2>
          {faqs.map((faqCategory, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-blue-500">{faqCategory.category}</h3>
              {faqCategory.questions.map((faq) => (
                <div key={faq.id} className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-4">
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleFAQ(faq.id)}
                  >
                    <p className="text-sm sm:text-base text-black font-semibold">{faq.question}</p>
                    {expandedFAQ === faq.id ? (
                      <FaChevronUp className="text-blue-500" />
                    ) : (
                      <FaChevronDown className="text-blue-500" />
                    )}
                  </div>
                  {expandedFAQ === faq.id && (
                    <p className="text-xs sm:text-sm text-gray-600 mt-2">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* User Guides Section */}
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-blue-500">User Guides</h2>
          <Link to="/chatbots">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:bg-blue-50 transition-colors duration-300 cursor-pointer">
              <div className="flex items-center mb-4">
                <FaBook className="w-8 h-8 sm:w-12 sm:h-12 text-blue-500 mr-4" />
                <div>
                  <p className="text-sm sm:text-lg font-semibold text-blue-500">Detailed documentation and tutorials for each smartbot.</p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Customer Support Section */}
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-blue-500">Customer Support</h2>
          <Link to="/contact">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:bg-blue-50 transition-colors duration-300 cursor-pointer">
              <div className="flex items-center mb-4">
                <FaEnvelope className="w-8 h-8 sm:w-12 sm:h-12 text-blue-500 mr-4" />
                <div>
                  <p className="text-sm sm:text-lg font-semibold text-blue-500">Contact our support team for assistance with any issues or questions.</p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Community Forum Section */}
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-blue-500">Community Forum</h2>
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:bg-blue-50 transition-colors duration-300 cursor-pointer">
            <div className="flex items-center mb-4">
              <FaComments className="w-8 h-8 sm:w-12 sm:h-12 text-blue-500 mr-4" />
              <div>
                <p className="text-sm sm:text-lg font-semibold text-blue-500">Join discussions and connect with other users.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Support;
