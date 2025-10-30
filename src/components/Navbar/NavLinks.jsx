const NavLinks = () => {
  return (
    <div className="flex flex-wrap items-center gap-7">

      <div className="flex items-center">
        <img src="https://wembean.com/static/images/logo.webp" alt="Wembean Logo" className="h-16 w-16 m-0"  />
        <span className="font-bold text-2xl m-0">embean</span>
      </div>

      
      <ul className="flex items-start gap-5 text-textmedium font-medium">
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>FAQ</li>
        <li>TOS</li>
      </ul>
      

    </div>
  );
};

export default NavLinks;
