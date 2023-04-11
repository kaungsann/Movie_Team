import React from "react";
import { Routes, Route } from "react-router-dom";

//pages
import MainPage from "./pages/Main";
import PopularPage from "./components/Popular/Popular";
import MovieDetail from "./components/MovieDetail/MovieDetail";

//test
import Slider from "./components/Slider/Main";
import Contact from "./components/Contact/Contact";

function View() {
  return (
    <Routes>
      <Route exact index path="/" element={<MainPage />}></Route>

      <Route exact path="/popular" element={<PopularPage />}></Route>
      <Route path="/movie-detail/:id" element={<MovieDetail />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
  );
}

export default View;
