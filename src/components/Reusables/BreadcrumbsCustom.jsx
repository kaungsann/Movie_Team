import { Breadcrumbs } from "@mantine/core";
import React from "react";

const BreadcrumbsCustom = ({ items }) => {
  return (
    <Breadcrumbs separator=">">
      {items.map((item, index) => (
        <a
          href={item.href}
          key={index}
          className={`text-gray-500 text-sm ${
            item.active && "text-white pointer-events-none"
          }`}>
          {item.title}
        </a>
      ))}
    </Breadcrumbs>
  );
};

export default BreadcrumbsCustom;
