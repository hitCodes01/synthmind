import React from "react";
import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex flex-col items-center sm:items-start gap-6">
        <div className="flex flex-col sm:flex-row sm:justify-between w-full gap-6">
          <div className="flex flex-col sm:flex-row sm:justify-between items-center w-full gap-6">
            <div className="flex flex-col items-center sm:items-start gap-4 w-full sm:w-1/2">
              <h3 className="font-bold mb-2 text-lg sm:text-xl">Quick Links</h3>
              <ul className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <li><a href="/" className="text-gray-400 hover:text-white text-sm sm:text-base">Home</a></li>
                <li><a href="/about" className="text-gray-400 hover:text-white text-sm sm:text-base">About</a></li>
                <li><a href="/chatbots" className="text-gray-400 hover:text-white text-sm sm:text-base">Smart Bots</a></li>
                <li><a href="/blog" className="text-gray-400 hover:text-white text-sm sm:text-base">Blog</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white text-sm sm:text-base">Contact</a></li>
                <li><a href="/legal" className="text-gray-400 hover:text-white text-sm sm:text-base">Legal</a></li>
              </ul>
            </div>
            <div className="flex flex-col items-center sm:items-start gap-4 w-full sm:w-1/2">
              <h3 className="font-bold mb-2 text-lg sm:text-xl">Newsletter Sign-Up</h3>
              <form className="flex flex-col sm:flex-row items-center gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-pink-500 hover:bg-pink-600 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center sm:items-start gap-4 mt-6">
          <h3 className="font-bold mb-2 text-lg sm:text-xl">Follow Us</h3>
          <ul className="flex gap-5 flex-wrap justify-center sm:justify-start">
            {socials.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
              >
                <img src={item.iconUrl} width={16} height={16} alt={item.title} />
              </a>
            ))}
          </ul>
        </div>
        <div className="text-center mt-6 text-sm text-gray-400">
          <p>All rights reserved © Phoenix Labs. Read our <a href="#legal" className="hover:underline">legal disclaimers</a> and <a href="#copyright" className="hover:underline">copyright details</a>.</p>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
