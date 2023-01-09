import Image from "next/image";
import me from "/public/images/portrait.png";
import { gitLink } from "../../lib/config";
import { IconGithub } from "../atom/IconGithub";
import { IconLinkedin } from "../atom/IconLinkedin";
import { LinkButton } from "../atom/LinkButton";
import { Container } from "../atom/Container";

export const Hero = () => {
  return (
    <Container
      id={"#"}
      className={"-mt-20 lg:mt-0 lg:pt-36 xl:pt-32 2xl:pt-44"}
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
        <div className="">
          <p> Hello et bienvenue sur mon portfolio ! </p>
          <p>
            Je suis Tom Bost, développeur web et graphiste passionné. Sur ce
            portfolio, vous pouvez découvrir les différents projets que
            j&rsquo;ai réalisés.
          </p>
          <br />
          <p>
            Si vous avez des questions ou souhaitez travailler avec moi sur un
            projet, n&rsquo;hésitez pas à me contacter. Je suis impatients de
            collaborer avec vous !
          </p>
        </div>
        <div className="mt-5 flex justify-center lg:justify-start">
          <LinkButton href="#contact">Me Contacter</LinkButton>
          <IconGithub className="ml-4" url={gitLink} />
          <IconLinkedin className="ml-4" />
        </div>
      </div>
      <div className="relative hidden lg:col-span-5 lg:block">
        <Image
          src={me}
          alt="Me"
          priority="false"
          className="absolute -bottom-[48px] right-0 w-80 drop-shadow-aura lg:w-72 xl:-bottom-[112px] xl:w-80"
        />
      </div>
    </Container>
  );
};
