import Image from "next/image";
import { Container } from "../atom/Container";
import { Heading2 } from "../atom/Heading2";
import memoji from "/public/images/memoji.png";

export const About = () => {
  return (
    <div id="about" className="bg-lightdark ">
      <Container>
        <Heading2>A propos de moi 📖</Heading2>
        <Image
          src={memoji}
          alt="Test"
          className="drop-shadow-aura m-auto col-span-4 mb-6"
        />
        <p className="col-span-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec
          eros nisl. Curabitur non urna hendrerit, consequat massa non, pretium
          metus. Ut maximus ut est vitae imperdiet. Integer id finibus lorem,
          sit amet pellentesque felis. In ac massa sed lorem lobortis interdum.
        </p>
      </Container>
    </div>
  );
};
