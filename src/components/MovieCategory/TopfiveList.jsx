import React from "react";

const TopfiveList = ({ list }) => {
  return (
    <div className="flex flex-row justify-around lg:xl:2xl:md:justify-between items-center   border-b border-white/10 mb-3 h-[88px]  ">
      <div className="text-3xl font-bold  mb-[1rem]">{list?.title}</div>
      <div className=" w-[200px] lg:xl:2xl:md:w-[250px] h-full">
        <div className="text-gray-400">Year</div>
        <div>{list?.title}</div>
        <div className="text-sky-400">Category</div>
      </div>
    </div>
  );
};

export default TopfiveList;
