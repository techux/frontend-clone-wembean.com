const Cards = (props) => {
  return (
    <div 
    className="bg-bgmedium min-w-[330px] max-w-[350px] h-auto max-h-[330px] border-1 border-textdark hover:border-primaryaccent rounded-lg p-7 flex flex-col gap-3"
    >
      <div className="bg-[#222241] rounded-full max-w-fit p-3 mb-3"><props.icon size={28} className={"text-primaryaccent"} /></div>
      <span className="text-xl font-normal">{props.title}</span>
      <p className="text-[0.9rem] text-textmedium leading-normal">{props.description}</p>
    </div>
  );
};

export default Cards;
