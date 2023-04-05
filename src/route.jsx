import React from "react";
import { Routes, Route } from "react-router-dom";

//pages
import MainPage from "./pages/Main";

//test
import Slider from "./components/Slider/Main";

function View() {
  return (
    <Routes>
      <Route exact path="/" element={<MainPage />}></Route>
      <Route
        path="/slider"
        element={<Slider left={false} top={false} text="Romantic For Valentine Day" />}></Route>
    </Routes>
  );
}

export default View;
