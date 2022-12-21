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
          className="col-span-4 m-auto mb-6 drop-shadow-aura lg:w-44 xl:w-52"
        />
        <div className={"col-span-4 lg:col-span-6 lg:text-left"}>
          <Heading2 className={"hidden lg:block"}>A propos de moi 📖</Heading2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec
            eros nisl. Curabitur non urna hendrerit, consequat massa non,
            pretium metus. Ut maximus ut est vitae imperdiet. Integer id finibus
            lorem, sit amet pellentesque felis. In ac massa sed lorem lobortis
            interdum.
          </p>
        </div>
      </Container>
    </div>
  );
};
