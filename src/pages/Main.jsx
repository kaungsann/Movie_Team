import React from "react";
import Navbar from "../components/Navbar/Navbar";

import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import Slider from "../components/Slider/Main";
import FeaturedTV from "../components/FeaturedTV/FeaturedTV";

function Main() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Slider left={true} text="Hello"></Slider>
      <FeaturedTV></FeaturedTV>
      <Slider text="Hello again"></Slider>
      <Footer></Footer>
    </div>
  );
}

export default Main;
