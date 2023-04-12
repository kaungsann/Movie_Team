import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineMenuUnfold } from "react-icons/ai";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { TbGridDots } from "react-icons/tb";
import { BsListUl } from "react-icons/bs";
const TabChanger = ({ setDisplayStyle }) => {
  const tabItems = [
    <TfiLayoutGrid4Alt size={20} />,
    <TbGridDots size={20} />,
    <BsListUl size={20} />,
    <AiOutlineMenuUnfold size={20} />,
    <AiOutlineMenu size={20} />,
  ];
  const [selectedItem, setSelectedItem] = useState(0);
  return (
    <div className="hidden lg:block">
      <ul
        role="tablist"
        className=" mx-auto flex items-center gap-x-5 overflow-x-auto text-sm justify-end">
        {tabItems.map((item, idx) => (
          <li
            key={idx}
            className={`py-2  ${
              selectedItem == idx ? " text-cyan-500" : " text-gray-400"
            }`}>
            <button
              role="tab"
              aria-selected={selectedItem == idx ? true : false}
              aria-controls={`tabpanel-${idx + 1}`}
              className={`p-1.5  rounded-lg duration-150 hover:bg-cyan-500 hover:text-gray-900   font-medium ${
                selectedItem == idx ? " bg-cyan-500 text-gray-900" : " "
              }`}
              onClick={() => {
                setSelectedItem(idx);
                setDisplayStyle("display" + idx);
              }}>
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabChanger;
