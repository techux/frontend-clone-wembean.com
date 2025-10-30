const Showcase = () => {
  return (
    <div className="bg-bgdark flex justify-center pb-10">
      <div className="bg-primaryaccent p-18 max-w-[80%] rounded-2xl flex flex-wrap gap-10 ">

        <div className="border-1 border-white rounded-lg overflow-hidden min-w-[300px] max-w-[540px] max-h-[220px] mx-auto flex flex-1">
          <video src="https://wembean.com/static/videos/Wembeanshowcase.mp4"></video>
        </div>

        <div className="flex flex-1 flex-col items-start justify-center gap-6">
          <h2 className="font-semibold text-white text-center">The Leading Membean Bot</h2>
          <p className="leading-relaxed pr-8 text-textlight">
            Wembean offers a powerful and reliable automation service for
            Membean, featuring the most affordable rates, instant delivery, and
            a focus on high customer satisfaction.
          </p>
          <button className="bg-white rounded-lg px-8 py-3 text-primaryaccent font-semibold" href="#">Explore Premium Plans</button>
        </div>

      </div>
    </div>
  );
};

export default Showcase;
