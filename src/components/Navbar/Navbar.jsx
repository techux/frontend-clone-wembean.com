import Buttons from "./Buttons";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <div className="bg-bgmedium w-full flex flex-wrap items-center justify-between p-5 px-56 z-100 fixed shadow-[0_1px_7px_rgba(0,0,0,0.3)]">
      <NavLinks />
      <Buttons />
    </div>
  );
};

export default Navbar;
