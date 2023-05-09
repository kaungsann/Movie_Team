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
import { fetchData, fetchWithAxios } from "../services/apiservices.js";
import { Genre_Movies_list_API } from "../services/Constant.js";

function Main() {
  const [movies_gernes, setMovies_gernes] = React.useState([]);
  React.useEffect(() => {
    fetchWithAxios(Genre_Movies_list_API)
      .then((res) => {
        setMovies_gernes(res.data.genres);
        // console.log(res.data.genres, "response movie gernes");
      })
      .catch((error) => console.log(error, "Error occured"));
  }, []);
  // console.log(movies_gernes, "state");
  // console.log(movies_gernes, "movies_gernes");
  return (
    <div className="">
      <Hero />
      {/* <Gallery /> */}

      <Slider
        left={true}
        id={movies_gernes[0]?.id}
        text={movies_gernes[0]?.name}
      ></Slider>
      <RandomMovie />
      <FeaturedTV></FeaturedTV>
      <Slider text={movies_gernes[1]?.name} id={movies_gernes[1]?.id}></Slider>
      <Viking></Viking>
    </div>
  );
}

export default Main;
