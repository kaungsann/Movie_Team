import React from "react";
import img from "../img/images.jpeg";
import styles from "./Recommend.module.css";

function Recommend({ data }) {
  return (
    <div className={`py-5 bg-slate-900`}>
      <h3 className={`text-center text-2xl font-bold bg-slate-900 py-3 text-teal-500`}>
        Recommended
      </h3>
      <div className={`flex max-[820px]:flex-wrap justify-center items-center`}>
        {data?.map((item, index) => (
          <div className={`relative ${styles.cardDiv} `} key={index}>
            <img className={`absolute`} src={img} alt={item.img} />
            <button
              className={`absolute w-11/12 border-2 border-white bg-transparent hover:bg-white hover:text-black text-white `}
              onClick={() => window.location.assign(`${item.id}`)}>
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recommend;
