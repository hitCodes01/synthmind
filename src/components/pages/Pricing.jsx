import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { heroBackground } from "../../assets";
import ButtonGradient from "../../assets/svg/ButtonGradient";
import PayPalButton from "../PayPalButton";  

const Pricing = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-between">
      <div
        className="pt-[4.75rem] lg:pt-[5.25rem] flex-grow"
        style={{ backgroundImage: `url(${heroBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <Header />
        
        <div className="flex flex-col items-center py-8 w-full">
          <div className="w-full max-w-3xl p-6 bg-opacity-70 bg-gray-700 rounded-lg shadow-lg z-10 relative">
            <PayPalButton />
          </div>
        </div>
      </div>
      <Footer />
      <ButtonGradient/>
    </div>
  );
};

export default Pricing;
