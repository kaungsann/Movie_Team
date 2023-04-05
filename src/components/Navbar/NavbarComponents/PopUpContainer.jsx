import React from "react";

const PopUpContainer = ({ children }) => {
  return (
    <div className=" w-full group-hover:top-[76px] bg-slate-100 absolute left-0 top-[100px] hover:top-[76px] hover:opacity-100 duration-300 transition-all opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 cursor-auto  py-10 z-0 group-hover:z-10 hover:z-10 ">
      {children}
    </div>
  );
};

export default PopUpContainer;
