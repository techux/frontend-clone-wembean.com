import FooterBottom from "./FooterBottom"
import FooterContent from "./FooterContent"

const Footer = () => {
  return (
    <div className="bg-bgmedium pt-13 pb-10 px-[190px]">
      <FooterContent />
      <hr className="border-t border-bglight my-7" />
      <FooterBottom />
    </div>
  )
}

export default Footer