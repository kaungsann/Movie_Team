import React, { useState, useEffect } from "react";
import Popular from "./Popular";
import axios from "axios";
function Main() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(
        `https://api.unsplash.com/photos?client_id=SZxA0dgilFD2Qzx-zFIXDaBSsbkBjrsfFUhfoWhRGrQ`
      );
      const data = await response.json();
      setImages(data);
      console.log(data);
    };
    fetchImages();
  }, []);

  // const [year, setYear] = useState();
  // const [type, setType] = useState();
  // const [title, setTitle] = useState();

  // useEffect(() => {
  //   fetch(`https://pixabay.com/api/?key=35092448-760735954dc7446e535b94f2b&q=${term}&image_type=photo&pretty=true`)
  //   .then(res => res.json())
  //   .then(data => {
  //     setImages(data.hits);
  //     setIsLoading(false);
  //   })
  //   .catch(err => console.log(err));
  // }, []);
  return (
    <>
      {!images ? (
        <h1>Loading...</h1>
      ) : (
        <section>
          <h1>Recommende for your</h1>
          <div>
            {images.map((image, index) => (
              <Popular key={image.id} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}

export default Main;
