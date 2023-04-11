import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

const Triangle = () => {
  return (
    <div className="border rotate-45 w-4 h-4 absolute bg-white top-[-8px] right-5 border-r-0 border-b-0 z-0"></div>
  );
};

const UserDropdown = () => {
  return (
    <div className="md:group-hover:block hidden hover:block absolute top-[80px]  bg-white w-[160px] md:right-10 2xl:right-40 right-1 rounded-b-md py-2 z-10 ">
      <Triangle />
      <p
        onClick={() => {
          window.location.assign("signin");
        }}
        className="cursor-pointer px-6 py-2 font-light text-sm hover:bg-stone-200 relative z-10">
        Sign In{" "}
      </p>
      <p
        onClick={() => {
          window.location.assign("register");
        }}
        className="cursor-pointer px-6 py-2 font-light text-sm hover:bg-stone-200 relative z-10">
        Register
      </p>
    </div>
  );
};

const MobileDropdown = ({ toggleUserMobileDropdown, setToggleUserMobileDropdown }) => {
  return (
    <div
      className={`absolute md:top-[85px] top-[65px] bg-white w-[160px] md:right-10 right-1 rounded-b-md py-2 z-10 ${
        toggleUserMobileDropdown ? "block" : "hidden"
      }`}>
      <Triangle />
      <p
        className="cursor-pointer px-6 py-2 font-light text-sm hover:bg-stone-200 relative z-10"
        onClick={() => {
          setToggleUserMobileDropdown((prev) => !prev);
        }}>
        Sign In{" "}
      </p>
      <p
        className="cursor-pointer px-6 py-2 font-light text-sm hover:bg-stone-200 relative z-10"
        onClick={() => {
          setToggleUserMobileDropdown((prev) => !prev);
        }}>
        Register
      </p>
    </div>
  );
};

const User = () => {
  const [toggleUserMobileDropdown, setToggleUserMobileDropdown] = useState(false);
  return (
    <>
      <div
        className="flex items-center gap-1 cursor-pointer group py-3 md:py-5 "
        onClick={() => {
          setToggleUserMobileDropdown((prev) => !prev);
        }}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2102/2102647.png"
          width={32}
          height={32}
          alt=""
        />
        <BsChevronDown size={10} className="hidden md:block" />
        <div className="hidden lg:block">
          <UserDropdown />
        </div>
        <div className="lg:hidden">
          <MobileDropdown
            toggleUserMobileDropdown={toggleUserMobileDropdown}
            setToggleUserMobileDropdown={setToggleUserMobileDropdown}
          />
        </div>
      </div>
    </>
  );
};

export default User;
