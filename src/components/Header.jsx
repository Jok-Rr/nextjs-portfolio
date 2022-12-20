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
        className={`absolute flex w-full justify-between items-center px-8 py-5`}
      >
        <Logo width="47" />
      </div>
      <MobileMenu />
    </>
  );
};

export default Header;
