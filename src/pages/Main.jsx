import React from "react";

import Navbar from "../components/Navbar/Navbar";

import Hero from "../components/Hero/Hero";

import MovieDetail from "../components/MovieDetail/MovieDetail";
import Gallery from "../components/Gallery/Gallery";
import RandomMovie from "../components/RandomMovieWithModal/RandomMovie";

import Footer from "../components/Footer/Footer";
import Slider from "../components/Slider/Main";
import FeaturedTV from "../components/FeaturedTV/FeaturedTV";
import Viking from "../components/Viking/Viking";

//test
import { fetchData } from "../services/apiservices.js";
import { Movies_Gernes_API } from "../services/Constant.js";

function Main() {
  const [movies_gernes, setMovies_gernes] = React.useState([]);
  React.useEffect(() => {
    fetchData(Movies_Gernes_API)
      .then((res) => {
        setMovies_gernes(res.genres);
        // console.log(res.genres, "response movie gernes");
      })
      .catch((error) => console.log(error, "Error occured"));
  }, []);
  // console.log(movies_gernes, "state");
  return (
    <div className="">
      <Hero />
      {/* <Gallery /> */}

      <Slider left={true} movie_id={movies_gernes[0]} text="Hello"></Slider>
      <RandomMovie />
      <FeaturedTV></FeaturedTV>
      <Slider text="Hello again" movie_id={movies_gernes[1]}></Slider>
      <Viking></Viking>
    </div>
  );
}

export default Main;
