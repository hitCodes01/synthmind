import React from "react";
import { FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import Header from "../Header";
import Footer from "../Footer";
import { heroBackground } from "../../assets";
import Button from "../Button";
import ButtonGradient from "../../assets/svg/ButtonGradient";

const ContactUs = () => {
  const officeLocations = [
    {
      id: 1,
      name: "Phoenix Labs",
      address: "The Metaverse",
      phone: "1-800-372-7052",
      mapLink:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6434.977667618741!2d-97.04111819055649!3d32.856339367914096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e81b9ef4ff83d%3A0x79dc4223f99e2ac!2sInnovation%20Dr%2C%20Euless%2C%20TX%2075261%2C%20USA!5e0!3m2!1sen!2sin!4v1721216982460!5m2!1sen!2sin",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div
        className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden"
        style={{ backgroundImage: `url(${heroBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <Header />

        <div className="container mx-auto px-4 py-8 lg:py-16">
          {/* Contact Form */}
          <section className="mb-16">
            <h2 className="text-6xl font-bold text-center mb-6">Contact Form</h2>
            <p className="text-gray-300 text-xl text-center mb-6">
              Have a question or feedback? Fill out our contact form, and we&#39;ll get back to you as soon as possible.
            </p>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-400"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-400"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-3 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-400"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <Button
                  type="submit"
                  className=" hover:bg-gray-200 transition-all duration-300 py-2 px-4 rounded-md text-black text-sm font-semibold"
                >
                  Submit
                </Button>
              </div>
            </form>
          </section>

          {/* Office Locations */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-6">Office Locations</h2>
            <p className="text-gray-300 text-l text-center mb-6">
              Visit our offices at various locations. Find addresses, maps, and contact details.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {officeLocations.map((office) => (
                <div key={office.id} className="w-[22rem] text-center border border-gradient-to-b from-[#B9AEDF] to-[#1A1A32] p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">{office.name}</h3>
                  <p className="text-gray-300 mb-2">
                    <FaMapMarkerAlt className="inline-block mr-2" /> {office.address}
                  </p>
                  <p className="text-gray-300 mb-4">
                    <FaPhoneAlt className="inline-block mr-2" /> {office.phone} 
                  </p>
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      title={office.name}
                      className="rounded-lg"
                      src={office.mapLink}
                      allowFullScreen=""
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Social Media Links */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-6 pt-10">Social Media Links</h2>
            <p className="text-gray-300 text-l text-center mb-6">
              Follow us on social media to stay updated with the latest news and developments.
            </p>
            <div className="flex justify-center gap-20 pt-10">
              <a href="https://web.facebook.com/profile.php?viewas=100000686899395&id=100085708352952" className="text-4xl text-white hover:text-gray-600">
                <FaFacebook />
              </a>
              <a href="https://twitter.com/PhoenixLab94718" className="text-4xl text-white hover:text-gray-600">
                <FaTwitter />
              </a>
              <a href="https://www.linkedin.com/company/labs-phoenix/" className="text-4xl text-white hover:text-gray-600">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/phoenixlabs1?igsh=MzZoOGQzaXBkbG8z" className="text-4xl text-white hover:text-gray-600">
                <FaInstagram />
              </a>
            </div>
          </section>
        </div>

        <Footer />
      </div>
      <ButtonGradient/>
    </div>
  );
};

export default ContactUs;
