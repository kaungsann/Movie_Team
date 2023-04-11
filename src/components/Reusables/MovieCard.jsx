import React, { useState } from "react";
import BoldHeading from "./BoldHeading";
import { AiFillStar } from "react-icons/ai";
const MovieCard = ({ displayStyle, notDisplay1or2 }) => {
  const [overlay, setOverlay] = useState("");
  if (!notDisplay1or2) {
    return (
      <div className="block cursor-pointer relative">
        <div
          className={`group relative ${overlay}`}
          onMouseEnter={() => setOverlay("img")}
          onMouseOut={() => setOverlay("")}>
          <img
            src="https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1928&q=80"
            alt=""
            className={`object-cover ${
              displayStyle == "display0"
                ? " lg:w-[159px] lg:h-[238px] md:w-[162px] md:h-[243px] w-[120px] h-[180px]"
                : "w-[193px] h-[230px]"
            }  relative `}
          />
          <div
            className={`absolute hidden lg:block ${
              displayStyle == "display0"
                ? "lg:w-[159px] lg:h-[238px] md:w-[162px] md:h-[243px] w-[120px] h-[180px]"
                : "w-[193px] h-[230px]"
            } bg-cyan-300 transition-all duration-300 top-0 opacity-0 group-[.img]:opacity-30`}></div>
        </div>

        <div className="my-2">
          <p className=" text-xs text-gray-500 mb-1">Date and Category</p>
          <BoldHeading customClass={"text-sm"}>Movie Name</BoldHeading>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex items-center gap-5 group">
        <div className="flex gap-5 relative  py-4 w-full">
          <div className="">
            <img
              src="https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1928&q=80"
              alt=""
              className={`object-cover z-10 relative ${
                displayStyle == "display2"
                  ? " w-[138px] h-[207px]"
                  : "w-[105px] h-[157px]"
              }  `}
            />
          </div>
          <div
            className={`absolute w-full h-full bg-gradient-to-r from-[#393e4c] via-[#181d2b] to-[#131722] z-0 top-0 opacity-0 group-hover:opacity-50`}></div>

          <div
            className={` z-10 relative w-[75%] ${
              displayStyle !== "display2" ? "my-0" : "my-2"
            }`}>
            <p className=" text-sm text-gray-500 ">Date and Category</p>
            <BoldHeading customClass={"text-md my-2"}>Movie Name</BoldHeading>
            <p className="text-gray-500 truncate text-md ">
              he inspiring and unknown true story behind MercyMe's beloved,
              chart topping song that brings ultimate hope
            </p>
            {displayStyle !== "display4" && (
              <div
                className={`space-x-3 ${
                  displayStyle !== "display2" ? "mt-5" : "mt-10"
                }`}>
                <button className="uppercase py-3  px-5 font-semibold text-sm bg-slate-600 rounded-md hover:border-cyan-600 hover:bg-cyan-600 transition-all duration-300 text-gray-200">
                  Watch Now
                </button>
                <button className="uppercase py-3  px-5 font-semibold text-sm  rounded-lg hover:text-cyan-500 transition-all duration-300">
                  + Playlist
                </button>
              </div>
            )}
            {displayStyle == "display4" && (
              <div className="text-center text-gray-500 mt-5">
                <div
                  className={`cursor-pointer ${
                    displayStyle !== "display2" && "flex gap-2"
                  }`}>
                  <div className="relative group-hover:text-cyan-500">
                    <AiFillStar className=" text-5xl" />
                    <p className=" text-sm font-semibold group-hover:text-blue-900 text-gray-200 absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%]">
                      7.0
                    </p>
                  </div>
                  <div className="text-sm">
                    <p className="">1</p>
                    <p>Vote</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div
          className={`text-center text-gray-500 ${
            displayStyle == "display4" && "hidden"
          }`}>
          <div
            className={`cursor-pointer ${
              displayStyle !== "display2" && "flex gap-2"
            }`}>
            <div className="relative group-hover:text-cyan-500">
              <AiFillStar className=" text-5xl" />
              <p className=" text-sm font-semibold group-hover:text-blue-900 text-gray-200 absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%]">
                7.0
              </p>
            </div>
            <div className="text-sm">
              <p className="">1</p>
              <p>Vote</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default MovieCard;