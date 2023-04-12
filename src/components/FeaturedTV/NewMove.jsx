import React from "react";

const NewMove = () => {
  return (
    <a className="flex flex-row gap-5    py-[2rem] justify-start items-center w-[300px] lg:xl:2xl:md:w-[390px] h-[125px] ">
      <div className="w-[65px] h-[98px] bg-gray-400">
        <img />
      </div>
      <div className="flex flex-col justify-around items-start w-[100px] h-full">
        <div className="text-white text-[14px] opacity-[.8]">Year</div>
        <div className="text-lg text-white ">Name</div>
        <div className="text-[#24baef]">Type</div>
      </div>
    </a>
  );
};

export default NewMove;
