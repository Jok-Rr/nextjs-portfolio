import Image from "next/image";
import me from "/public/images/portrait.png";

import { IconGithub } from "../atom/IconGithub";
import { IconLinkedin } from "../atom/IconLinkedin";
import { LinkButton } from "../atom/LinkButton";
import { Container } from "../atom/Container";

export const Hero = () => {
  return (
    <Container id={"#"} className={"lg:pt-24"}>
      <Image
        src={me}
        alt="Me"
        priority="false"
        className="col-span-4 m-auto drop-shadow-aura lg:hidden"
      />
      <div className="col-span-4 lg:text-left lg:col-span-7">
        <h1 className="my-7">
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-neonblue relative inline-block">
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
      <div className="hidden lg:col-span-5 lg:block relative">
        <Image
          src={me}
          alt="Me"
          priority="false"
          className="absolute -bottom-[48px] drop-shadow-aura right-0 w-[75%]"
        />
      </div>
    </Container>
  );
};
