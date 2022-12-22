import React, { useEffect } from "react";

export const MobileMenu = ({ scrollDirection }) => {
  return (
    <div
      className={`fixed bottom-3 left-0 right-0 top-auto z-50 mx-auto w-10/12 rounded-full border-2 border-neonblue bg-noblack py-4 px-7 transition delay-200 ease-in lg:hidden ${
        scrollDirection === "DOWN" ? "translate-y-28" : "translate-y-0"
      } `}
    >
      <ul className="flex justify-between ">
        <li className="text-xl">
          <a href="#">
            <i className="fa-solid fa-house-blank"></i>
          </a>
        </li>
        <li className="text-xl active:text-neonblue">
          <a href="#about">
            <i className="fa-solid fa-user"></i>
          </a>
        </li>
        <li className="active text-xl">
          <a href="#roadmap">
            <i className="fa-solid fa-road"></i>
          </a>
        </li>
        <li className="active text-xl">
          <a href="#projects">
            <i className="fa-solid fa-suitcase"></i>
          </a>
        </li>
        <li className="active text-xl">
          <a href="#testimonials">
            <i className="fa-solid fa-star-sharp"></i>
          </a>
        </li>
        <li className="text-xl">
          <a href="#contact">
            <i className="fa-solid fa-comment"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};
