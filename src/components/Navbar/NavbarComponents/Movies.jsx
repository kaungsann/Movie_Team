import React from "react";
import { BsChevronDown } from "react-icons/bs";
import PopUpContainer from "./PopUpContainer";
import BoldHeading from "../../Reusables/BoldHeading";
import { Carousel } from "@mantine/carousel";
import { rem } from "@mantine/core";
const MoviesDropdown = () => {
  const dummySlides = [
    {
      id: "d1",
      img: "https://images.unsplash.com/photo-1618042164219-62c820f10723?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      title: "dummy1",
    },
    {
      id: "d2",
      img: "https://images.unsplash.com/photo-1680440783473-533aa861e6f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      title: "dummy2",
    },
    {
      id: "d3",
      img: "https://images.unsplash.com/photo-1610890243723-5832fff1af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
      title: "dummy3",
    },
    {
      id: "d4",
      img: "https://images.unsplash.com/photo-1619719462827-90acc2a4194e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1634&q=80",
      title: "dummy4",
    },
  ];
  return (
    <PopUpContainer>
      <div className="flex divide-x-[1px] divide-black/10">
        <div className="w-[33%] px-10">
          <BoldHeading>Movie of the Day</BoldHeading>
          <div className="flex mt-5  gap-8">
            <img
              src="https://lumiere-a.akamaihd.net/v1/images/image_e460281e.jpeg?region=0,0,540,810&width=480"
              alt=""
              width={125}
              height={188}
              className="object-cover"
            />
            <div>
              <p className=" text-gray-500 text-xs mb-1">
                2017 Comedy,Adventure...
              </p>
              <BoldHeading>Avatar</BoldHeading>
              <p className="text-sm my-3">
                Pakistan-born comedian Kumail Nanjiani and grad student Emily
                Gardner fall in love but struggle as their cultures clash. When
                Emily contracts a mysterious
              </p>
              <div className="">
                <button className="font-medium text-cyan-400 mr-3">
                  Watch Now
                </button>
                <span className=" rotate-[30deg] absolute text-gray-300">
                  |
                </span>
                <button className="font-medium text-gray-400 ml-3">
                  + Playlist
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[33%] px-10">
          <BoldHeading>Movies Genre</BoldHeading>
          <div className="mt-5 grid grid-cols-2 justify-items-start gap-y-2">
            {[...Array(20)].map((item) => (
              <button className=" hover:text-cyan-500">Genre</button>
            ))}
          </div>
        </div>
        <div className="w-[33%] px-10">
          <BoldHeading>Movie Trailer</BoldHeading>
          <div className="mt-20">
            <Carousel
              maw={320}
              mx="auto"
              height={250}
              styles={{
                control: {
                  "&[data-inactive]": {
                    opacity: 0,
                    cursor: "default",
                  },
                  color: "white",
                  background: "white",
                },
              }}>
              {dummySlides.map((el) => (
                <Carousel.Slide>
                  <div className="relative w-full h-full">
                    <img
                      src={el.img}
                      className="w-full h-full absolute top-0 z-0 left-0"
                      alt=""
                    />
                    <p className="absolute bottom-8 left-5 z-10 text-white font-bold">
                      {el.title}
                    </p>
                    <div className="bg-gradient-to-t from-black/70 w-full h-full absolute bottom-0"></div>
                  </div>
                </Carousel.Slide>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </PopUpContainer>
  );
};

const Movies = () => {
  return (
    <>
      <div className="cursor-pointer flex items-center gap-2 py-3 md:py-5 group">
        <p>Movies</p>
        <BsChevronDown size={10} className="mt-1" />
        <MoviesDropdown />
      </div>
    </>
  );
};

export default Movies;
