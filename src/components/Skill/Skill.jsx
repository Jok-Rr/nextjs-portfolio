import Image from "next/image";
import { Container } from "../atom/Container";
import { Heading2 } from "../atom/Heading2";
import { IMAGES } from "/public/skills/index.js";

export const Skill = () => {
  return (
    <Container id="skills">
      <Heading2 className={"col-span-4 lg:col-span-12"}>
        Les techno & outils que j’utilise 🧰
      </Heading2>
      <div className="col-span-4 flex flex-wrap flex-wrap items-center justify-center lg:col-span-6 lg:col-start-4 2xl:col-span-6 2xl:col-start-4">
        {IMAGES.map((e, index) => {
          return (
            <img
              src={e.PATH.src}
              key={index}
              className="m-2 w-1/5 transition ease-in-out hover:scale-125 2xl:m-5"
            />
          );
        })}
      </div>
    </Container>
  );
};
