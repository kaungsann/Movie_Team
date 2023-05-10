import Footer from "../Footer/Footer";
import React, { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import styles from "./Contact.module.css";
function Contact() {
  const [text, setText] = useState(false);
  const [text1, setText1] = useState(false);
  const [text2, setText2] = useState(false);
  const [text3, setText3] = useState(false);
  const [text4, setText4] = useState(false);

  return (
    <>
      <div className="my-14">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-medium space-x-0.5">Contact</h1>
          <div className="flex mt-6">
            <span className="text-xl text-cyan-500">Home</span>
            <span>
              <AiOutlineRight className="mx-2 text-2xl" />
            </span>
            <span className="text-xl">Contact</span>
          </div>
        </div>
      </div>
      <div className="lg:flex lg:justify-between lg:ml-14 ">
        <div className="flex flex-col p-3 mt-5 lg:ml-10 lg:w-3/5 sm:w-auto">
          <h1 className="text-3xl">Write to us E-mail message</h1>
          <div className="flex">
            <div className="flex flex-col w-3/5 my-3">
              <span className="my-3 text-2xl">Your Name (required)</span>
              <input
                type="text"
                className="w-auto p-2 border-2 rounded border-slate-400 focus:outline-none focus:ring focus:ring-violet-300"
              />
            </div>
            <div className="flex flex-col w-3/5 my-3 ml-5 ">
              <span className="my-3 text-2xl">Your Email (required)</span>
              <input
                type="text"
                className="w-auto p-2 border-2 rounded border-slate-400 focus:outline-none focus:ring focus:ring-violet-300"
              />
            </div>
          </div>
          <div className="flex flex-col mt-2 border-slate-500">
            <span className="my-3 text-2xl">Subject</span>
            <input
              type="text"
              className="w-auto p-2 border-2 rounded border-slate-400 focus:outline-none focus:ring focus:ring-violet-300"
            />
          </div>
          <div className="flex flex-col mt-2 border-slate-500">
            <span className="my-3 text-2xl">Your Message</span>

            <textarea
              id="my-textarea"
              name="message"
              style={{ height: "150px" }}
              className="w-auto p-2 border-2 rounded border-slate-400 focus:outline-none focus:ring focus:ring-violet-300"></textarea>
            <button className="bg-[#14b8a6] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-cyan-500 duration-300 text-violet-100 font-bold p-3 mt-5 rounded-md flex justify-start w-36 items-center">
              Send Message
            </button>
          </div>
        </div>
        <div className="p-3 mt-5 lg:ml-16 lg:w-2/4 sm:flex-col sm:ml-4 sm:w-auto md:flex-col">
          <span className="text-3xl sm:text-2xl ">
            Frequently Asked Questions
          </span>
          <div className="flex flex-col mt-5 text-xl cursor-pointer ">
            <span
              className="mt-3 transition-transform duration-1000 ease-in-out text-cyan-400 transform-gpu "
              onClick={() => setText(!text)}>
              {text ? "-" : "+"} Oh how many can i watch device at the same time
              ?
              {text ? (
                <span className="block p-2 mt-2 ml-6 text-black lg:w-6/12 sm:w-auto ">
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
              className="mt-3 text-cyan-400"
              onClick={() => setText1(!text1)}>
              {text1 ? "-" : "+"} First launch of Vodi
              {text1 ? (
                <span className="block p-2 mt-2 ml-6 text-black lg:w-6/12 sm:w-auto ">
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
              className="mt-3 text-cyan-400"
              onClick={() => setText2(!text2)}>
              {text2 ? "-" : "+"} What is a Vodi?
              {text2 ? (
                <span className="block p-2 mt-2 ml-6 text-black lg:w-6/12 sm:w-auto ">
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
              className="mt-3 text-cyan-400"
              onClick={() => setText3(!text3)}>
              {text3 ? "-" : "+"} Failure to login Vodi on mobile
              {text3 ? (
                <span className="block w-6/12 p-2 mt-2 ml-6 text-black sm:w-auto ">
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
              className="mt-3 text-cyan-400 sm:w-auto "
              onClick={() => setText4(!text4)}>
              {text4 ? "- " : "+ "} Acess to Vodi + package in European Union
              Countries
              {text4 ? (
                <span className="block w-6/12 p-2 mt-2 ml-6 text-black sm:w-auto">
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
              <span className="text-xl text-slate-400">
                Brooklyn, New York 849 Diamond Str, 112th Floor NY 10012 New
                York, United Stated America
              </span>
            </div>

            <div className="w-2/5 sm:w-auto sm:mt-6">
              <div className="my-5 text-2xl">Working Hours</div>
              <span className="text-xl text-slate-400">
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
        className={`w-full lg:my-14 sm:my-10 google-map ${styles.iframe}`}
        loading="lazy"></iframe>

      <h1 className="text-4xl text-center my-14 sm:text-3xl sm:my-20">
        We Are Always Thinking Global
      </h1>
      <Footer />
    </>
  );
}

export default Contact;
