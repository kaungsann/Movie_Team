import React, { useState, useEffect } from "react";
import Slider from "./Slider";
import Button from "./Button";
import styles from "./Slider.module.css";

function Main(props) {
  const [curr, setCurr] = useState(0);
  const [photos, setPhotos] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://picsum.photos/v2/list");
    if (!response.ok) {
      throw new Error("Data coud not be fetched!");
    } else {
      return response.json();
    }
  };
  useEffect(() => {
    fetchData()
      .then((res) => {
        setPhotos(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(photos);
  const prev = () => setCurr((curr) => (curr === 0 ? photos.length - 1 : curr - 1));

  const next = () => setCurr((curr) => (curr === photos.length - 1 ? 0 : curr + 1));
  return (
    <div
      className={`flex items-center flex-row  max-[820px]:flex-col-reverse ${
        props.left ? "flex-row-reverse" : ""
      }`}>
      <div>
        <Slider curr={curr} photos={photos}></Slider>
      </div>
      <div
        style={{ display: "block" }}
        className={
          props.left ? styles["left-text"] : props.top ? styles["top-text"] : styles["right-text"]
        }>
        <div className={styles["underline-title"]}></div>
        <h3 className={styles["title-text"]}>{props.text}</h3>
        <Button text="<" function={prev}></Button>
        <Button text=">" function={next}></Button>
        <p>
          <a href="#">View More &rArr;</a>
        </p>
      </div>
    </div>
  );
}

export default Main;
