import React from "react";
import Img from "../assets/error-404.png";
import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
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
      <div style={{ zIndex: 1002, textAlign: "center" }}>
        <p className={`text-xl font-bold text-red-600`}>
          Sorry! We Can't Find That Page
        </p>
        <a
          className={`text-blue-600 underline hover:cursor-pointer hover:text-blue-800 transition-all`}
          onClick={() => navigate(-1)}
        >
          Please Go back
        </a>
      </div>
    </div>
  );
}

export default Error;
