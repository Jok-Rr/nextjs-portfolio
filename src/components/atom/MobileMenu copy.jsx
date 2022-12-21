import Link from "next/link";
import React, { useEffect } from "react";
import { navLinks } from "../../lib/config";
import { Logo } from "./Logo";

export const MobileMenu = ({ isOpenMenu, handleClickMenu, setIsOpenMenu }) => {
  useEffect(() => {
    if (isOpenMenu) {
      document.documentElement.classList.add("overflow-hidden");
      return;
    }
    document.documentElement.classList.remove("overflow-hidden");
  }, [isOpenMenu]);

  return (
    <div
      className={`fixed top-0 left-0 z-20 m-auto h-screen w-full translate-x-full bg-noblack px-8 py-5 transition duration-500 ease-in-out
      ${isOpenMenu ? "translate-x-0" : ""} `}
    >
      <div className="flex w-full justify-end">
        <i
          className="fa-solid fa-xmark text-5xl text-neonblue hover:scale-110"
          onClick={handleClickMenu}
        ></i>
      </div>
      <nav className="flex flex-col items-center justify-between gap-12 text-center capitalize">
        <Logo width="105" />
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
          className="rounded-xl bg-neonblue py-2.5 px-8 text-xl font-bold"
          onClick={() => setIsOpenMenu(!isOpenMenu)}
        >
          Me contacter
        </Link>
      </nav>
    </div>
  );
};
