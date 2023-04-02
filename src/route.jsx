import React from "react";
import { Routes, Route } from "react-router-dom";

//pages
import MainPage from "./pages/Main";

function View() {
  return (
    <Routes>
      <Route exact path="/" element={<MainPage />}></Route>
    </Routes>
  );
}

export default View;
