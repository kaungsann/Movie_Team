import React from "react";

const MovieSliderItem = ({ title }) => {
  return (
    <div className="flex flex-col   justify-center cursor-pointer items-start">
      <a className="lg:xl:2xl:md:w-[230px] w-[100px] h-[55px] lg:xl:2xl:md:h-[130px] bg-gray-500">
        <img />
      </a>
      <span>So2Eo3</span>
      <div>{title}</div>
    </div>
  );
};

export default MovieSliderItem;
