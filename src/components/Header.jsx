"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Logo } from "./atom/Logo";
import { MobileMenu } from "./atom/MobileMenu";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleClickMenu = () => {
    return setIsOpenMenu(!isOpenMenu);
  };

  return (
    <>
      <div className=" flex w-full justify-between items-center px-8 py-5 fixed">
        <Logo width="47" height="57" />
        <i
          className="fa-solid fa-bars text-neonblue text-3xl"
          onClick={handleClickMenu}
        ></i>
      </div>
      <MobileMenu
        isOpenMenu={isOpenMenu}
        setIsOpenMenu={setIsOpenMenu}
        handleClickMenu={handleClickMenu}
      />
    </>
  );
};

export default Header;
