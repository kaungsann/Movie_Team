import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";

import MovieDetail from "../components/MovieDetail/MovieDetail";
import Gallery from "../components/Gallery/Gallery";
import RandomMovie from "../components/RandomMovieWithModal/RandomMovie";

import Footer from "../components/Footer/Footer";
import Slider from "../components/Slider/Main";
import FeaturedTV from "../components/FeaturedTV/FeaturedTV";
import Viking from "../components/Viking/Viking";

import Loading from "./Loading";

//test
import { fetchData, fetchWithAxios } from "../services/apiservices.js";
import {
  Genre_Movies_list_API,
  Genre_TV_list_API,
} from "../services/Constant.js";

function Main() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 3000);
  // console.log(React, "react is called at console");
  const [movies_gernes, setMovies_gernes] = useState([]);
  const [tvGenres, setTvGenres] = useState([]);
  const movie = () => {
    fetchWithAxios(Genre_Movies_list_API)
      .then((res) => {
        setMovies_gernes(res.data.genres);
        // console.log(res.data.genres, "response movie gernes");
      })
      .catch((error) => console.log(error, "Error occured"));
  };

  const tv = () => {
    fetchWithAxios(Genre_TV_list_API)
      .then((res) => {
        setTvGenres(res.data.genres);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    movie();
    tv();
  }, []);
  // console.log(movies_gernes, "state");
  // console.log(movies_gernes, "movies_gernes");
  // console.log(tvGenres, "tv-genres");
  return loading ? (
    <Loading />
  ) : (
    <div className="">
      <Hero />
      <Slider
        left={true}
        id={movies_gernes[0]?.id}
        text={movies_gernes[0]?.name}
      ></Slider>
      <RandomMovie />
      <FeaturedTV></FeaturedTV>
      <Slider text={movies_gernes[1]?.name} id={movies_gernes[1]?.id}></Slider>
      <Viking id={tvGenres?.id}></Viking>
    </div>
  );
}

export default Main;
