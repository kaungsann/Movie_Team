import React, { useEffect, useState } from "react";
import styles from "./Slider.module.css";
import Button from "./Button";

function Slider(props) {
  return (
    <div className={`overflow-hidden block`} style={{ width: "75vw" }}>
      <div
        className={`flex transition-transform ease-out duration-500`}
        style={{ transform: `translateX(-${props.curr * 100}%)` }}>
        {props.photos?.map((item, index) => (
          <div className={styles["mobile-image"]} key={index} style={{ margin: "5px " }}>
            <span className={`bg-blue-600 text-white ml-16 p-1 absolute top-0 rounded-md`}>
              Featured
            </span>
            <img
              onClick={() => {
                window.location.assign("/movie-detail/1");
              }}
              src={item?.download_url}
              alt=""
              // style={{ width: "200px", height: "250px", margin: "5px ", borderRadius: "2px" }}
              // className={styles["mobile-image"]}
            />
            <p>Hello</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;

//photo api => https://picsum.photos/v2/list
