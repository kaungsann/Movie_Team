import React, { useState } from "react";
import BoldHeading from "./BoldHeading";

const NavMovieCard = () => {
  const [overlay, setOverlay] = useState("");
  return (
    <div className="block w-full h-[116px] cursor-pointer relative">
      <div
        className={`group relative ${overlay}`}
        onMouseEnter={() => setOverlay("img")}
        onMouseOut={() => setOverlay("")}>
        <img
          src="https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          alt=""
          className="object-cover w-full h-[116px] relative "
        />
        <div className="absolute w-full h-full bg-cyan-300 transition-all duration-300 top-0 opacity-0 group-[.img]:opacity-30"></div>
      </div>

      <div className="my-1">
        <p className=" text-sm text-gray-700">Date and Category</p>
        <BoldHeading className="">Movie Name</BoldHeading>
      </div>
    </div>
  );
};

export default NavMovieCard;
