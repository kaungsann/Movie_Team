import React, { useState } from "react";
import BoldHeading from "./BoldHeading";
import { AiFillStar } from "react-icons/ai";
import { imgUrl } from "../../services/apiservices.js";

const MovieCard = ({ displayStyle, notDisplay1or2, img, data }) => {
  const [overlay, setOverlay] = useState("");
  if (!notDisplay1or2) {
    return (
      <div className="block cursor-pointer relative">
        <div
          onClick={() => {
            window.location.assign(`/movie-detail/${data.id}`);
          }}
          className={`group relative ${overlay}`}
          onMouseEnter={() => setOverlay("img")}
          onMouseOut={() => setOverlay("")}
        >
          <img
            onClick={() => {
              window.location.assign(`/movie-detail/${data.id}`);
            }}
            src={`${imgUrl}${img}`}
            alt={data?.title}
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
            } bg-cyan-300 transition-all duration-300 top-0 opacity-0 group-[.img]:opacity-30`}
          ></div>
        </div>

        <div className="my-2">
          <p className=" text-xs text-gray-500 mb-1">
            {new Date(data?.release_date).toLocaleDateString()}
          </p>
          <BoldHeading customClass={"text-sm"}>{data?.title}</BoldHeading>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex items-center gap-5 group">
        <div className="flex gap-5 relative  py-4 w-full">
          <div className="">
            <img
              onClick={() => {
                window.location.assign(`/movie-detail/${data.id}`);
              }}
              src={`${imgUrl}${img}`}
              alt=""
              className={`object-cover z-10 relative ${
                displayStyle == "display2"
                  ? " w-[138px] h-[207px]"
                  : "w-[105px] h-[157px]"
              }  `}
            />
          </div>
          <div
            className={`absolute w-full h-full bg-gradient-to-r from-[#393e4c] via-[#181d2b] to-[#131722] z-0 top-0 opacity-0 group-hover:opacity-50`}
          ></div>

          <div
            className={` z-10 relative w-[75%] ${
              displayStyle !== "display2" ? "my-0" : "my-2"
            }`}
          >
            <p className=" text-sm text-gray-500 ">
              {new Date(data?.release_date).toLocaleDateString()}
            </p>
            <BoldHeading customClass={"text-md my-2"}>
              {data?.title}
            </BoldHeading>
            <p className="text-gray-500 truncate text-md ">{data?.overview}</p>
            {displayStyle !== "display4" && (
              <div
                className={`space-x-3 ${
                  displayStyle !== "display2" ? "mt-5" : "mt-10"
                }`}
              >
                <button
                  onClick={() => {
                    window.location.assign(`/movie-detail/${data.id}`);
                  }}
                  className="uppercase py-3  px-5 font-semibold text-sm bg-slate-600 rounded-md hover:border-cyan-600 hover:bg-cyan-600 transition-all duration-300 text-gray-200"
                >
                  Watch Now
                </button>
                <button className="uppercase py-3  px-5 font-semibold text-sm  rounded-lg hover:text-cyan-500 transition-all duration-300">
                  + Playlist
                </button>
              </div>
            )}
            {displayStyle == "display4" && (
              <div
                onClick={() => {
                  window.location.assign(`/movie-detail/${data.id}`);
                }}
                className="text-center text-gray-500 mt-5"
              >
                <div
                  onClick={() => {
                    window.location.assign(`/movie-detail/${data.id}`);
                  }}
                  className={`cursor-pointer ${
                    displayStyle !== "display2" && "flex gap-2"
                  }`}
                >
                  <div className="relative group-hover:text-cyan-500">
                    <AiFillStar className=" text-5xl" />
                    <p className=" text-sm font-semibold group-hover:text-blue-900 text-gray-200 absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%]">
                      {data?.vote_average}
                    </p>
                  </div>
                  <div className="text-sm">
                    <p className=""></p>
                  </div>
                  <p>{data?.vote_count}Vote</p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div
          className={`text-center text-gray-500 ${
            displayStyle == "display4" && "hidden"
          }`}
        >
          <div
            className={`cursor-pointer ${
              displayStyle !== "display2" && "flex gap-2"
            }`}
          >
            <div className="relative group-hover:text-cyan-500">
              <AiFillStar className=" text-5xl" />
              <p className=" text-sm font-semibold group-hover:text-blue-900 text-gray-200 absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%]">
                {data?.vote_average}
              </p>
            </div>
            <div className="text-sm">
              <p className=""></p>
            </div>
            <p>{data?.vote_count}Votes</p>
          </div>
        </div>
      </div>
    );
  }
};

export default MovieCard;
