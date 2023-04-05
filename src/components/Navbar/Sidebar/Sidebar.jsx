import { Drawer } from "@mantine/core";
import React from "react";
import SideBarItem from "./SideBarItem";

const Sidebar = ({ opened, close }) => {
  const sideBarItems = [
    {
      id: "sideItem1",
      name: "Home",
      children: ["Home v1", "Home v2", "Home v3", "Home v5"],
    },
    {
      id: "sideItem2",
      name: "Movies",
      children: [
        "Actions",
        "Adventure",
        "Comedy",
        "Drama",
        "Family",
        "Romance",
      ],
    },
    {
      id: "sideItem3",
      name: "TV Shows",
      children: [
        "Drama",
        "Comedy",
        "Action",
        "Crime",
        "Romance",
        "Adventure",
        "Sci-Fi",
      ],
    },
    {
      id: "sideItem4",
      name: "Videos",
      children: [
        "Games",
        "Football",
        "Adventure",
        "Cricket",
        "Tennis",
        "Action",
      ],
    },
  ];

  return (
    <>
      <div className="hidden md:block">
        <Drawer
          opened={opened}
          overlayProps={{ opacity: 0.5 }}
          position="left"
          withCloseButton={false}
          size="250px"
          onClose={close}
          padding={0}>
          {sideBarItems.map((item) => (
            <SideBarItem key={item.id} item={item} close={close} />
          ))}
        </Drawer>
      </div>
    </>
  );
};

export default Sidebar;
