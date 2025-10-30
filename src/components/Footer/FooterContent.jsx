const FooterContent = () => {
  return (
    <div className="flex justify-between gap-10 w-full">

      <div className="w-1/3 py-5">

        <div className="flex items-center">
          <img src="https://wembean.com/static/images/logo.webp" alt="Wembean logo" className="h-16 w-16 m-0" />
          <span className="font-bold text-2xl m-0">embean</span>
        </div>

        <p className="text-textmedium text-sm leading-relaxed pt-5">
          Wembean offers an automated tool for the non-affiliated website
          membean.com, focused on affordable rates, instant delivery, and
          ensuring high customer satisfaction.
        </p>

      </div>
      
      <div className="flex w-2/3 justify-around flex-wrap">

        <div>
            <span className="pb-3 text-lg font-semibold">Resources</span>
            <ul className=" text-textmedium leading-10">
                <li>Features</li>
                <li>Pricing</li>
                <li>Discord Support</li>
            </ul>
        </div>

        <div>
            <span className="pb-3 text-lg font-semibold">Company</span>
            <ul className=" text-textmedium leading-10">
                <li>Terms of Service</li>
                <li>Email Support</li>
            </ul>
        </div>

      </div>
    </div>
  );
};

export default FooterContent;
