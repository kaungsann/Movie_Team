import React from "react";
// import Main from "./Main";
import "./Popular.module.css";
function Popular() {
  return (
    <div className="popular h-screen w-full bg-gradient-to-b from-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center h-full md:flex-row">
        <div>
          <h2 className="text-white text-3xl">
            Popular Movies <br />
            to Watch Now
          </h2>
          <p className="text-gray-400">Most watched movies by days</p>
          <div>
            <a href="" className="text-gray-400">VIEW ALL ></a>
          </div>
        </div>
        <div className="max-w-sm rounded px-10">
          <img src="https://source.unsplash.com/random" alt="" className="w-full"/>
          <span className="text-gray-400">2017,Action</span>
          <h3 className="text-white text-2xl">Movie Title</h3>
        </div>
        
      </div>
    </div>
  );
}


export default Popular;
