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
  const prev = () =>
    setCurr((curr) => (curr === 0 ? photos.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === photos.length - 1 ? 0 : curr + 1));
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
