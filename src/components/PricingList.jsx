import React, { useState } from "react";
import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

const gradientStyles = [
  "bg-gradient-to-b from-[#DD734F] to-[#1A1A32]",
  "bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32]",
  "bg-gradient-to-b from-[#88E5BE] to-[#1A1A32]"
];

const PricingList = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategoryDropdown = (categoryName) => {
    setExpandedCategory(expandedCategory === categoryName ? null : categoryName);
  };

  return (
    <div className="flex flex-col items-center gap-[2rem]">
      {pricing.map((category) => (
        <div key={category.category} className="w-full flex flex-col items-center">
          <div
            onClick={() => toggleCategoryDropdown(category.category)}
            className="cursor-pointer py-4"
          >
            <h2 className="text-xl font-bold mb-4 text-center">{category.category}</h2>
          </div>
          <div className="flex gap-[1rem] max-lg:flex-wrap justify-center">
            {category.plans.map((plan, index) => (
              <div
                key={plan.id}
                className={`relative w-[26rem] max-lg:w-full p-[2px] rounded-[2rem] ${gradientStyles[index % gradientStyles.length]}`}
              >
                <div className="w-full h-full bg-n-8 rounded-[2rem] p-6 flex flex-col items-center">
                  <div className="py-4">
                    <h4 className="h4 mb-2 cursor-pointer text-center" onClick={() => toggleCategoryDropdown(category.category)}>
                      {plan.title}
                    </h4>
                  </div>
                  {expandedCategory === category.category && (
                    <div className="transition-all duration-300">
                      <p className="body-3 mb-3 text-n-1/50 text-center">{plan.description}</p>
                      <div className="flex items-center h-[5.5rem] mb-6">
                        {plan.price && (
                          <>
                            <div className="h3">$</div>
                            <div className="text-[5rem] leading-none font-bold">
                              {plan.price}
                            </div>
                          </>
                        )}
                      </div>
                      <Button
                        className="w-full mb-6"
                        href="/pricing"
                        white={!!plan.price}
                      >
                        Get started
                      </Button>
                      <ul>
                        {plan.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start py-5 border-t border-n-6"
                          >
                            <img src={check} width={24} height={24} alt="Check" />
                            <p className="body-2 ml-4">{feature}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingList;