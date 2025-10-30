import { FaExternalLinkAlt } from "react-icons/fa";

const Buttons = () => {
  return (
    <div className="flex items-center justify-center gap-6 flex-wrap">
        <button className="bg-primaryaccent hover:bg-primaryaccent-hover rounded-lg px-8 py-3 text-white transition-all duration-250 ease-in-out transform">Get Premium Access</button>
        <button className="bg-bglight hover:bg-secondaryaccent-hover rounded-lg px-8 py-3 text-white flex items-center gap-3">Free Chrom Extension <FaExternalLinkAlt /> </button>
    </div>
  )
}

export default Buttons