import Image from "next/image";
import me from "/public/images/portrait.png";

import { IconGithub } from "../atom/IconGithub";
import { IconLinkedin } from "../atom/IconLinkedin";
import { LinkButton } from "../atom/LinkButton";
import { Container } from "../atom/Container";

export const Hero = () => {
  return (
    <Container
      id={"#"}
      className={"-mt-20 lg:mt-0 lg:pt-32 xl:pt-32 2xl:pt-44"}
    >
      <Image
        src={me}
        alt="Me"
        priority="false"
        className="col-span-4 m-auto w-3/4 drop-shadow-aura md:w-1/2 lg:hidden"
      />
      <div className="col-span-4 lg:col-span-7 lg:text-left">
        <h1 className="my-7">
          <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-neonblue">
            <span className="relative">Développeur Web </span>
          </span>
          & Graphiste
        </h1>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec
          eros nisl. Curabitur non urna hendrerit, consequat massa non, pretium
          metus. Ut maximus ut est vitae imperdiet. Integer id finibus lorem,
          sit amet pellentesque felis. In ac massa sed lorem lobortis interdum.
        </p>
        <div className="mt-5 flex justify-center lg:justify-start">
          <LinkButton href="#contact">Me Contacter</LinkButton>
          <IconGithub className="ml-4" />
          <IconLinkedin className="ml-4" />
        </div>
      </div>
      <div className="relative hidden lg:col-span-5 lg:block">
        <Image
          src={me}
          alt="Me"
          priority="false"
          className="absolute -bottom-[48px] right-0 w-80 drop-shadow-aura xl:-bottom-[112px]"
        />
      </div>
    </Container>
  );
};
