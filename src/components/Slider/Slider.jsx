import React, { useEffect, useState } from "react";
import styles from "./Slider.module.css";
import Button from "./Button";
import { imgUrl } from "../../services/apiservices.js";

function Slider(props) {
  // console.log(props.photos, "photos");
  return (
    <div className={`overflow-hidden block`} style={{ width: "75vw" }}>
      <div
        className={`flex transition-transform ease-out duration-500`}
        style={{ transform: `translateX(-${props.curr * 40}%)` }}
      >
        {props.photos?.map((item, index) => (
          <div
            className={styles["mobile-image"]}
            key={index}
            style={{ margin: "5px " }}
          >
            {item.popularity > 50 ? (
              <span
                className={`bg-blue-600 text-white ml-12 lg:ml-16 p-1 absolute top-0 rounded-md`}
              >
                Featured
              </span>
            ) : (
              <></>
            )}
            <img
              onClick={() => {
                window.location.assign(`/movie-detail/${item.id}`);
              }}
              src={`${imgUrl}${item?.poster_path}`}
              alt=""
              // style={{ width: "200px", height: "250px", margin: "5px ", borderRadius: "2px" }}
              // className={styles["mobile-image"]}
            />
            <p className={`text-teal-500`}>{item.title}</p>
            <p className={`text-sm`}>popularity : {item.popularity}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
