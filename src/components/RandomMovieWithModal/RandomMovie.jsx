import React, { useState, useEffect } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Group, Button } from "@mantine/core";
import { FaPlay } from "react-icons/fa";
import ReactPlayer from "react-player";
import { fetchWithAxios, imgUrl } from "../../services/apiservices.js";
import {
  Movie_Detail_API,
  Movies_Detail_Videos_API,
} from "../../services/Constant.js";

const RandomMovie = () => {
  const [data, setData] = useState({});
  const [movie, setMovie] = useState({});
  const video = () => {
    fetchWithAxios(Movies_Detail_Videos_API(502356))
      .then((res) => {
        // console.log(res?.data?.results[0]);
        setMovie(res?.data?.results[0]);
      })
      .catch((err) => console.log(err));
  };

  const dataDetail = () => {
    fetchWithAxios(Movie_Detail_API(502356))
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    dataDetail();
    video();
  }, []);

  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <div className="relative h-[560px]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url(${imgUrl}${data?.backdrop_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute lg:top-[35%] md:top-[20%] top-[10%] px-5 lg:pl-20 2xl:pl-40 text-white space-y-10 w-full z-10 text-center lg:text-left">
            <p className="  font-bold md:text-6xl text-3xl cursor-pointer w-full lg:w-[40%] ">
              {data.title}
            </p>
            <div className="divide-x-[1px] items-center divide-gray-300 flex font-light text-sm text-gray-300 justify-center lg:justify-start">
              <p className="md:pr-3 md:px-0 px-3 ">
                {new Date(data.release_date).toLocaleDateString()}
              </p>
              <p className="px-3">{data.status}</p>
              {/* <p className="px-3">1hr 55mins</p> */}
            </div>
            <div className="md:space-x-5 flex flex-col md:flex-row space-y-5 md:space-y-0 md:justify-center lg:justify-start">
              <button
                onClick={() => {
                  window.location.assign(`movie-detail/${data.id}`);
                }}
                className="uppercase py-3 md:py-5 px-10  text-lg bg-cyan-500 rounded-lg border border-cyan-500 hover:border-cyan-600 hover:bg-cyan-600 transition-all duration-300"
              >
                Watch Now
              </button>
              <button className="uppercase py-3 md:py-5 px-10  text-lg  rounded-lg border border-white transition-all duration-300 hover:bg-white hover:text-black">
                + Playlist
              </button>
            </div>
          </div>
          <div className="absolute w-full h-full md:bg-gradient-to-tr bg-gradient-to-b from-black/100 via-black/50 to-transparent top-0 z-[1]"></div>
          <div className="absolute lg:right-0 top-[30%] pr-10 2xl:pr-40 text-white z-[15] lg:block font-light hidden ">
            <button
              className=" border p-20 rounded-full cursor-pointer border-white/50 group hover:border-white"
              onClick={open}
            >
              <FaPlay
                size={80}
                className="text-cyan-500 group-hover:text-cyan-300"
              />
            </button>
          </div>
        </div>
      </div>
      <Modal opened={opened} onClose={close} centered title=" " size={"50%"}>
        <div className=" w-full p-5  pt-0 ">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${movie?.key}`}
            controls={true}
            width={"100%"}
            height={"50vh"}
            stopOnUnmount={true}
          />
        </div>
      </Modal>
    </>
  );
};

export default RandomMovie;
