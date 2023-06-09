import React, { useState } from "react";
import BreadcrumbsCustom from "../Reusables/BreadcrumbsCustom";
import RightSide from "./RightSide";
import MovieCategory from "../MovieCategory/MovieCategory";
import Loading from "../../pages/Loading";

const Gallery = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 3000);

  const items = [
    { title: "Home", href: "#" },
    { title: "Action", href: "#", active: true },
  ];
  return loading ? (
    <Loading />
  ) : (
    <section className="md:px-10 px-3 2xl:px-40 py-8 relative z-[5]  w-full bg-[#131722] text-white">
      <BreadcrumbsCustom items={items} />
      <div className="my-10 lg:flex lg:gap-10">
        <div className="hidden lg:block  lg:w-[23%]">
          <MovieCategory />
        </div>
        <RightSide />
      </div>
    </section>
  );
};

export default Gallery;
