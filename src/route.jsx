import React from "react";
import { Routes, Route } from "react-router-dom";

//pages
import MainPage from "./pages/Main";
import PopularPage from "./components/Popular/Popular";

function View() {
  return (
    <Routes>
      <Route exact path="/" element={<MainPage />}></Route>
      <Route exact path="/popular" element={<PopularPage />}></Route>
    </Routes>
  );
}

export default View;
