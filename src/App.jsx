import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Footer from "./component/Footer";
import FeaturedTV from "./component/FeaturedTV";

function App() {
  return (
    <div className="">
      <FeaturedTV />
      <Footer />
    </div>
  );
}

export default App;
