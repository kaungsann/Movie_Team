import React, { useState } from "react";
import photo from "../img/images.jpeg";
import "./Viking.css";
const Viking = () => {
  const [activeSeason, setActiveSeason] = useState("season5");
  const [color1, setColor1] = useState("#00ffff");

  const ActiveSeason = (seasonName) => {
    setActiveSeason(seasonName);
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url('https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/ep-bg.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "550px",
        }}
        className="md:h-auto "
      >
        <div className="text-center lg:mt-14 cursor-pointer ">
          <div className="flex flex-col  text-cyan-50">
            <span className="lg:text-5xl my-4 font-bold mt-32  md:text-5xl sm:text-4xl">
              Vikings
            </span>
            <span className="title lg:text-3xl space-x-2 mt-4 md:my-6 sm:my-6 sm:text-2xl sm:w-3/4 sm:mx-auto ">
              New Season 5 just flow in. Watch and Debate
            </span>
          </div>

          <div className="mt-10  cursor-pointer  text-cyan-50">
            <div className="text-center">
              <ul className=" sm:text-lg flex justify-center md:text-2xl md:my-6 md:mx-10 lg:text-3xl">
                <li
                  className="mx-3"
                  style={{
                    color: activeSeason === "season5" && color1,
                    transform: activeSeason === "season5" && "scale(1.2)",
                  }}
                  onClick={() => ActiveSeason("season5")}
                >
                  Season 5
                </li>
                <li
                  className="mx-3"
                  style={{
                    color: activeSeason === "season4" && color1,
                    transform: activeSeason === "season4" && "scale(1.2)",
                  }}
                  onClick={() => ActiveSeason("season4")}
                >
                  Season 4
                </li>
                <li
                  className="mx-3"
                  style={{
                    color: activeSeason === "season3" && color1,
                    transform: activeSeason === "season3" && "scale(1.2)",
                  }}
                  onClick={() => ActiveSeason("season3")}
                >
                  Season 3
                </li>
                <li
                  className="mx-3"
                  style={{
                    color: activeSeason === "season2" && color1,
                    transform: activeSeason === "season2" && "scale(1.2)",
                  }}
                  onClick={() => ActiveSeason("season2")}
                >
                  Season 2
                </li>
                <li
                  className="mx-3"
                  style={{
                    color: activeSeason === "season1" && color1,
                    transform: activeSeason === "season1" && "scale(1.2)",
                  }}
                  onClick={() => ActiveSeason("season1")}
                >
                  Season 1
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 cursor-pointer   p-4 ">
            {activeSeason == "season5" && (
              <div className=" lg:flex   text-cyan-200 lg:justify-center  lg:flex-nowrap md:flex-nowrap  ">
                <div className="ml-3  p-3 img">
                  <img
                    src={photo}
                    width="350px"
                    height="400px"
                    className="md:w-full sm:w-full lg:h-auto"
                  />
                  <div className="mt-2 md:text-2xl ">SO5E01</div>
                  <span className="mt-2 md:text-2xl">The Departed part 1</span>
                </div>
                <div className="ml-3 md:inline-block p-3 img sm:inline-block">
                  <img
                    src={photo}
                    width="350px"
                    height="400px"
                    className="sm:w-72 sm:h-52 lg:h-auto"
                  />
                  <div className="mt-2 md:text-2xl ">SO5E01</div>
                  <span className="mt-2 md:text-2xl">The Departed part 1</span>
                </div>
                <div className="ml-3  md:inline-block img sm:inline-block  p-3 imgbox ">
                  <img
                    src={photo}
                    width="350px"
                    height="400px"
                    className="sm:w-72 sm:h-52 lg:h-auto"
                  />
                  <div className="mt-2 md:text-2xl ">SO5E01</div>
                  <span className="mt-2 md:text-2xl">The Departed part 1</span>
                </div>
                <div className="ml-3  md:inline-block img sm:inline-block p-3 ">
                  <img
                    src={photo}
                    width="350px"
                    height="400px"
                    className="sm:w-72 sm:h-52 lg:h-auto"
                  />
                  <div className="mt-2 md:text-2xl ">SO5E01</div>
                  <span className="mt-2 md:text-2xl">The Departed part 1</span>
                </div>
                <div className="ml-3 md:inline-block img sm:inline-block  p-3 ">
                  <img
                    src={photo}
                    width="350px"
                    height="400px"
                    className="sm:w-72 sm:h-52 lg:h-auto"
                  />
                  <div className="mt-2 md:text-2xl ">SO5E01</div>
                  <span className="mt-2 md:text-2xl">The Departed part 1</span>
                </div>
              </div>
            )}
            {activeSeason == "season4" && (
              <div className=" lg:flex imgbox img text-cyan-200 lg:justify-center  lg:flex-nowrap md:flex-nowrap  ">
                <div className="ml-3  p-3 ">
                  <img
                    src={photo}
                    width="350px"
                    height="400px"
                    className="md:w-full sm:w-full lg:h-auto"
                  />
                  <div className="mt-2 md:text-2xl ">SO5E01</div>
                  <span className="mt-2 md:text-2xl">The Departed part 1</span>
                </div>
                <div className="ml-3 md:inline-block p-3  sm:inline-block">
                  <img
                    src={photo}
                    width="350px"
                    height="400px"
                    className="sm:w-72 sm:h-52 lg:h-auto"
                  />
                  <div className="mt-2 md:text-2xl ">SO5E01</div>
                  <span className="mt-2 md:text-2xl">The Departed part 1</span>
                </div>
                <div className="ml-3  md:inline-block sm:inline-block  p-3 imgbox ">
                  <img
                    src={photo}
                    width="350px"
                    height="400px"
                    className="sm:w-72 sm:h-52 lg:h-auto"
                  />
                  <div className="mt-2 md:text-2xl ">SO5E01</div>
                  <span className="mt-2 md:text-2xl">The Departed part 1</span>
                </div>
                <div className="ml-3  md:inline-block sm:inline-block p-3 ">
                  <img
                    src={photo}
                    width="350px"
                    height="400px"
                    className="sm:w-72 sm:h-52 lg:h-auto"
                  />
                  <div className="mt-2 md:text-2xl ">SO5E01</div>
                  <span className="mt-2 md:text-2xl">The Departed part 1</span>
                </div>
                <div className="ml-3 md:inline-block sm:inline-block  p-3 ">
                  <img
                    src={photo}
                    width="350px"
                    height="400px"
                    className="sm:w-72 sm:h-52 lg:h-auto"
                  />
                  <div className="mt-2 md:text-2xl ">SO5E01</div>
                  <span className="mt-2 md:text-2xl">The Departed part 1</span>
                </div>
              </div>
            )}
            {activeSeason == "season3" && (
              <div className=" lg:flex imgbox  text-cyan-200 lg:justify-center  lg:flex-nowrap md:flex-nowrap  ">
                <div className="ml-3  p-3 ">
                  <img
                    src={photo}
                    width="350px"
                    height="400px"
                    className="md:w-full sm:w-full lg:h-auto"
                  />
                  <div className="mt-2 md:text-2xl ">SO5E01</div>
                  <span className="mt-2 md:text-2xl">The Departed part 1</span>
                </div>
                <div className="ml-3 md:inline-block p-3  sm:inline-block">
                  <img
                    src={photo}
                    width="350px"
                    height="400px"
                    className="sm:w-72 sm:h-52 lg:h-auto"
                  />
                  <div className="mt-2 md:text-2xl ">SO5E01</div>
                  <span className="mt-2 md:text-2xl">The Departed part 1</span>
                </div>
                <div className="ml-3  md:inline-block sm:inline-block  p-3 imgbox ">
                  <img
                    src={photo}
                    width="350px"
                    height="400px"
                    className="sm:w-72 sm:h-52 lg:h-auto"
                  />
                  <div className="mt-2 md:text-2xl ">SO5E01</div>
                  <span className="mt-2 md:text-2xl">The Departed part 1</span>
                </div>
                <div className="ml-3  md:inline-block sm:inline-block p-3 ">
                  <img
                    src={photo}
                    width="350px"
                    height="400px"
                    className="sm:w-72 sm:h-52 lg:h-auto"
                  />
                  <div className="mt-2 md:text-2xl ">SO5E01</div>
                  <span className="mt-2 md:text-2xl">The Departed part 1</span>
                </div>
                <div className="ml-3 md:inline-block sm:inline-block  p-3 ">
                  <img
                    src={photo}
                    width="350px"
                    height="400px"
                    className="sm:w-72 sm:h-52 lg:h-auto"
                  />
                  <div className="mt-2 md:text-2xl ">SO5E01</div>
                  <span className="mt-2 md:text-2xl">The Departed part 1</span>
                </div>
              </div>
            )}
            {activeSeason == "season2" && (
              <div className=" lg:flex imgbox text-cyan-200 lg:justify-center  lg:flex-nowrap md:flex-nowrap  ">
                <div className="ml-3  p-3 ">
                  <img
                    src={photo}
                    width="350px"
                    height="400px"
                    className="md:w-full sm:w-full lg:h-auto"
                  />
                  <div className="mt-2 md:text-2xl ">SO5E01</div>
                  <span className="mt-2 md:text-2xl">The Departed part 1</span>
                </div>
                <div className="ml-3 md:inline-block p-3  sm:inline-block">
                  <img
                    src={photo}
                    width="350px"
                    height="400px"
                    className="sm:w-72 sm:h-52 lg:h-auto"
                  />
                  <div className="mt-2 md:text-2xl ">SO5E01</div>
                  <span className="mt-2 md:text-2xl">The Departed part 1</span>
                </div>
                <div className="ml-3  md:inline-block sm:inline-block  p-3 imgbox ">
                  <img
                    src={photo}
                    width="350px"
                    height="400px"
                    className="sm:w-72 sm:h-52 lg:h-auto"
                  />
                  <div className="mt-2 md:text-2xl ">SO5E01</div>
                  <span className="mt-2 md:text-2xl">The Departed part 1</span>
                </div>
                <div className="ml-3  md:inline-block sm:inline-block p-3 ">
                  <img
                    src={photo}
                    width="350px"
                    height="400px"
                    className="sm:w-72 sm:h-52 lg:h-auto"
                  />
                  <div className="mt-2 md:text-2xl ">SO5E01</div>
                  <span className="mt-2 md:text-2xl">The Departed part 1</span>
                </div>
                <div className="ml-3 md:inline-block sm:inline-block  p-3 ">
                  <img
                    src={photo}
                    width="350px"
                    height="400px"
                    className="sm:w-72 sm:h-52 lg:h-auto"
                  />
                  <div className="mt-2 md:text-2xl ">SO5E01</div>
                  <span className="mt-2 md:text-2xl">The Departed part 1</span>
                </div>
              </div>
            )}
            {activeSeason == "season1" && (
              <div className=" lg:flex imgbox text-cyan-200 lg:justify-center  lg:flex-nowrap md:flex-nowrap  ">
                <div className="ml-3  p-3 ">
                  <img
                    src={photo}
                    width="350px"
                    height="400px"
                    className="md:w-full sm:w-full lg:h-auto"
                  />
                  <div className="mt-2 md:text-2xl ">SO5E01</div>
                  <span className="mt-2 md:text-2xl">The Departed part 1</span>
                </div>
                <div className="ml-3 md:inline-block p-3  sm:inline-block">
                  <img
                    src={photo}
                    width="350px"
                    height="400px"
                    className="sm:w-72 sm:h-52 lg:h-auto"
                  />
                  <div className="mt-2 md:text-2xl ">SO5E01</div>
                  <span className="mt-2 md:text-2xl">The Departed part 1</span>
                </div>
                <div className="ml-3  md:inline-block sm:inline-block  p-3 imgbox ">
                  <img
                    src={photo}
                    width="350px"
                    height="400px"
                    className="sm:w-72 sm:h-52 lg:h-auto"
                  />
                  <div className="mt-2 md:text-2xl ">SO5E01</div>
                  <span className="mt-2 md:text-2xl">The Departed part 1</span>
                </div>
                <div className="ml-3  md:inline-block sm:inline-block p-3 ">
                  <img
                    src={photo}
                    width="350px"
                    height="400px"
                    className="sm:w-72 sm:h-52 lg:h-auto"
                  />
                  <div className="mt-2 md:text-2xl ">SO5E01</div>
                  <span className="mt-2 md:text-2xl">The Departed part 1</span>
                </div>
                <div className="ml-3 md:inline-block sm:inline-block  p-3 ">
                  <img
                    src={photo}
                    width="350px"
                    height="400px"
                    className="sm:w-72 sm:h-52 lg:h-auto"
                  />
                  <div className="mt-2 md:text-2xl ">SO5E01</div>
                  <span className="mt-2 md:text-2xl">The Departed part 1</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Viking;
