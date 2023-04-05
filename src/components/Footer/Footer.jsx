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
                  <a>Action</a>
                  <a>Adventure</a>
                  <a>Animation</a>
                  <a>Comedy</a>
                  <a>Crime</a>
                </div>
                <div className="flex flex-col h-[150px] justify-between items-start">
                  <a>Drame</a>
                  <a>Fantacy</a>
                  <a>Horror</a>
                  <a>Mystery</a>
                  <a>Romance</a>
                </div>
              </div>
            </div>
            <div className="h-full flex flex-col gap-[1rem] justify-center items-start w-[400px]">
              <div className="text-2xl">TV Series</div>
              <div className="flex flex-row justify-between w-[300px]  items-center">
                <div className="flex flex-col justify-between h-[150px]    items-start ">
                  <a>Valentine Day </a>
                  <a>Underrated Comedies</a>
                  <a>Scary TV Series</a>
                  <a>Best 2018 Documentaries</a>
                  <a>Classic Shows</a>
                </div>
                <div className="flex flex-col h-[150px] justify-between items-start ">
                  <a>Drame</a>
                  <a>Fantacy</a>
                  <a>Horror</a>
                  <a>Mystery</a>
                  <a>Romance</a>
                </div>
              </div>
            </div>
            <div className=" h-full gap-[1rem] flex flex-col justify-center items-start w-[400px]">
              <div className="text-2xl">Support</div>
              <div className="flex flex-col h-[150px] justify-between items-start">
                <a>My Account </a>
                <a>FAQ</a>
                <a>Watch on TV</a>
                <a>Help Center</a>
                <a>Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[60px] px-[3rem] text-sm bg-black text-white  w-full flex flex-row justify-between items-center">
        <div className="opacity-[.6]">
          Copyright © 2019, Vodi. All Rights Reserved
        </div>
        <div className="opacity-[.6]">Privacy Policy</div>
      </div>
    </div>
  );
};

export default Footer;
