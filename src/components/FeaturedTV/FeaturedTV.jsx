import React, { useEffect, useState, useRef } from "react";
import MovieSliderItem from "./MovieSliderItem";
import axios from "axios";
import request from "../../services/Constant.js";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import TopList from "./TopList";
import NewMove from "./NewMove";

const FeaturedTV = () => {
  const [movies, setMovies] = useState([]);
  const [tops, setTop] = useState([]);
  const [news, setNews] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    axios
      .get(request.featured)
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => console.error(err));
    axios
      .get(request.top9)
      .then((res) => {
        setTop(res.data);
      })
      .catch((err) => console.error(err));
    axios
      .get(request.newTest)
      .then((res) => {
        setNews(res.data);
      })
      .catch((err) => console.error(err));
  }, []);
  const scrollLeft = () => {
    sliderRef.current.scrollLeft -= 500;
  };

  const scrollRight = () => {
    sliderRef.current.scrollLeft += 500;
  };

  return (
    <div className="bg-[#131722]">
      <div className="flex  flex-col lg:xl:2xl:md:flex-row justify-center  items-center p-[3rem]  text-white">
        <div
          className="max-w-[1000px]   h-[200px] flex   flex-row justify-start items-center   gap-5 overflow-x-scroll scroll-smooth scrollbar-hide relative "
          ref={sliderRef}>
          <div className="flex   gap-5 flex-row justify-start items-center ">
            {movies.map((movie) => {
              return <MovieSliderItem key={movie.id} title={movie.username} />;
            })}
          </div>
        </div>
        <div className="flex w-full lg:xl:2xl:md:w-2/5 h-[100px] lg:xl:md:2xl:h-[200px] pl-[1rem]  flex-col justify-center items-center lg:2xl:xl:md:items-start">
          <div className="text-2xl ">
            Featured TV Episode <br></br> Premieres
          </div>
          <div className="flex flex-row justify-start items-center gap-4">
            <button onClick={scrollLeft}>
              <CiCircleChevLeft className="w-[40px] h-[40px]" />
            </button>
            <button onClick={scrollRight}>
              <CiCircleChevRight className="w-[40px] h-[40px]" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex xl:flex-row 2xl:flex-row flex-col lg:flex-row justify-between p-[1rem] lg:xl:2xl:p-[3rem]  gap-5 items-start">
        <div className="flex flex-col justify-center items-center w-full lg:xl:2xl:w-[450px] pt-[0rem] gap-4 bg-[#1c212e] text-white">
          <div className="flex flex-row justify-between items-center w-[300px] lg:xl:2xl:md:w-[350px] border-b border-black  h-[88px]">
            <div className="text-xl ">Top 10 this Week</div>
            <div className="lg:xl:2xl:md:flex hidden flex-row justify-between w-[130px] items-center">
              <div className="text-blue-500">Movies</div>
              <div>TV Series</div>
            </div>
          </div>
          {tops.map((top) => {
            return <TopList list={top.id} />;
          })}
        </div>
        <div className="flex flex-col  mr-[100px] justify-center items-start">
          <div className="flex h-[88px] flex-row justify-between w-full items-center">
            <div className="text-3xl text-white">Newest Movies</div>
            <div className="lg:xl:2xl:md:flex hidden w-[300px] flex-row justify-around  items-center">
              <a className="text-[#24baef]">Today</a>
              <a>This week</a>
              <a>Last 30 days</a>
            </div>
          </div>
          <div>
            {news.map((news) => {
              return (
                <div>
                  {news.id === 1 ? (
                    <div className="text-white gap-5 py-[30px] w-[300px]   lg:xl:2xl:md:w-[780px]   flex lg:xl:2xl:md:flex-row flex-col justify-start items-start lg:xl:2xl:md:items-center">
                      <div className="lg:xl:2xl:md:w-[180px] lg:xl:2xl:md:h-[250px] w-[280px] h-[400px] bg-[#1c212e]"></div>
                      <div className="flex flex-col justify-start items-start h-full gap-3">
                        <div>year</div>
                        <div className="text-3xl font-semibold">movie title</div>
                        <div>description</div>
                        <div className="lg:xl:2xl:md:flex hidden flex-row justify-center items-center gap-3">
                          <button
                            onClick={() => {
                              window.location.assign("movie-detail/1");
                            }}
                            className="flex  flex-row rounded-lg bg-[#24baef] w-[123px] h-[45px] justify-center items-center ">
                            WATCH NOW
                          </button>
                          <button className="flex flex-row rounded-lg  w-[123px] h-[45px] justify-center items-center ">
                            PLAYLIST
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </div>
          <div className=" grid lg:xl:2xl:md:grid-cols-2 sm:grid-cols-1  grid-rows-5 gap-4  ">
            {news.map((news) => {
              return (
                <div>
                  <NewMove />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedTV;
