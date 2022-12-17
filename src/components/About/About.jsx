import Image from "next/image";
import memoji from "/public/images/memoji.png";

export const About = () => {
  return (
    <div id="about" className="bg-lightdark ">
      <div className="grid grid-cols-4 mx-8 py-12 text-center m-auto">
        <h2 className="col-span-4">A propos de moi 📖</h2>
        <Image
          src={memoji}
          alt="Test"
          className="drop-shadow-aura m-auto col-span-4 my-6"
        />
        <p className="col-span-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec
          eros nisl. Curabitur non urna hendrerit, consequat massa non, pretium
          metus. Ut maximus ut est vitae imperdiet. Integer id finibus lorem,
          sit amet pellentesque felis. In ac massa sed lorem lobortis interdum.
        </p>
      </div>
    </div>
  );
};
