import Image from "next/image";
import React from "react";
import linkedinIcon from "/public/vectors/linkedin.svg";

export const IconLinkedin = ({ style }) => {
  return (
    <Image
      src={linkedinIcon}
      width="38"
      height={38}
      alt="qfds"
      className={`inline ${style}`}
    />
  );
};
