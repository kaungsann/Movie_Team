import React from "react";
import BreadcrumbsCustom from "../Reusables/BreadcrumbsCustom";
import RightSide from "./RightSide";

const Gallery = () => {
  const items = [
    { title: "Home", href: "#" },
    { title: "Action", href: "#", active: true },
  ];
  return (
    <section className="md:px-10 px-3 2xl:px-40 py-8 relative z-[5]  w-full bg-[#131722] text-white">
      <BreadcrumbsCustom items={items} />
      <div className="my-3">
        <RightSide />
      </div>
    </section>
  );
};

export default Gallery;
