import React from "react";

const BoldHeading = ({ children, customClass }) => {
  return (
    <h1 className={`font-medium text-md ${customClass && customClass}`}>
      {children}
    </h1>
  );
};

export default BoldHeading;
