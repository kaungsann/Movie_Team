import React, { useEffect, useRef, useState } from "react";
import "./Movie_card.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Movie_Card = () => {
  const [movie, Setmoive] = useState([]);
  const sliderRef = useRef();
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=8")
      .then((res) => res.json())
      .then((movie) => {
        let movies = movie.results;
        let filterMv = movies.map((mv) => {
          return {
            uuid: mv.login.uuid,
            image: mv.picture.thumbnail,
            name: `${mv.name.title} ${mv.name.first}`,
          };
        });
        console.log(filterMv);
        Setmoive(filterMv);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const handlePreviousClick = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };

  return (
    <>
      <div className="MovieCard ">
        <div className="selectTitle fs-5 mb-3 float-start p-1 ml-">
          <span className="mx-3 text">
            <a
              onClick={() => {
                window.scrollTo({ top: 0 });
              }}
            >
              Todays
            </a>
          </span>
          <span className="mx-3 text">
            <a
              onClick={() => {
                window.scrollTo({ top: 0 });
              }}
            >
              This Week{" "}
            </a>
          </span>
          <span className="mx-3 text">
            <a
              onClick={() => {
                window.scrollTo({ top: 0 });
              }}
            >
              Last 30 Days{" "}
            </a>
          </span>
        </div>
        <div className="cardAndText">
          <Slider className="cardContainer" {...settings} ref={sliderRef}>
            {movie.map((card) => {
              return (
                <>
                  <div className="cardbox">
                    <img
                      src={card.image}
                      width="250px"
                      height="150px"
                      className="img"
                    />
                    <span className="p-2">{card.uuid}</span>
                    <h4 className="cardname mt-1">{card.name}</h4>
                  </div>
                </>
              );
            })}
          </Slider>

          <div className="textandicons ">
            <h2 className="featureText">Featured TV Episode Premieres</h2>
            <div className="iconsBox">
              <span
                className="icon-arrow-left fs-3 icons float-start"
                onClick={handlePreviousClick}
              ></span>
              <span
                className="icon-arrow-right fs-3 icons float-start"
                onClick={handleNextClick}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie_Card;
