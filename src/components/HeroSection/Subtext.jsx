import { FaCheckCircle } from "react-icons/fa";
import { FaDollarSign, FaCreditCard } from "react-icons/fa6";

const Subtext = () => {
  return (
    <div className="flex justify-center gap-10 m-8 text-sm text-textmedium">
        <p className="flex items-center gap-2"> <FaCheckCircle color="#34d399" /> Instant Delivery </p>
        <p className="flex items-center gap-2"> <FaDollarSign color="#34d399" /> Most Affordable Price </p>
        <p className="flex items-center gap-2"> <FaCreditCard color="#34d399" /> Secure Stripe Payments </p>
    </div>
  )
}

export default Subtext