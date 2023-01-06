import Image from "next/image";
import { Container } from "../atom/Container";
import { Heading2 } from "../atom/Heading2";
import memoji from "/public/images/memoji.png";

export const About = () => {
  return (
    <div id="about" className="bg-lightdark">
      <Container className={"lg:items-center"}>
        <Heading2 className={"col-span-4 lg:hidden"}>
          A propos de moi 📖
        </Heading2>
        <Image
          src={memoji}
          alt="Test"
          className="col-span-4 m-auto mb-6 w-2/6 drop-shadow-aura lg:w-44 xl:w-52"
        />
        <div className={"col-span-4 lg:col-span-6 lg:text-left"}>
          <Heading2 className={"hidden lg:block"}>A propos de moi 📖</Heading2>
          <p>
            J&rsquo;ai acquis une solide expertise et de nombreuses compétences
            pour réaliser des projets de qualité.
            <br />
            <br />
            Mon objectif est de toujours offrir un travail professionnel et
            créatif qui répond aux besoins et aux attentes des clients.
          </p>
        </div>
      </Container>
    </div>
  );
};
