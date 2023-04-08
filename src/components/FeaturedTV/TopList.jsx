import React from "react";

const TopList = ({ list }) => {
  return (
    <div className="flex flex-row justify-around lg:xl:2xl:md:justify-between items-center m  w-[300px]  lg:xl:2xl:md:w-[350px]  border-b border-black  h-[88px]  ">
      <div className="text-3xl font-bold  mb-[1rem]">{list}</div>
      <div className=" w-[200px] lg:xl:2xl:md:w-[250px] h-full">
        <div>Year</div>
        <div>Delta Brave</div>
        <div>catagory</div>
      </div>
    </div>
  );
};

export default TopList;
