import React from "react";
import Img from "../assets/loading_b.gif";

function Loading() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
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
