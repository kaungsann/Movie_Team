import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import MovieDetail from "../components/MovieDetail/MovieDetail";
import Gallery from "../components/Gallery/Gallery";
import RandomMovie from "../components/RandomMovieWithModal/RandomMovie";

function Main() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <MovieDetail />
      <RandomMovie />
      {/* <Gallery /> */}
    </div>
  );
}

export default Main;
