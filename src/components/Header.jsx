import { useEffect, useState } from "react";
import { Logo } from "./atom/Logo";
import { MobileMenu } from "./atom/MobileMenu";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [scrolling, setScrolling] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolling(window.pageYOffset);
    });
  }, [scrolling]);

  const handleClickMenu = () => {
    return setIsOpenMenu(!isOpenMenu);
  };

  return (
    <>
      <div
        className={` flex w-full justify-between items-center px-8 py-5 fixed z-10 ${
          scrolling > 10 && "backdrop-blur"
        }`}
      >
        <Logo width="47" />
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
