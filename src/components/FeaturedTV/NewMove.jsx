import React from "react";

const NewMove = () => {
  return (
    <a className="flex flex-row gap-5 border-b border-solid border-black  py-[2rem] justify-start items-center w-[300px] lg:xl:2xl:md:w-[390px] h-[125px] ">
      <div className="w-[65px] h-[98px] bg-gray-400">
        <img />
      </div>
      <div className="flex flex-col justify-around items-start w-[100px] h-full">
        <div>Year</div>
        <div>Name</div>
        <div>Type</div>
      </div>
    </a>
  );
};

export default NewMove;
