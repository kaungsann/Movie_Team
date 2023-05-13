import React, { useState, useEffect } from "react";
import { fetchWithAxios, imgUrl } from "../../services/apiservices.js";
import { TV_Detail_API } from "../../services/Constant.js";
import "./TabDe.css";
import img from "../img/images.jpeg";

function TabDe({ id }) {
  const [showText, setShowText] = useState(true);
  const [selectedText, setSelectedText] = useState(true);
  const [color1, setColor1] = useState("#f5f5f5");
  const [color2, setColor2] = useState("#f5f5f5");
  const [data, setData] = useState({});

  useEffect(() => {
    fetchWithAxios(TV_Detail_API(id))
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleClick() {
    setShowText(true);
    setSelectedText(true);
    setColor1("#00ffff");
    setColor2("#f5f5f5");
  }
  function handleClick2() {
    setColor1("#f5f5f5");
    setColor2("#00ffff");
    setShowText(false);
    setSelectedText(false);
  }

  return (
    <div className="tabContainer text-cyan-50 ">
      <div className="md:text-4xl sm:text-2xl text-2xl   lg:text-3xl flex  justify-center  py-3">
        <div className="flex underline-text ">
          <span
            className="mx-3 text"
            style={{
              color: color1,
              textDecoration: selectedText ? "underline" : "none",
              textDecorationThickness: selectedText ? "3px" : "none",
            }}
            onClick={handleClick}
          >
            Description
          </span>
          <div className="mx-3 ">/</div>
          <span
            style={{
              color: color2,
              textDecoration: !selectedText ? "underline" : "none",
              textDecorationThickness: !selectedText ? "3px" : "none",
            }}
            className="mx-3 text"
            onClick={handleClick2}
          >
            Review
          </span>
        </div>
      </div>
      <div>
        <div className="bg-slate-700 w-9/12  mx-auto mt-4 line"></div>
      </div>
      <>
        {showText && (
          <div className="  lg-flex md:flex mt-10 md:justify-start md:mx-auto boxContainer  sm:flex sm:flex-wrap sm:justify-start">
            <img
              src={`${imgUrl}${data?.poster_path}`}
              className="xl-flex lg:w-3/12 ml-10 rounded-md shadow-md  md:w-6/12 sm:w-96 sm:h-96 sm:rounded-xl"
            />
            <div className="ml-14 sm:mt-8">
              <h1 className="lg:text-3xl font-semibold md:text-3xl sm:text-3xl text-2xl">
                {data?.title}
              </h1>
              <div className="flex my-7 items-center  md:flex-wrap md:justify-start sm:flex-wrap ">
                <div className="startbox flex w-30">
                  <span className="icon-star lg:text-5xl md:text-4xl sm:text-4xl text-4xl text-cyan-400  "></span>
                  <div className=" ml-3">
                    <h2 className="lg:text-4xl md:text-3xl sm:text-3xl text-3xl text-cyan-400 ">
                      {data?.vote_average}
                    </h2>
                    <span className="text-slate-500 sm:w-30  mt-3  sm:flex">
                      {data?.vote_count} vote
                    </span>
                  </div>
                </div>
                <div className="heartBox ml-10 flex  justify-between items-center align-middle w-30">
                  <span className="icon-heart text-5xl text-slate-400 ml-10"></span>
                  <div className="text-center ml-4 ">+ playlist</div>
                </div>
                <div className="tagBox flex lg:ml-14 text-right text-xl w-100 md:mt-8 sm:mt-10 md:text-xl sm:text-lg  ">
                  <span>Tag</span>
                  <div className="ml-4 text-cyan-400">{data?.tagline}</div>
                </div>
              </div>

              <div className="flex mt-8 md:flex-wrap mb-3 sm:flex sm:flex-wrap ">
                <div className=" text-xl md:mb-10 sm:mb-8 sm:text-left ">
                  <span>
                    {new Date(data?.release_date).toLocaleDateString()}| R |
                  </span>
                </div>
                <div className="text-cyan-400 flex  text-xl lg:ml-14 md:ml-10">
                  <a href={data?.homepage}>Go to movie</a>
                </div>
              </div>
              <div className="flex text-lg align-middle text-slate-300 mt-10">
                <div className="flex align-middle">
                  <span className="icon-eye text-xl mr-3"></span>
                  <div>1.8K view</div>
                </div>
                <div className="flex align-center ml-14">
                  <span className="icon-like text-xl mr-3"></span>
                  <div>+ 15</div>
                </div>
              </div>
            </div>
          </div>
        )}
        {!showText && (
          <div className="">
            <div className="flex justify-center items-center lg:my-8 sm:mt-8 sm:mb-4 sm:font-normal">
              <span className="lg:text-2xl lg:mr-10 sm:text-xl md:text-xl ">
                Add a review
              </span>
              <div className=" sm:invisible md:visible lg:visible	bg-slate-700 md:w-6/12 sm:w-6/12 sm:ml-5 lg:w-7/12 line lg:ml-20"></div>
            </div>
            <div className="flex flex-col  justify-center items-start w-9/12 mx-auto">
              <div className="mt-3 ">
                <span className="text-xl  text-slate-300   ">
                  You must be logged in to post a review.
                </span>
                <div className="mt-20">
                  <span className="text-3xl my-6 text-slate-300">
                    Users Reviews
                  </span>
                </div>
                <div className="flex mt-6  text-xl">
                  <span className="text-cyan-300">nilofer </span>
                  <span className="text-slate-400 ml-6">March 21, 2019</span>
                </div>
                <div className="ml-8 my-4 ">
                  <span className="icon-star px-1 text-xl  text-slate-400"></span>
                  <span className="icon-star px-1 text-xl text-slate-400"></span>
                  <span className="icon-star px-1 text-xl text-slate-400"></span>
                  <span className="icon-star px-1 text-xl text-slate-400"></span>
                  <span className="icon-star px-1 text-xl text-slate-400"></span>
                  <span className="icon-star px-1 text-xl text-slate-400"></span>
                </div>
              </div>
              <div className="mt-5">
                <span className="text-2xl mt-4 text-slate-300">
                  Not too Good
                </span>
                <div className="flex mt-4">
                  <span className="icon-like text-2xl  text-slate-500"></span>
                  <div className=" text-slate-400 ml-5 text-xl">+ 1</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    </div>
  );
}

export default TabDe;
