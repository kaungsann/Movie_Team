import Footer from "../Footer/Footer";
import React, { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import "./Contact.css";
function Contact() {
  const [text, setText] = useState(true);
  const [text1, setText1] = useState(true);
  const [text2, setText2] = useState(true);
  const [text3, setText3] = useState(true);
  const [text4, setText4] = useState(true);

  return (
    <>
      <div className="my-14">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-medium space-x-0.5">Contact</h1>
          <div className="flex mt-6">
            <span className="text-xl text-cyan-500">Home</span>
            <span>
              <AiOutlineRight className="text-2xl mx-2" />
            </span>
            <span className="text-xl">Contact</span>
          </div>
        </div>
      </div>
      <div className="lg:flex lg:justify-between lg:ml-14 ">
        <div className="flex flex-col lg:ml-10 mt-5 lg:w-3/5 p-3 sm:w-auto">
          <h1 className="text-3xl">Write to us E-mail message</h1>
          <div className="flex">
            <div className="flex flex-col   my-3   w-3/5">
              <span className="text-2xl my-3">Your Name (required)</span>
              <input
                type="text"
                className="p-4 border-slate-400 border-2  w-auto  rounded  focus:outline-none focus:ring  focus:ring-violet-300"
              />
            </div>
            <div className="flex flex-col ml-5 my-3 w-3/5 ">
              <span className="text-2xl my-3">Your Email (required)</span>
              <input
                type="text"
                className="p-4 border-slate-400 border-2 rounded  w-auto focus:outline-none focus:ring  focus:ring-violet-300"
              />
            </div>
          </div>
          <div className="flex flex-col border-slate-500  mt-2">
            <span className="text-2xl my-3">Subject</span>
            <input
              type="text"
              className="p-4 w-auto border-slate-400 border-2  rounded focus:outline-none focus:ring  focus:ring-violet-300"
            />
          </div>
          <div className="flex flex-col mt-2  border-slate-500  mt-2">
            <span className="text-2xl my-3">Your Message</span>

            <textarea
              id="my-textarea"
              name="message"
              className="p-4 w-auto border-slate-400 rounded border-2 focus:outline-none focus:ring  focus:ring-violet-300"
            ></textarea>
            <button className="bg-[#14b8a6] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-cyan-500 duration-300 text-violet-100 font-bold p-3 mt-5 rounded-md flex justify-start w-36 items-center">
              Send Message
            </button>
          </div>
        </div>
        <div className="mt-5 lg:ml-16 p-3 lg:w-2/4 sm:flex-col sm:ml-4 sm:w-auto md:flex-col">
          <span className="text-3xl sm:text-2xl ">
            Frequently Asked Questions
          </span>
          <div className="text-xl flex flex-col mt-5 cursor-pointer ">
            <span
              className="text-cyan-400 mt-3 transition-transform duration-1000 ease-in-out transform-gpu "
              onClick={() => setText(!text)}
            >
              {text ? "-" : "+"} Oh how many can i watch device at the same time
              ?
              {text ? (
                <span className="block text-black ml-6 mt-2 lg:w-6/12  p-2  sm:w-auto ">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard dummy text ever since the 1500s, when an unknown
                  printer
                </span>
              ) : (
                ""
              )}
            </span>
            <span
              className="text-cyan-400 mt-3"
              onClick={() => setText1(!text1)}
            >
              {text1 ? "-" : "+"} First launch of Vodi
              {text1 ? (
                <span className="block text-black ml-6 mt-2 lg:w-6/12  p-2 sm:w-auto ">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard dummy text ever since the 1500s, when an unknown
                  printer
                </span>
              ) : (
                ""
              )}
            </span>
            <span
              className="text-cyan-400 mt-3"
              onClick={() => setText2(!text2)}
            >
              {text2 ? "-" : "+"} What is a Vodi?
              {text2 ? (
                <span className="block text-black ml-6 mt-2 lg:w-6/12  p-2 sm:w-auto ">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard dummy text ever since the 1500s, when an unknown
                  printer
                </span>
              ) : (
                ""
              )}
            </span>
            <span
              className="text-cyan-400 mt-3"
              onClick={() => setText3(!text3)}
            >
              {text3 ? "-" : "+"} Failure to login Vodi on mobile
              {text3 ? (
                <span className="block text-black ml-6 mt-2 w-6/12  p-2 sm:w-auto ">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard dummy text ever since the 1500s, when an unknown
                  printer
                </span>
              ) : (
                ""
              )}
            </span>
            <span
              className="text-cyan-400 mt-3 sm:w-auto "
              onClick={() => setText4(!text4)}
            >
              {text4 ? "- " : "+ "} Acess to Vodi + package in European Union
              Countries
              {text4 ? (
                <span className="block text-black ml-6 mt-2 w-6/12  p-2 sm:w-auto">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard dummy text ever since the 1500s, when an unknown
                  printer
                </span>
              ) : (
                ""
              )}
            </span>
          </div>
          <div className="flex lg:mt-16 sm:flex-col sm:mt-6 sm:w-auto ">
            <div className="w-2/5 sm:w-auto ">
              <div className="my-5 text-2xl">Our Office</div>
              <span className="text-slate-400 text-xl">
                Brooklyn, New York 849 Diamond Str, 112th Floor NY 10012 New
                York, United Stated America
              </span>
            </div>

            <div className="w-2/5  sm:w-auto sm:mt-6">
              <div className="my-5 text-2xl">Working Hours</div>
              <span className="text-slate-400 text-xl">
                Mon-Sat:8:00-17:00 Sunday: Closed
              </span>
            </div>
          </div>
        </div>
      </div>

      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3529.941966012996!2d-97.73119644967806!3d30.28619498182613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b55fcea5d551%3A0x373e642f883b2f4d!2sThe%20University%20of%20Texas%20at%20Austin!5e0!3m2!1sen!2sus!4v1651981043137!5m2!1sen!2sus"
        allowFullScreen=""
        height="450px"
        className="w-full  lg:my-14 sm:my-10 google-map"
        loading="lazy"
      ></iframe>

      <h1 className="text-4xl text-center my-14 sm:text-3xl sm:my-20">
        We Are Always Thinking Global
      </h1>
      <Footer />
    </>
  );
}

export default Contact;
