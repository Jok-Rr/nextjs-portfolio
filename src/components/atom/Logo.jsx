import Image from "next/image";
import React from "react";
import logo from "/public/vectors/logo-tb.svg";

export const Logo = ({ height = "auto", width, priority = false }) => {
  return (
    <Image
      src={logo}
      width={width}
      height={height}
      alt="logo-tb"
      priority={priority}
    ></Image>
  );
};
