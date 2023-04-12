import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import Autoplay from "embla-carousel-autoplay";

import { useMantineTheme } from "@mantine/core";
import { useRef } from "react";

import { createStyles, Paper, Text, Title, Button, useMantineTheme, rem } from "@mantine/core";
import { useEffect, useRef } from "react";

function IndicatorGrid() {
  return (
    <div class="mantine-19swgkw mantine-Carousel-indicators">
      <button
        class="mantine-UnstyledButton-root mantine-Carousel-indicator mantine-1jkjqkp"
        type="button"
        aria-hidden="true"
        tabindex="-1"
        data-active="true"></button>
      <button
        class="mantine-UnstyledButton-root mantine-Carousel-indicator mantine-1jkjqkp"
        type="button"
        aria-hidden="true"
        tabindex="-1"></button>
      <button
        class="mantine-UnstyledButton-root mantine-Carousel-indicator mantine-1jkjqkp"
        type="button"
        aria-hidden="true"
        tabindex="-1"></button>
      <button
        class="mantine-UnstyledButton-root mantine-Carousel-indicator mantine-1jkjqkp"
        type="button"
        aria-hidden="true"
        tabindex="-1"></button>
      <button
        class="mantine-UnstyledButton-root mantine-Carousel-indicator mantine-1jkjqkp"
        type="button"
        aria-hidden="true"
        tabindex="-1"></button>
      <button
        class="mantine-UnstyledButton-root mantine-Carousel-indicator mantine-1jkjqkp"
        type="button"
        aria-hidden="true"
        tabindex="-1"></button>
    </div>
  );
}


function Card({ image, title, category }) {
  return (
    <div
      className="w-full min-h-[70vh] lg:min-h-[90vh]"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className="absolute lg:top-[35%] md:top-[20%] top-[10%] px-5  lg:pl-20 2xl:pl-40 text-white space-y-5 w-full z-10 text-center lg:text-left">
        <p className="  font-bold md:text-6xl text-3xl cursor-pointer w-full lg:w-[40%] ">
          {title}
        </p>
        <div className="divide-x-[1px] items-center divide-gray-300 flex font-light text-sm text-gray-300 justify-center lg:justify-start">
          <p className="md:pr-3 md:px-0 px-3 ">2017</p>
          <p className="px-3">Comedy</p>
          <p className="px-3">1hr 55mins</p>
        </div>
        <div className="md:space-x-5 flex flex-col md:flex-row space-y-5 md:space-y-0 md:justify-center lg:justify-start">
          <button
            onClick={() => {
              window.location.assign("/movie-detail/1");
            }}
            className="uppercase py-3 md:py-5 px-10  text-lg bg-cyan-500 rounded-lg border border-cyan-500 hover:border-cyan-600 hover:bg-cyan-600 transition-all duration-300">
            Watch Now
          </button>

          <button className="uppercase hover:bg-white hover:text-black py-3 md:py-5 px-10  text-lg  rounded-lg border border-white transition-all duration-300">

            + Playlist
          </button>
        </div>
      </div>
      <div className="absolute w-full h-full md:bg-gradient-to-tr bg-gradient-to-b from-black/70 via-black/50 to-transparent top-0 z-[5]"></div>
    </div>
  );
}

const data = [
  {
    image:
      "https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Best forests to visit in North America",
    category: "nature",
  },
  {
    image:
      "https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title: "Hawaii beaches review: better than you think",
    category: "beach",
  },
  {
    image:
      "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title: "Mountains at night: 12 best locations to enjoy the view",
    category: "nature",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title: "Aurora in Norway: when to visit for best experience",
    category: "nature",
  },
  {
    image:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title: "Best places to visit this winter",
    category: "tourism",
  },
  {
    image:
      "https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    title: "Active volcanos reviews: travel at your own risk",
    category: "nature",
  },
];

function Hero() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));
  const autoplay = useRef(Autoplay({ delay: 5000 }));
  return (
    <div className=" relative z-0">
      <Carousel
        slideSize="100%"
        breakpoints={[{ maxWidth: "100vw", slideSize: "100%", slideGap: 2 }]}
        slideGap="sm"
        align="start"
        withIndicators
        withControls={false}
        plugins={[autoplay.current]}
        slidesToScroll={mobile ? 1 : 1}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.play}>
        {slides}
      </Carousel>
      <div className="absolute right-0 top-[20%] pr-10 2xl:pr-40 text-white hidden lg:block font-light">
        <p className="text-3xl">Today's Recommendations</p>
        <div className="grid grid-cols-3 gap-3 mt-4">
          {data.map((el) => (
            <img
              key={el.id}
              src={el.image}
              width="214px"
              height="133px"
              className="object-cover w-[214px] h-[133px]"
            />
          ))}
        </div>
      </div>
      <div className="absolute left-[10%] right-[10%] top-[65%]  text-white hidden md:block lg:hidden font-light">
        <p className="text-3xl">Today's Recommendations</p>
        <div className="grid grid-cols-3 gap-3 mt-4">
          {data.slice(0, 3).map((el) => (
            <img
              key={el.id}
              src={el.image}
              width="214px"
              height="133px"
              className="object-cover w-[214px] h-[133px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
