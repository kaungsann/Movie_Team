import React from "react";

const SuggestMovieCard = () => {
  return (
    <div className="flex flex-col mb-[1rem] h-[340px] w-[220px] gap-2 lg:h-[266px] md:h-[330px] lg:w-[164px] md:w-[220px] ">
      <div className="lg:h-[266px] h-[340px] w-[220px] lg:w-[164px] md:h-[330px] md:w-[220px] rounded-sm bg-green-800">
        <a>
          <img className="" />
        </a>
      </div>
      <div className="flex gap-3  ">
        <p>2010</p>
        <p>gender</p>
      </div>
      <div className="">detail infromation</div>
    </div>
  );
};

export default SuggestMovieCard;
