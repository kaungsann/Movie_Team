import React from "react";
import Img from "../assets/loading_b.gif";
import { useNavigate } from "react-router-dom";

function Loading() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        top: 0,
        backgroundColor: "#fff",
        zIndex: 1000,
      }}
    >
      <img
        src={Img}
        style={{
          width: "50%",
          height: "50%",
        }}
      />
    </div>
  );
}

export default Loading;
