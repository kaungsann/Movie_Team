import React from "react";
import { BsChevronDown } from "react-icons/bs";
import PopUpContainer from "./PopUpContainer";
import BoldHeading from "../../Reusables/BoldHeading";
import { Carousel } from "@mantine/carousel";
import { rem } from "@mantine/core";
import NavMovieCard from "../../Reusables/NavMovieCard";

const TvShowsDropdown = () => {
  return (
    <PopUpContainer>
      <div className="flex divide-x-[1px] divide-black/10">
        <div className="w-[20%] px-10">
          {[...Array(9)].map((item) => (
            <BoldHeading customClass=" hover:text-cyan-500 cursor-pointer mb-2">
              Tv Show Genres
            </BoldHeading>
          ))}
        </div>
        <div className="w-[80%] px-10">
          <BoldHeading>Picked for you: Madras Themes</BoldHeading>
          <div className="mt-5">
            <Carousel
              mx="auto"
              withIndicators
              withControls={false}
              slideSize="20%"
              slidesToScroll={5}
              slideGap={10}
              height={200}
              styles={{
                indicator: {
                  width: rem(12),
                  height: rem(4),
                  transition: "width 250ms ease",
                  "&[data-active]": {
                    width: rem(40),
                  },
                },
              }}>
              {[...Array(10)].map((item) => (
                <Carousel.Slide>
                  <NavMovieCard />
                </Carousel.Slide>
              ))}

              {/* ...other slides */}
            </Carousel>
          </div>
        </div>
      </div>
    </PopUpContainer>
  );
};

const TvShows = () => {
  return (
    <div className="cursor-pointer flex items-center gap-2 py-3 md:py-5 group">
      <p>TV Shows</p>
      <BsChevronDown size={10} className="mt-1" />
      <TvShowsDropdown />
    </div>
  );
};

export default TvShows;
