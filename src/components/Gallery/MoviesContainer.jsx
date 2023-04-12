import React, { useState } from "react";
import TabChanger from "./TabChanger";
import MovieCard from "../Reusables/MovieCard";
import { AiOutlineMenu } from "react-icons/ai";
import { Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import MovieCategory from "../MovieCategory/MovieCategory";
const MoviesContainer = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [displayStyle, setDisplayStyle] = useState("display0");
  const notDisplay1or2 =
    displayStyle !== "display0" && displayStyle !== "display1";
  // console.log(displayStyle);
  return (
    <div className=" border-y-[1px] border-white/10 my-5 py-3">
      <div className="flex justify-between lg:justify-end">
        <button
          className="lg:hidden uppercase flex items-center gap-2"
          onClick={open}>
          <AiOutlineMenu />
          Filters
        </button>
        <TabChanger setDisplayStyle={setDisplayStyle} />
      </div>
      <div className={`${notDisplay1or2 && "hidden"}`}>
        <div
          className={`grid ${
            displayStyle == "display0"
              ? "lg:grid-cols-6 md:grid-cols-4 grid-cols-3 md:justify-items-center"
              : "grid-cols-5 md:justify-items-center"
          } gap-3  my-5`}>
          {[...Array(24)].map((el) => (
            <MovieCard
              displayStyle={displayStyle}
              notDisplay1or2={notDisplay1or2}
            />
          ))}
        </div>
      </div>
      <div className={`${!notDisplay1or2 && "hidden"}`}>
        <div
          className={`  my-5 ${
            displayStyle == "display4"
              ? "grid grid-cols-2 gap-5 "
              : "divide-y-[1px] divide-white/10"
          }`}>
          {[...Array(24)].map((el) => (
            <MovieCard
              displayStyle={displayStyle}
              notDisplay1or2={notDisplay1or2}
            />
          ))}
        </div>
      </div>
      <Drawer
        opened={opened}
        overlayProps={{ opacity: 0.5 }}
        position="left"
        withCloseButton={false}
        size="300px"
        onClose={close}
        padding={0}>
        <MovieCategory />
      </Drawer>
    </div>
  );
};

export default MoviesContainer;
