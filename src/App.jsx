import "./App.css";

import View from "./route";
import { BrowserRouter as Router } from "react-router-dom";
import Back from "./components/BackToTop/BackToTop";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <View></View>
      <Back></Back>
      <Footer></Footer>
    </Router>
  );
}

export default App;
