import React from "react";
import BreadcrumbsCustom from "../Reusables/BreadcrumbsCustom";
import ReactPlayer from "react-player";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
const MovieDetail = () => {
  const items = [
    { title: "Home", href: "#" },
    { title: "Comedy", href: "#" },
    { title: "American Made", href: "#", active: true },
  ];
  return (
    <section className="md:px-10 px-3 2xl:px-40 py-8 relative z-[5]  w-full bg-[#131722]">
      <BreadcrumbsCustom items={items} />

      <div className=" lg:my-10 md:my-8 my-5 2xl:w-[65%] lg:w-[70%] mx-auto w-full lg:h-[550px] md:h-[368px] h-[216px]">
        <ReactPlayer
          url={"https://www.youtube.com/watch?v=U8HKaO8qXS4"}
          controls={true}
          width={"100%"}
          height={"100%"}
          stopOnUnmount={true}
        />
      </div>
      <div className="flex lg:justify-between lg:items-center lg:flex-row flex-col gap-5 lg:gap-0 ">
        <div>
          <p className=" font-medium md:text-3xl text-2xl cursor-pointer w-full  text-white mb-3 ">
            American Made
          </p>
          <div className="divide-x-[1px] items-center divide-gray-300 flex font-light text-md text-gray-300 ">
            <p className="pr-3 ">2017</p>
            <p className="px-3">1hr 55 mins</p>
            <p className="px-3">R</p>
            <p className="px-3 cursor-pointer text-cyan-500">Comedy</p>
          </div>
        </div>
        <div className="text-gray-500 flex items-center gap-3 md:gap-10">
          <div className="flex items-center cursor-pointer gap-1">
            <AiFillStar className="text-cyan-500 text-5xl" />
            <div>
              <p className="text-cyan-500 text-2xl font-medium">7.0</p>
              <p className="text-xs">1 Vote</p>
            </div>
          </div>
          <div className="flex items-center cursor-pointer gap-1">
            <AiOutlineHeart className=" text-4xl" />
            <p>+ Playlist</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetail;
