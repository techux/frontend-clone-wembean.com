import { FaExternalLinkAlt } from "react-icons/fa"

const Cta = () => {
  return (
    <div className="bg-bgdark p-16 flex flex-col items-center justify-between ">
      <h2 className="text-textlight pb-2 font-semibold">Stop Wasting Time, Start Automating!</h2>
      <p className="text-textmedium">The free Wembean Chrome extension is available now. Terms apply.</p>
      <button className="bg-bglight px-7 py-3 mt-10 rounded-lg flex items-center gap-3 font-medium">Download the Free Extension <FaExternalLinkAlt/> </button>
    </div>
  )
}

export default Cta