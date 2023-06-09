import React from "react";

const TopList = ({ list }) => {
  return (
    <div className="flex flex-row justify-around lg:xl:2xl:md:justify-between items-center m  w-[300px]  lg:xl:2xl:md:w-[350px]    h-[88px]  ">
      <div className="text-3xl font-bold  mb-[1rem]">{list?.name}</div>
      <div className=" w-[200px] lg:xl:2xl:md:w-[250px] h-full">
        <div className="text-white text-[14px] opacity-[.8]">
          {new Date(list?.first_air_date).getFullYear()}
        </div>
        <div className="text-lg text-white ">{list?.vote_count}</div>
        {/* <div className="text-[#24baef]">catagory</div> */}
      </div>
    </div>
  );
};

export default TopList;
