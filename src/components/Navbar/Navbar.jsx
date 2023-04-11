import React from "react";
import { BiMenu } from "react-icons/bi";
import Browse from "./NavbarComponents/Browse";
import Home from "./NavbarComponents/Home";
import Movies from "./NavbarComponents/Movies";
import TvShows from "./NavbarComponents/TvShows";
import Search from "./NavbarComponents/Search";
import Upload from "./NavbarComponents/Upload";
import User from "./NavbarComponents/User";
import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button, Group } from "@mantine/core";
import Sidebar from "./Sidebar/Sidebar";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <nav className=" px-2 md:px-10 2xl:px-40  font-light border-b bg-white shadow-lg">
        <ul className="flex justify-between ">
          <li className="flex items-center">
            <BiMenu onClick={open} size={25} color="gray" className="cursor-pointer" />
            <h1
              onClick={() => {
                window.location.assign("/");
              }}
              className="text-3xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-blue-800 via-blue-500 to-cyan-400 cursor-pointer py-3 md:py-5 ml-5">
              YTD
            </h1>
            <div className=" gap-8  hidden lg:flex h-full ml-20">
              <Browse />
              <Home />
              <Movies />
              <TvShows />
              <button
                onClick={() => {
                  window.location.assign("/contact");
                }}>
                Contact
              </button>
            </div>
          </li>
          <li className="flex items-center md:gap-8 gap-1">
            <Search />
            <Upload />
            <User />
          </li>
        </ul>
      </nav>
      <Sidebar opened={opened} close={close} />
    </>
  );
};

export default Navbar;
