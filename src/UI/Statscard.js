const StatsCard = (props) => {
  return (
    <article className="p-2 mx-[5rem] flex flex-row items-center  text-xl hover:bg-[#273340] hover:rounded-3xl">
      <span className="text-white">{props.icon}</span>
      <span className="mr-4 text-white">{props.stat}</span>
      
    </article>
  );
};

export default StatsCard;
