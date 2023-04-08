import React from "react";
import SuggestMovieCard from "../component/SuggestMovieCard";
import { useState, useEffect } from "react";
import request from "../assets/api";
import axios from "axios";
const Detai = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(request.suggest)
      .then((response) => setData(response.data.slice(0, 8))); // Get only the first 8 items
  }, []);
  console.log(window.innerWidth);
  return (
    <div className="flex flex-col justify-center items-center lg:items-start md:items-center p-[3rem]">
      <div className="lg:md:sm:text-4xl  text-2xl">You Also May Like</div>
      <div className="w-full  flex flex-col lg:flex lg:flex-row lg:justify-between lg:items-center justify-center items-center place-items-center py-3 md:grid md:gap-4 md:grid-cols-3 gap-3  grid-cols-2">
        {data.map((data) => {
          return <SuggestMovieCard />;
        })}
      </div>
    </div>
  );
};

export default Detai;
