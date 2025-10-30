import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

function useCountdown(initialSeconds) {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);

  useEffect(() => {
    if (secondsLeft <= 0) return;

    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [secondsLeft]);

  const hours = String(Math.floor(secondsLeft / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((secondsLeft % 3600) / 60)).padStart(
    2,
    "0"
  );
  const seconds = String(secondsLeft % 60).padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
}

const Card = (props) => {
  const plan = props.plan;
  const timer = useCountdown(plan.countdownTimer || 0);
  return (
    <div
      // key={props.key}
      className={` bg-bgdark rounded-xl overflow-hidden p-10 flex flex-col justify-between w-full ${
        plan.tag ? "border-2 border-primaryaccent relative" : ""
      } transform-all duration-600 hover:scale-105`}
    >
      {plan.tag && (
        <div className="absolute top-7 right-[-35px] w-[150px] bg-primaryaccent text-white text-center text-sm font-medium py-1 rotate-45 shadow-md z-10">
          {plan.tag}
        </div>
      )}

      <h3 className="font-semibold">{plan.name}</h3>

      {plan.displayPrice && plan.discountText && (
        <div className="flex gap-2 my-3 items-center text-textmedium">
          <span>
            <s>{plan.displayPrice}</s>
          </span>
          <span className="bg-successgreen text-textdark font-semibold px-2 rounded-md">
            {plan.discountText}
          </span>
        </div>
      )}

      <div className="my-5">
        <span className="text-4xl font-bold text-primaryaccent mr-2">
          {plan.actualPrice}
        </span>
        {plan.tenure && <span className="text-textmedium">{plan.tenure}</span>}
      </div>

      {plan.offerMessage && (
        <div className="text-errorred font-semibold m-2 ml-0">
          <span>{plan.offerMessage}</span>
          {plan.showCountdown && <span>{timer}</span>}
        </div>
      )}

      {plan.features.map((feature, idx) => {
        return (
          <div
            key={idx}
            className="flex gap-3 items-center leading-10 text-textmedium"
          >
            <span>
              {feature.available ? (
                <FaCheck className="text-successgreen" />
              ) : (
                <FaTimes className="text-errorred" />
              )}
            </span>
            <span>{feature.text}</span>
          </div>
        );
      })}

      <div className="mt-10">
        <a href={plan.ctaLink}>
          {plan.btnType === "primary" ? (
            <button className="bg-primaryaccent hover:bg-primaryaccent-hover rounded-lg px-8 py-3 text-white w-full">
              {plan.ctaText}
            </button>
          ) : (
            <button className="bg-bglight hover:bg-secondaryaccent-hover rounded-lg px-8 py-3 text-white w-full">
              {plan.ctaText}
            </button>
          )}
        </a>
      </div>
    </div>
  );
};

export default Card;
