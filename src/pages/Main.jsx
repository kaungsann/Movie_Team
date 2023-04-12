import React from "react";

import Navbar from "../components/Navbar/Navbar";

import Hero from "../components/Hero/Hero";

import MovieDetail from "../components/MovieDetail/MovieDetail";
import Gallery from "../components/Gallery/Gallery";
import RandomMovie from "../components/RandomMovieWithModal/RandomMovie";

import Footer from "../components/Footer/Footer";
import Slider from "../components/Slider/Main";
import FeaturedTV from "../components/FeaturedTV/FeaturedTV";

function Main() {
  return (
    <div className="">

      <Hero />
      <MovieDetail />
      <RandomMovie />
      {/* <Gallery /> */}

      <Hero />
      <Slider left={true} text="Hello"></Slider>
      <FeaturedTV></FeaturedTV>
      <Slider text="Hello again"></Slider>


    </div>
  );
}

export default Main;
