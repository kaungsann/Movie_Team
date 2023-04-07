import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detai from "./pages/Detai";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/detail" element={<Detai />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
