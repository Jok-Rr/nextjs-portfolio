import Image from "next/image";
import { Container } from "../atom/Container";
import { Heading2 } from "../atom/Heading2";
import { IMAGES } from "/public/skills/index.js";

export const Skill = () => {
  return (
    <Container id="skills">
      <Heading2 className={"col-span-4"}>
        Les techno & outils que j’utilise 🧰
      </Heading2>
      <div className="flex lex-wrap col-span-4 items-center flex-wrap justify-center">
        {IMAGES.map((e, index) => {
          return (
            <img
              src={e.PATH.src}
              key={index}
              className="w-1/5 m-2 hover:scale-125 transition ease-in-out"
            />
          );
        })}
      </div>
    </Container>
  );
};
