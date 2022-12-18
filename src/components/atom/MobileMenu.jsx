import Link from "next/link";
import React, { useEffect } from "react";
import { navLinks } from "../../lib/config";
import { Logo } from "./Logo";

export const MobileMenu = ({ isOpenMenu, handleClickMenu, setIsOpenMenu }) => {
  useEffect(() => {
    if (isOpenMenu) {
      document.body.classList.add("overflow-hidden");
      return;
    }
    document.body.classList.remove("overflow-hidden");
  }, [isOpenMenu]);
  return (
    <div
      className={`fixed w-full h-screen top-0 left-0 bg-noblack m-auto pt-16 pb-16 flex flex-col items-center justify-between z-50
      ${isOpenMenu ? "" : "hidden"} `}
    >
      <Logo width="105" />

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
        <Link
          href="#contact"
          className="bg-neonblue rounded-xl text-xl font-bold py-2.5 px-8"
          onClick={() => setIsOpenMenu(!isOpenMenu)}
        >
          Me contacter
        </Link>
      </nav>

      <i
        className="fa-solid fa-xmark text-neonblue text-5xl hover:scale-110"
        onClick={handleClickMenu}
      ></i>
    </div>
  );
};
