import Link from "next/link";
import React, { useEffect } from "react";
import { navLinks } from "../../lib/config";
import { Logo } from "./Logo";
import { useRef } from "react";

export const MobileMenu = ({ scrollDirection }) => {
  return (
    <div
      className={`fixed w-10/12 bg-noblack py-4 px-7 rounded-full bottom-10 left-0 right-0 top-auto mx-auto z-50 border-neonblue border-2 transition delay-700 ease-in ${
        scrollDirection === "DOWN" ? "translate-y-28" : "translate-y-0"
      } `}
    >
      <ul className="flex justify-between ">
        <li className="text-xl">
          <a href="#">
            <i class="fa-solid fa-house-blank"></i>
          </a>
        </li>
        <li className="text-xl active:text-neonblue">
          <a href="#about">
            <i class="fa-solid fa-user"></i>
          </a>
        </li>
        <li className="active text-xl">
          <a href="#roadmap">
            <i class="fa-solid fa-road"></i>
          </a>
        </li>
        <li className="active text-xl">
          <a href="#projects">
            <i class="fa-solid fa-suitcase"></i>
          </a>
        </li>
        <li className="active text-xl">
          <a href="#testimonials">
            <i class="fa-solid fa-star-sharp"></i>
          </a>
        </li>
        <li className="text-xl">
          <a href="#contact">
            <i class="fa-solid fa-comment"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};
