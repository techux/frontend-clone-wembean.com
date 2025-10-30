import Cards from "./Cards";
import { FaBolt, FaBrain, FaCreditCard, FaTags } from "react-icons/fa6";
import { FaShieldAlt, FaSmileBeam } from "react-icons/fa";

const FeatureCards = () => {
  const features = [
    {
      title: "Instant Delivery",
      description:
        "Get immediate access to your premium features the moment your payment is approved. No waiting, just seamless Membean automation.",
      icon: FaBolt,
    },
    {
      title: "Trusted & Undetectable",
      description:
        "Our advanced tool is trusted by a growing community for its reliability and anti-detection features that mimic human behavior.",
      icon: FaShieldAlt,
    },
    {
      title: "Affordable Membean Tool",
      description:
        "Experience high-quality automation at a low cost. Wembean offers a free Chrome extension, affordable premium plans, and referral rewards.",
      icon: FaTags,
    },
    {
      title: "24/7 Support",
      description:
        "Our dedicated support team is available around the clock via Discord, ensuring you get help with installation and any questions you have.",
      icon: FaBrain,
    },
    {
      title: "Secure Payments",
      description:
        "We use Stripe to process payments, accepting major credit cards, Apple Pay, and more, ensuring your transaction is always secure.",
      icon: FaCreditCard,
    },
    {
      title: "Happy Customers",
      description:
        "Consistent 5-star ratings and positive feedback make Wembean the top-rated choice for premium Membean automation and assistance.",
      icon: FaSmileBeam,
    },
  ];

  return (
    <div className="flex justify-between flex-wrap gap-7 mx-30">
      {features.map((feature, index) => (
        <Cards
          key={index}
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
        />
      ))}
    </div>
  );
};

export default FeatureCards;
