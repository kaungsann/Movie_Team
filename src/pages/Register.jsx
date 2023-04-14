import React, { useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);
  const PhoneRef = useRef(null);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/user/register", {
        name: nameRef.current.value,
        email: emailRef.current.value,
        phone: PhoneRef.current.value,
        password: passwordRef.current.value,
      });
      if (response && response.data) {
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex bg-[#131722]  flex-row justify-center items-center  lg:p-[5rem] lg:py-[4rem] h-screen">
      <div className="w-1/2 hidden  h-full lg:flex flex-col justify-around items-center bg-[#1c212e] text-[#fff]">
        <div className="text-5xl">Register</div>
        <div className="text-2xl">Welcome </div>
        <div className="flex flex-col justify-center items-center">
          <div>Enjoy with movies</div>
          <div className="flex flex-row">
            <p>old user?</p>
            <Link to="/signin" className="text-blue-600">
              login
            </Link>
            <p>Here</p>
          </div>
        </div>
      </div>

      <div className="lg:w-1/2 flex flex-col items-center justify-around w-full  h-full ">
        <div className="lg:hidden block text-4xl pt-[2rem] text-white w-full text-center">
          Sign Up From
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full lg:h-full h-[60%] flex flex-col justify-center items-center gap-4">
          <div className="lg:w-[340px] w-[300px] h-[40px] bg-white flex flex-row justify-center items-center rounded-full">
            <input
              type="text"
              email="name"
              ref={nameRef}
              placeholder="Enter name"
              className="lg:w-[300px] w-[260px] bg-transparent border-none outline-none"
            />
          </div>
          <br />
          <div className="lg:w-[340px] w-[300px] h-[40px] bg-white flex flex-row justify-center items-center rounded-full">
            <input
              type="text"
              email="email"
              ref={emailRef}
              placeholder="Enter Email"
              className="lg:w-[300px] w-[260px] bg-transparent border-none outline-none"
            />
          </div>
          <br />
          <div className="lg:w-[340px] w-[300px] h-[40px] bg-white flex flex-row justify-center items-center rounded-full">
            <input
              type="text"
              name="phoneNumber"
              ref={PhoneRef}
              placeholder="Enter Phone number"
              className="lg:w-[300px] w-[260px] bg-transparent border-none outline-none"
            />
          </div>
          <br />
          <div className="lg:w-[340px] w-[300px]  h-[40px] bg-white flex flex-row justify-center items-center rounded-full">
            <input
              type="password"
              password="password"
              ref={passwordRef}
              placeholder="Enter Your Password"
              className="lg:w-[300px] w-[260px] bg-transparent border-none outline-none"
            />
          </div>

          <br />
          <button type="submit" className="bg-[#007bff] px-[1rem] py-[.5rem] text-white rounded-lg">
            Sign In
          </button>
        </form>
        <div className="lg:hidden flex flex-row">
          <p className="text-white">Have an account?</p>
          <Link to="/login" className="text-blue-600">
            login
          </Link>
          <p className="text-white">Here</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
