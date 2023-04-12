import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import request from "../assets/api";

const Login = () => {
  const passwordRef = useRef(null);
  const phoneRef = useRef(null);
  const [message, setMessage] = useState("");
  const { login } = request;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const phone = phoneRef.current.value;
    const password = passwordRef.current.value;
    const response = await axios.post("http://localhost:8080/user/login", {
      phone,
      password,
    });
    const { data } = response;
    console.log(data);

    if (data.error) {
      alert("fail");
      setMessage(data.error);
    } else {
      alert("Successful login");
      phoneRef.current.value = "";
      passwordRef.current.value = "";
    }
  };

  return (
    <div className="flex flex-row bg-[#131722] justify-center items-center lg:p-[5rem] lg:py-[4rem] h-screen">
      <div className="w-1/2 h-full hidden lg:flex flex-col justify-around items-center bg-[#1c212e] text-[#fff]">
        <div className="text-5xl">Login</div>
        <div className="text-2xl">Welcome Back</div>
        <div className="flex flex-col justify-center items-center">
          <div>Enjoy with movies</div>
          <div className="flex flex-row">
            <p>New user?</p>
            <Link to="/register" className="text-blue-600">
              Register Here
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 w-full flex flex-col items-center justify-center bg-red-400 lg:h-full h-screen bg-transparent">
        <div className="lg:hidden block text-4xl pt-[2rem] text-white w-full text-center">
          Login From
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full lg:h-full h-[60%] flex flex-col justify-center items-center gap-4"
        >
          <div className="lg:w-[340px] w-[300px] h-[40px] bg-white flex flex-row justify-center items-center rounded-full">
            <input
              type="text"
              name="phone"
              ref={phoneRef}
              placeholder="Enter Phone number"
              className="lg:w-[300px] w-[260px] bg-transparent border-none outline-none"
            />
          </div>
          <br />

          <div className="lg:w-[340px] w-[300px] h-[40px] bg-white flex flex-row justify-center items-center rounded-full">
            <input
              type="password"
              name="password"
              ref={passwordRef}
              placeholder="Enter Your Password"
              className="lg:w-[300px] w-[260px] bg-transparent border-none outline-none"
            />
          </div>

          {message && <div className="text-red-600">{message}</div>}

          <br />
          <button
            type="submit"
            className="bg-[#007bff] px-[1rem] py-[.5rem] text-white rounded-lg"
          >
            Log In
          </button>
        </form>
        <div className="lg:hidden flex flex-row w-full justify-center">
          <p className="text-white">New user?</p>
          <Link to="/register" className="text-blue-600">
            Register
          </Link>
          <p className="text-white">Here</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
