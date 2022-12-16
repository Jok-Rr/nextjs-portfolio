import Image from "next/image";
import me from "/public/images/portrait.png";
import { Button } from "../atom/Button";
import { IconGithub } from "../atom/IconGithub";
import { IconLinkedin } from "../atom/IconLinkedin";

export const Hero = () => {
  return (
    <div className="hero grid grid-cols-4 mx-8 mb-12 text-center">
      <Image src={me} alt="Me" className="col-span-4 m-auto" />
      <h1 className="col-span-4 mb-7 -mt-14">
        Développeur Web &<br /> Graphiste
      </h1>
      <p className="col-span-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec
        eros nisl. Curabitur non urna hendrerit, consequat massa non, pretium
        metus. Ut maximus ut est vitae imperdiet. Integer id finibus lorem, sit
        amet pellentesque felis. In ac massa sed lorem lobortis interdum.
      </p>
      <div className="col-span-4 mt-5 flex justify-center">
        <Button size="default" className="col-span-1">
          Me Contacter
        </Button>
        <IconGithub style="ml-4" />
        <IconLinkedin style="ml-4" />
      </div>
    </div>
  );
};
