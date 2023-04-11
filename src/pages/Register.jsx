import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);
  const PhoneRef = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="flex flex-row justify-center items-center  p-[5rem] py-[4rem] h-screen">
      <div className="w-1/2  h-full flex flex-col justify-around items-center bg-[#debdbd] text-[#654444]">
        <div className="text-5xl">Register</div>
        <div className="text-2xl">Welcome </div>
        <div className="flex flex-col justify-center items-center">
          <div>Enjoy with movies</div>
          <div className="flex flex-row">
            <p>old user?</p>
            <Link to="/login" className="text-blue-600">
              login
            </Link>
            <p>Here</p>
          </div>
        </div>
      </div>
      <div className="w-1/2 bg-red-400 h-full bg-[#d9d9d9]">
        <form
          onSubmit={handleSubmit}
          className="w-full h-full flex flex-col justify-center items-center gap-4"
        >
          <div className="w-[340px] h-[40px] bg-white flex flex-row justify-center items-center rounded-full">
            <input
              type="text"
              email="name"
              ref={nameRef}
              placeholder="Enter name"
              className="w-[300px] bg-transparent border-none outline-none"
            />
          </div>
          <br />
          <div className="w-[340px] h-[40px] bg-white flex flex-row justify-center items-center rounded-full">
            <input
              type="text"
              email="email"
              ref={emailRef}
              placeholder="Enter Email"
              className="w-[300px] bg-transparent border-none outline-none"
            />
          </div>
          <br />
          <div className="w-[340px] h-[40px] bg-white flex flex-row justify-center items-center rounded-full">
            <input
              type="text"
              name="phoneNumber"
              ref={PhoneRef}
              placeholder="Enter Phone number"
              className="w-[300px] bg-transparent border-none outline-none"
            />
          </div>
          <br />
          <div className="w-[340px] h-[40px] bg-white flex flex-row justify-center items-center rounded-full">
            <input
              type="password"
              password="password"
              ref={passwordRef}
              placeholder="Enter Your Password"
              className="w-[300px] bg-transparent border-none outline-none"
            />
          </div>

          <br />
          <button
            type="submit"
            className="bg-[#007bff] px-[1rem] py-[.5rem] text-white rounded-lg"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
