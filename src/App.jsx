import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import View from "./route";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <View></View>
    </Router>
  );
}

export default App;
