import React, { useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import { heroBackground } from "../../assets";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import ButtonGradient from "../../assets/svg/ButtonGradient";

const Legal = () => {
  const sections = [
    {
      title: "Introduction",
      content: `Phoenix Labs ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your information when you visit our
                platform, use our services, or interact with our AI-powered smartbots. By using our platform, you
                agree to the collection and use of information in accordance with this policy.`
    },
    {
      title: "Information We Collect",
      content: `
        <h4 class="mt-4 mb-2">a. Personal Information</h4>
        <p class="mb-2">We may collect personally identifiable information, including but not limited to:</p>
        <ul class="list-disc list-inside pl-5 mb-4">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Billing and payment information</li>
          <li>Address</li>
          <li>Usernames and passwords</li>
        </ul>
        <h4 class="mt-4 mb-2">b. Non-Personal Information</h4>
        <p class="mb-2">We may collect non-personal information, including but not limited to:</p>
        <ul class="list-disc list-inside pl-5 mb-4">
          <li>Browser type</li>
          <li>Operating system</li>
          <li>IP address</li>
          <li>Device information</li>
          <li>Usage data (e.g., pages visited, time spent on pages)</li>
        </ul>
        <h4 class="mt-4 mb-2">c. Cookies and Tracking Technologies</h4>
        <p class="mb-2">We use cookies and similar tracking technologies to track the activity on our platform and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our platform.</p>`
    },
    {
      title: "How We Use Your Information",
      content: `
        <p class="mb-2">We use the collected information for various purposes, including but not limited to:</p>
        <ul class="list-disc list-inside pl-5 mb-4">
          <li>Providing and maintaining our platform</li>
          <li>Personalizing your experience</li>
          <li>Processing transactions</li>
          <li>Improving our services</li>
          <li>Communicating with you, including customer support</li>
          <li>Monitoring usage of our platform</li>
          <li>Detecting, preventing, and addressing technical issues</li>
        </ul>`
    },
    {
      title: "Sharing Your Information",
      content: `
        <p class="mb-2">We do not sell your personal information. We may share your information in the following circumstances:</p>
        <li class="mt-4 mb-2">With Service Providers</h4>
        <p class="mb-2">We may share your information with third-party service providers to perform services on our behalf, such as payment processing, data analysis, email delivery, and customer support.</p>
        <li class="mt-4 mb-2">For Business Transfers</h4>
        <p class="mb-2">If we are involved in a merger, acquisition, or asset sale, your information may be transferred. We will provide notice before your personal information is transferred and becomes subject to a different privacy policy.</p>
        <li class="mt-4 mb-2">With Legal Authorities</h4>
        <p class="mb-2">We may disclose your information if required to do so by law or in response to valid requests by public authorities.</p>`
    },
    {
      title: "Data Security",
      content: `
        <p class="mb-2">We use commercially reasonable security measures to protect your personal information. However, no method of transmission over the internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.</p>`
    },
    {
      title: "Data Retention",
      content: `
        <p class="mb-2">We will retain your personal information only for as long as is necessary to fulfill the purposes for which it was collected, or as required by law. Once your information is no longer necessary for our purposes, we will securely delete or anonymize it.</p>`
    },
    {
      title: "Your Rights and Choices",
      content: `
        <p class="mb-2">Depending on your jurisdiction, you may have certain rights regarding your personal information. These rights may include:</p>
        <li class="mt-4 mb-2 ">Access and Correction</h4>
        <p class="mb-2">You have the right to access the personal information we hold about you and to request corrections if the information is inaccurate or incomplete.</p>
        <li class="mt-4 mb-2">Data Portability</h4>
        <p class="mb-2">You may request a copy of your personal information in a structured, commonly used, and machine-readable format.</p>
        <li class="mt-4 mb-2">Deletion</h4>
        <p class="mb-2">You have the right to request the deletion of your personal information under certain circumstances.</p>
        <li class="mt-4 mb-2">Objection and Restriction of Processing</h4>
        <p class="mb-2">You have the right to object to the processing of your personal information and to request the restriction of processing under certain conditions.</p>
        <li class="mt-4 mb-2">Withdraw Consent</h4>
        <p class="mb-8">If we rely on your consent to process your personal information, you have the right to withdraw your consent at any time.</p>
        <p class="mb-2">To exercise these rights, please contact us using the contact information provided below. We will respond to your request in accordance with applicable laws.</p>`
    },
    {
      title: "Third-Party Links",
      content: `
        <p class="mb-2">Our platform may contain links to third-party websites. We are not responsible for the privacy practices or the content of such websites. We encourage you to review the privacy policies of any third-party sites you visit.</p>`
    },
    {
      title: "Children's Privacy",
      content: `
        <p class="mb-2">Our platform is not intended for use by individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.</p>`
    },
    {
      title: "International Data Transfers",
      content: `
        <p class="mb-2">Your information, including personal information, may be transferred to—and maintained
        on—computers located outside of your state, province, country, or other governmental
        jurisdiction where the data protection laws may differ from those of your jurisdiction. By using
        our platform, you consent to such transfers.</p>`
    },
    {
      title: "Changes to This Privacy Policy",
      content: `
        <p class="mb-2">We may update our Privacy Policy from time to time. We will notify you of any changes by
        posting the new Privacy Policy on this page and updating the "Last updated" date. You are
        advised to review this Privacy Policy periodically for any changes. Your continued use of the
        platform after the posting of changes constitutes your acceptance of such changes.</p>`
    },
    {
      title: "Contact Us",
      content: `
        <p class="mb-2">If you have any questions about this Privacy Policy, please contact us at:</p>
        <p class="mb-2">Phoenix Labs</p>
        <p class="mb-2">The Metaverse</p>
        <p class="mb-2">Phone: +1-800-372-7052</p>`
    }
  ];

  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  return (
    <>
      <div
        className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden text-white"
        style={{ backgroundImage: `url(${heroBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <Header />
        <div className="container mx-auto px-4 py-8 lg:py-16">
          <h1 className="text-4xl font-bold text-center mb-12">Privacy Policy</h1>
          {sections.map((section, index) => (
            <div key={index} className="mb-6">
              <button
                onClick={() => toggleSection(index)}
                className="text-2xl font-semibold bg-opacity-50 hover:bg-opacity-75 transition-all duration-300 bg-gray-600 text-white py-2 px-4 w-full text-left rounded-md relative"
              >
                <span>{section.title}</span>
                <div className="absolute top-0 right-5 h-full flex items-center">
                {activeSection === index ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </button>
              {activeSection === index && (
                <div className="mt-4 bg-gray-800 bg-opacity-70 text-white p-4 rounded-md">
                  <div dangerouslySetInnerHTML={{ __html: section.content }} />
                </div>
              )}
            </div>
          ))}
        </div>
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default Legal;
