import React, { useState, useEffect } from "react";
import BreadcrumbsCustom from "../Reusables/BreadcrumbsCustom";
import ReactPlayer from "react-player";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import Tab2 from "../Tab2/TabDe";
import Recommend from "../Recommend/Recommend";
import { useParams } from "react-router-dom";
import { fetchWithAxios, imgUrl } from "../../services/apiservices.js";
import { Movies_Detail_Videos_API } from "../../services/Constant.js";

const MovieDetail = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  const f1 = () => {
    fetchWithAxios(Movies_Detail_Videos_API(id))
      .then((res) => {
        // console.log(res.data.results[0]);
        setData(res.data.results[0]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    f1();
  }, []);
  const items = [
    { title: "Home", href: "#" },
    { title: "Comedy", href: "#" },
    { title: "American Made", href: "#", active: true },
  ];
  const data1 = [
    {
      img: "hello.jpg",
      id: 1,
    },
    {
      img: "hello.jpg",
      id: 2,
    },
    {
      img: "hello.jpg",
      id: 3,
    },
    {
      img: "hello.jpg",
      id: 4,
    },
  ];
  return (
    <>
      <section className="md:px-10 px-3 2xl:px-40 py-8 relative z-[5]  w-full bg-[#131722]">
        <BreadcrumbsCustom items={items} />

        <div className=" lg:my-10 md:my-8 my-5 2xl:w-[65%] lg:w-[70%] mx-auto w-full lg:h-[550px] md:h-[368px] h-[216px]">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${data?.key}`}
            controls={true}
            width={"100%"}
            height={"100%"}
            stopOnUnmount={true}
          />
        </div>
        <div className="flex lg:justify-between lg:items-center lg:flex-row flex-col gap-5 lg:gap-0 ">
          <div>
            <p className=" font-medium md:text-3xl text-2xl cursor-pointer w-full  text-white mb-3 ">
              {data?.name}
            </p>
            <div className="divide-x-[1px] items-center divide-gray-300 flex font-light text-md text-gray-300 ">
              <p className="pr-3 ">
                {new Date(data?.published_at).toLocaleDateString()}
              </p>
              <p className="px-3">resolution : {data?.size}p</p>
              <p className="px-3">
                {data?.official === true ? "Official" : "Un-Official"}
              </p>
              <p className="px-3 cursor-pointer text-cyan-500">{data?.type}</p>
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
      <Tab2 id={id}></Tab2>
      <Recommend id={id} />
    </>
  );
};

export default MovieDetail;
