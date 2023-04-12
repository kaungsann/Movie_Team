import React, { useEffect, useState } from "react";
import "./MovieCategory.css";
import TopfiveList from "./TopfiveList";
import request from "../../services/Constant";
import axios from "axios";
import { Rate } from "antd";
function MovieCategory() {
  const [year, setYear] = useState("2023");
  const [tops, setTop] = useState([]);

  useEffect(() => {
    axios
      .get(request.top5)
      .then((res) => {
        setTop(res.data);
      })
      .catch((err) => console.error(err));
  });
  return (
    <>
      <div className="bg-gray-900">
        <div className="md:container md:mx-auto grid grid-cols-6">
          <div className="col-span-2 text-white my-5 rounded-sm bg-gray-600 p-5">
            <h3 className="text-2xl font-medium border-b border-gray-500 h-12">
              Categories
            </h3>
            <div className="grid grid-cols-2">
              <div className="checkbox-container m-3">
                <input type="checkbox" name="Action" className="checkbox m-3" />
                <label htmlFor=""> Action</label>
              </div>
              <div className="checkbox-container m-3">
                <input
                  type="checkbox"
                  name="History"
                  className="checkbox m-3"
                />
                <label htmlFor="">History</label>
              </div>
              <div className="checkbox-container m-3">
                <input
                  type="checkbox"
                  name="Adventure"
                  className="checkbox m-3"
                />
                <label htmlFor="">Adventure</label>
              </div>
              <div className="checkbox-container m-3">
                <input type="checkbox" name="Horror" className="checkbox m-3" />
                <label htmlFor="">Horror</label>
              </div>
              <div className="checkbox-container m-3">
                <input
                  type="checkbox"
                  name="Animation"
                  className="checkbox m-3"
                />
                <label htmlFor="">Animation</label>
              </div>
              <div className="checkbox-container m-3">
                <input type="checkbox" name="Music" className="checkbox m-3" />
                <label htmlFor="">Music</label>
              </div>
              <div className="checkbox-container m-3">
                <input type="checkbox" name="Comedy" className="checkbox m-3" />
                <label htmlFor="">Comedy</label>
              </div>
              <div className="checkbox-container m-3">
                <input type="checkbox" name="Crime" className="checkbox m-3" />
                <label htmlFor="">Crime</label>
              </div>
            </div>
            <div className="year grid grid-cols-5">
              <span className="bg-gray-700 text-cyan-300 p-4 m-1 text-center text-base">
                {year}
              </span>
              <span className="bg-gray-700 text-cyan-300 p-4 m-1 text-center text-base">
                {year}
              </span>
              <span className="bg-gray-700 text-cyan-300 p-4 m-1 text-center text-base">
                {year}
              </span>
              <span className="bg-gray-700 text-cyan-300 p-4 m-1 text-center text-base">
                {year}
              </span>
            </div>
            <div>
              <h3 className="text-2xl font-medium border-b border-gray-500 h-12 mt-5">
                Movies By Year
              </h3>
              <div className="year grid grid-cols-5">
                <span className="bg-gray-700 text-cyan-300 p-2 m-2 text-center text-base">
                  {year}
                </span>
                <span className="bg-gray-700 text-cyan-300 p-2 m-2 text-center text-base">
                  {year}
                </span>
                <span className="bg-gray-700 text-cyan-300 p-2 m-2 text-center text-base">
                  {year}
                </span>
                <span className="bg-gray-700 text-cyan-300 p-2 m-2 text-center text-base">
                  {year}
                </span>
                <span className="bg-gray-700 text-cyan-300 p-2 m-2 text-center text-base">
                  {year}
                </span>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-medium border-b border-gray-500 h-12 mt-5">
                Filter By Rating
              </h3>
              <div className="mt-3">
                <Rate defaultValue={10} count={10} style={{ color: "cyan" }} /> <span className="ml-10 text-start">(2)</span>
                <Rate defaultValue={9} count={10} style={{color:"cyan"}} /> <span className="ml-10 text-start">(10)</span>
                <Rate defaultValue={8} count={10} style={{color:"cyan"}} /> <span className="ml-10 text-start">(27)</span>
                <Rate defaultValue={7} count={10} style={{color:"cyan"}} /> <span className="ml-10 text-start">(13)</span>
                <Rate defaultValue={6} count={10} style={{color:"cyan"}} /> <span className="ml-10 text-start">(1)</span>
                
              </div>
            </div>
          </div>
        </div>
        <div className="md:container md:mx-auto grid grid-cols-6">
          <div className="col-span-2 text-white my-5 rounded-sm bg-gray-600 p-5">
            <h3 className="text-2xl font-medium border-b border-gray-500 h-12">
              Top 5 Lists
            </h3>
            <span>
              {tops.slice(0, 5).map((top) => {
                return <TopfiveList list={top.id} />;
              })}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieCategory;
