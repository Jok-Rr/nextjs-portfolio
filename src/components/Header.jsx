import Link from "next/link";
import { Container } from "postcss";
import { useEffect, useState } from "react";
import { LinkButton } from "./atom/LinkButton";
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
        className={`left-0 right-0 z-50 flex items-center justify-between px-8 py-5 transition-colors delay-150 lg:fixed lg:px-20 xl:px-48 2xl:px-[30%] ${
          scrollPosition > 0 &&
          "lg:bg-noblack lg:bg-opacity-70 lg:backdrop-blur-md"
        }`}
      >
        <Logo width="47" />
        <nav className="hidden font-semibold capitalize lg:block">
          <Link href={"#"} className={"ml-5"}>
            Home
          </Link>
          <Link href={"#"} className={"ml-5"}>
            Moi
          </Link>
          <Link href={"#"} className={"ml-5"}>
            Parcours
          </Link>
          <Link href={"#"} className={"ml-5"}>
            Projets
          </Link>
          <Link href={"#"} className={"ml-5"}>
            Témoignages
          </Link>
          <LinkButton href="#contact" classNameButton={"ml-5"}>
            Contact
          </LinkButton>
        </nav>
      </div>
      <MobileMenu scrollDirection={scrollDirection} />
    </>
  );
};

export default Header;
