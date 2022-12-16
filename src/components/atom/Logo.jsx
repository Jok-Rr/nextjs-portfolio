import Image from "next/image";
import React from "react";
import logo from "/public/logo-tb.svg";

export const Logo = ({ height, width, priority = false }) => {
  return (
    <Image
      src={logo}
      width={width}
      height={height}
      alt="logo-tb"
      priority="priority"
    ></Image>
  );
};
