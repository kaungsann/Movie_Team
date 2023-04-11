import React, { useState } from "react";
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
const SideBarItem = ({ item, close }) => {
  const [openSideBarChild, setOpenSideBarChild] = useState(false);
  return (
    <>
      <div
        className={`flex items-center justify-between cursor-pointer px-6 py-3 font-light text-sm hover:bg-stone-200 ${
          openSideBarChild && "bg-stone-200"
        }`}
        onClick={() => setOpenSideBarChild((prev) => !prev)}>
        <p className="">{item.name}</p>
        {openSideBarChild ? <BiMinus /> : <IoMdAdd size={15} />}
      </div>
      <div className={` ${openSideBarChild ? "block" : "hidden"}`}>
        {item.children.map((el, index) => (
          <div
            onClick={close}
            key={"sideItemChild" + index}
            className="cursor-pointer px-10 py-2 font-light hover:bg-stone-200 text-sm">
            {el}
          </div>
        ))}
      </div>
    </>
  );
};

export default SideBarItem;
