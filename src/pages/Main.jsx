import React from "react";
import Navbar from "../components/Navbar/Navbar";
import FeaturedTV from "../components/FeaturedTV/FeaturedTV";
import Footer from "../components/Footer/Footer";
import Slider from "../components/Slider/Main";

function Main() {
  return (
    <div className="bg-white">
      <Navbar />
      <Slider left={true} text="Romantic For Valentine Day"></Slider>
      <FeaturedTV></FeaturedTV>
      <Slider text="Action & Horrors"></Slider>
      <Footer></Footer>
    </div>
  );
}

export default Main;
