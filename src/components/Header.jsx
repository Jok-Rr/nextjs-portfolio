import { Container } from "postcss";
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
        className={`absolute left-0 right-0 mx-8 flex w-full items-center justify-between py-5 lg:mx-20 xl:mx-48 2xl:m-auto 2xl:w-1/2`}
      >
        <Logo width="47" />
      </div>
      <MobileMenu scrollDirection={scrollDirection} />
    </>
  );
};

export default Header;
