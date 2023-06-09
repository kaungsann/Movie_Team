import React, { useState, useEffect } from "react";
import Slider from "./Slider";
import Button from "./Button";
import styles from "./Slider.module.css";
import { fetchWithAxios } from "../../services/apiservices.js";
import { Movie_Detail_Recommend_API } from "../../services/Constant.js";

function Main(props) {
  const [curr, setCurr] = useState(0);
  const [photos, setPhotos] = useState([]);
  // console.log(props.movie_id, "movie_id");
  useEffect(() => {
    fetchWithAxios(Movie_Detail_Recommend_API(props?.id))
      .then((res) => {
        // console.log(res.data, "slider response");
        setPhotos(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props?.id]);
  // console.log(photos);
  setTimeout(() => {
    next();
  }, 3000);
  const prev = () => {
    if (window.innerWidth <= 820) {
      console.log(window.innerWidth <= 820);
      setCurr((curr) => (curr === 0 ? 10 - 1 : curr - 1));
    } else if (window.innerWidth <= 576) {
      console.log(window.innerWidth <= 576);
      setCurr((curr) => (curr === 0 ? 20 - 1 : curr - 1));
    } else {
      setCurr((curr) => (curr === 0 ? 5 - 1 : curr - 1));
    }
  };

  const next = () => {
    if (window.innerWidth <= 820) {
      setCurr((curr) => (curr === 0 ? 10 - 1 : curr + 1));
    } else if (window.innerWidth <= 576) {
      setCurr((curr) => (curr === 0 ? 20 - 1 : curr + 1));
    } else {
      setCurr((curr) => (curr === 0 ? 5 - 1 : curr + 1));
    }
  };

  return (
    <div
      className={`flex items-center flex-row  max-[820px]:flex-col-reverse bg-slate-900 text-white py-5 pl-3 ${
        props.left ? "flex-row-reverse" : ""
      }`}
    >
      <div>
        <Slider curr={curr} photos={photos}></Slider>
      </div>
      <div
        style={{ display: "block" }}
        className={props.left ? styles["left-text"] : styles["right-text"]}
      >
        <div className={styles["underline-title"]}></div>
        <h3 className={styles["title-text"]}>{props.text}</h3>
        <Button text="<" function={prev}></Button>
        <Button text=">" function={next}></Button>
        <p>
          <a style={{ color: "#7f7f7f" }} href="#">
            View More &rArr;
          </a>
        </p>
      </div>
    </div>
  );
}

export default Main;
