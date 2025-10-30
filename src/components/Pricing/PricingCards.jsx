import React from "react";
import Card from "./Card";

const PricingCards = () => {
  const pricing = [
    {
      name: "Premium",
      displayPrice: "$5",
      discountText: "40% OFF",
      actualPrice: "$2.99",
      tenure: "/ Month",
      offerMessage: "⏳ Offer ends in ",
      showCountdown: true,
      countdownTimer: 13288,
      tag: "Most Popular",
      features: [
        { available: true, text: "Full Premium Access" },
        { available: true, text: "Advanced Timing Controls" },
        { available: true, text: "Anti-Detection Technology" },
        { available: true, text: "Automate Membean Training" },
        { available: true, text: "See Correct Answers Instantly" },
        { available: true, text: "Comprehensive Statistics" },
        { available: true, text: "Customizable Behavior" },
        { available: true, text: "Intelligent Typing Simulation" },
        { available: true, text: "Theme Customization" },
      ],
      ctaText: "Try Free for 7 Days",
      ctaLink: "/dashboard",
      btnType: "primary",
    },
    {
      name: "Chrome Extension",
      displayPrice: null,
      discountText: null,
      actualPrice: "FREE",
      tenure: null,
      offerMessage: null,
      showCountdown: false,
      countdownTimer: null,
      tag: null,
      features: [
        { available: true, text: "Basic Chrome Extension" },
        { available: false, text: "Advanced Timing Controls" },
        { available: false, text: "Anti-Detection Technology" },
        { available: false, text: "Automate Membean Training" },
        { available: true, text: "See Correct Answers" },
        { available: false, text: "Comprehensive Statistics" },
        { available: false, text: "Customizable Behavior" },
        { available: false, text: "Intelligent Typing Simulation" },
        { available: false, text: "Theme Customization" },
      ],
      ctaText: "Get Free Extension",
      ctaLink: "/download",
      btnType: "secondary",
    },
  ];

  return (
    <div className="flex justify-center gap-10 w-3/5 mx-auto">
      {pricing.map((plan, index) => (
        <Card 
          key={index}
          plan={plan} 
        />
      ))}
    </div>
  );
};

export default PricingCards;
