import { Tabs } from "@mantine/core";
import React from "react";
import TabChanger from "./TabChanger";
import MoviesContainer from "./MoviesContainer";
import Pagination from "./Pagination";

const RightSide = () => {
  return (
    <div className="lg:w-[75%] ml-auto">
      <h1 className="text-3xl">Action</h1>
      <MoviesContainer />
      <Pagination />
    </div>
  );
};

export default RightSide;
