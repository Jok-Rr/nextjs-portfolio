import Image from "next/image";
import React from "react";
import gitIcon from "/public/vectors/square-github.svg";

export const IconGithub = ({ style }) => {
  return (
    <Image
      src={gitIcon}
      width="38"
      height={38}
      alt="qfds"
      className={`inline ${style}`}
    />
  );
};
