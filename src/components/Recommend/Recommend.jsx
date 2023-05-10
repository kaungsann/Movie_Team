import React, { useState, useEffect } from "react";
import img from "../img/images.jpeg";
import styles from "./Recommend.module.css";
import { fetchWithAxios, imgUrl } from "../../services/apiservices.js";
import { Similar_Movies_API } from "../../services/Constant.js";

function Recommend({ id }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchWithAxios(Similar_Movies_API(id))
      .then((res) => {
        // console.log(res.data.results.slice(0, 4), "similar videos");
        setData(res.data.results.slice(0, 4));
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className={`py-5 bg-slate-900`}>
      <h3
        className={`text-center text-2xl font-bold bg-slate-900 py-3 text-teal-500`}
      >
        Recommended
      </h3>
      <div className={`flex max-[820px]:flex-wrap justify-center items-center`}>
        {data?.map((item, index) => (
          <div className={`relative ${styles.cardDiv} `} key={index}>
            <img
              className={`absolute`}
              src={`${imgUrl}${item?.poster_path}`}
              alt={item?.title}
            />
            <button
              className={`absolute w-11/12 border-2 border-white bg-transparent hover:bg-white hover:text-black text-white `}
              onClick={() => window.location.assign(`${item?.id}`)}
            >
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recommend;
