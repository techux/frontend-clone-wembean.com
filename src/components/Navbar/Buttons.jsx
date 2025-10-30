const Buttons = () => {
  return (
    <div className="flex gap-2">
      <button className="bg-bglight hover:bg-secondaryaccent-hover rounded-lg px-8 py-3 text-white">Login</button>
      <button className="bg-primaryaccent hover:bg-primaryaccent-hover rounded-lg px-8 py-3 text-white">Register</button>
    </div>
  );
};

export default Buttons;


