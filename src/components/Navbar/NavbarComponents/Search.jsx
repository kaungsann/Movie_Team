import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { fetchWithAxios } from "../../../services/apiservices.js";
import { Search_Movie_API } from "../../../services/Constant.js";

const Search = () => {
  const [input, setInput] = useState("");
  const searchMovie = (e) => {
    e.preventDefault();
    if (input !== "") {
      // console.log(input);
      fetchWithAxios(Search_Movie_API(input))
        .then((res) => {
          if (res?.data?.results?.length !== 0) {
            // console.log(res.data.results[0]);
            setInput("");
            window.location.assign(`movie-detail/${res?.data?.results[0]?.id}`);
          } else if (res?.data?.results?.length === 0) {
            alert("Sorry can't find movie that you enter :" + input);
            setInput("");
          }
        })
        .catch((err) => {
          console.log(err);
          setInput("");
        });
    } else {
      alert("please enter search keywords");
    }
  };
  return (
    <form
      onSubmit={searchMovie}
      className="md:w-[300px] w-[250px] px-4 mx-auto"
    >
      <div className="relative">
        <input
          type="text"
          placeholder="Search ..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full py-2 px-4 md:px-6 pr-20 text-gray-500 border rounded-full outline-none focus:border-blue-400 duration-200 transition-all"
        />
        {input !== "" && (
          <RxCross1
            className="absolute right-14  bottom-[28%]"
            onClick={() => setInput("")}
          />
        )}
        <button className="absolute right-4  bottom-[22%]">
          <CiSearch size={25} />
        </button>
      </div>
    </form>
  );
};

export default Search;
