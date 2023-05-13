import React from "react";
import {
  FaFacebook,
  FaGoogle,
  FaTwitter,
  FaWifi,
  FaGlobe,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="px-[3rem] bg-[#0a0d14]">
        <div className="lg:xl:2xl:md:flex hidden flex-col justify-center items-center w-full   text-white  ">
          <div className="h-[110px] w-full flex flex-row justify-between items-center border-b border-solid border-1 border-[#c8c8c8]">
            <div className="text-3xl font-bold ">Logo</div>
            <div className="flex flex-row justify-between items-center w-[500px] ">
              <div className="flex flex-row items-center gap-1">
                <FaFacebook /> <a>facebook</a>
              </div>
              <div className="flex flex-row items-center gap-1">
                <FaTwitter />
                <a>Twitter</a>
              </div>
              <div className="flex flex-row items-center gap-1">
                <FaGoogle /> <a>Google+</a>
              </div>
              <div className="flex flex-row items-center gap-1">
                <FaGlobe />
                <a>Vimeo</a>
              </div>
              <div className="flex flex-row items-center gap-1">
                <FaWifi /> <a>RSS</a>
              </div>
            </div>
          </div>
          <div className="h-[350px]  w-full flex flex-row justify-between items-center">
            <div className="h-full flex flex-col justify-center gap-[1rem] items-start w-[400px]">
              <div className="text-2xl ">Movie Categories</div>
              <div className="flex flex-row justify-between w-[300px] items-center">
                <div className="flex flex-col h-[150px] justify-between items-start">
                  <a className="myA">Action</a>
                  <a className="myA">Adventure</a>
                  <a className="myA">Animation</a>
                  <a className="myA">Comedy</a>
                  <a className="myA">Crime</a>
                </div>
                <div className="flex flex-col h-[150px] justify-between items-start">
                  <a className="myA">Drame</a>
                  <a className="myA">Fantacy</a>
                  <a className="myA">Horror</a>
                  <a className="myA">Mystery</a>
                  <a className="myA">Romance</a>
                </div>
              </div>
            </div>
            <div className="h-full flex flex-col gap-[1rem] justify-center items-start w-[400px]">
              <div className="text-2xl">TV Series</div>
              <div className="flex flex-row justify-between w-[300px]  items-center">
                <div className="flex flex-col justify-between h-[150px]    items-start ">
                  <a className="myA">Valentine Day </a>
                  <a className="myA">Underrated Comedies</a>
                  <a className="myA">Scary TV Series</a>
                  <a className="myA">Best 2018 Documentaries</a>
                  <a className="myA">Classic Shows</a>
                </div>
                <div className="flex flex-col h-[150px] justify-between items-start ">
                  <a className="myA">Drame</a>
                  <a className="myA">Fantacy</a>
                  <a className="myA">Horror</a>
                  <a className="myA">Mystery</a>
                  <a className="myA">Romance</a>
                </div>
              </div>
            </div>
            <div className=" h-full gap-[1rem] flex flex-col justify-center items-start w-[400px]">
              <div className="text-2xl">Support</div>
              <div className="flex flex-col h-[150px] justify-between items-start">
                <a className="myA">My Account </a>
                <a className="myA">FAQ</a>
                <a className="myA">Watch on TV</a>
                <a className="myA">Help Center</a>
                <a className="myA">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[60px] px-[3rem] text-sm bg-black text-white  w-full flex flex-row justify-between items-center">
        <div className="opacity-[.6]">
          Copyright © {new Date().getFullYear()}, YTD Team. All Rights Reserved
        </div>
        <div className="opacity-[.6]">Privacy Policy</div>
      </div>
    </div>
  );
};

export default Footer;
