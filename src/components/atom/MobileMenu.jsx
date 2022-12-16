import Link from "next/link";
import React from "react";
import { navLinks } from "../../lib/config";
import { Button } from "./Button";
import { Logo } from "./Logo";

export const MobileMenu = ({ isOpenMenu, handleClickMenu, setIsOpenMenu }) => {
  return (
    <div
      className={`absolute w-full h-full top-0 left-0 bg-noblack m-auto pt-16 pb-16 flex flex-col items-center justify-between 
      ${isOpenMenu ? "" : "hidden"} `}
    >
      <Logo width="103.75" height="86" />

      <nav className="gap-12 flex flex-col text-center capitalize">
        {navLinks.map(({ id, path, navText }) => {
          return (
            <Link
              key={id}
              href={path}
              className="text-xl"
              onClick={() => setIsOpenMenu(!isOpenMenu)}
            >
              {navText}
            </Link>
          );
        })}
        <Button size="default" onClick={() => setIsOpenMenu(!isOpenMenu)}>
          Me Contacter
        </Button>
      </nav>

      <i
        className="fa-solid fa-xmark text-neonblue text-5xl"
        onClick={handleClickMenu}
      ></i>
    </div>
  );
};
