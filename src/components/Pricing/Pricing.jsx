import PricingCards from "./PricingCards"
import PricingText from "./PricingText"

const Pricing = () => {
  return (
    // <div>
    <div className="bg-bgmedium  p-20 flex flex-col gap-10">
      <PricingText />
      <PricingCards />
    </div>
  )
}

export default Pricing