import { useEffect, useState } from "react";
import { Logo } from "./atom/Logo";
import { MobileMenu } from "./atom/MobileMenu";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
      if (scrollPosition < window.pageYOffset) {
        setScrollDirection("DOWN");
      } else {
        setScrollDirection("UP");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const handleClickMenu = () => {
    return setIsOpenMenu(!isOpenMenu);
  };

  return (
    <>
      <div
        className={`absolute flex w-full justify-between items-center py-5 mx-8 md:mx-20`}
      >
        <Logo width="47" />
      </div>
      <MobileMenu scrollDirection={scrollDirection} />
    </>
  );
};

export default Header;
