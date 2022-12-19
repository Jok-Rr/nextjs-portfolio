import { useState } from "react";
import { Container } from "../atom/Container";
import { FakeButton } from "../atom/FakeButton";
import { Heading2 } from "../atom/Heading2";
import { LinkButton } from "../atom/LinkButton";
import { ProjectCard } from "./ProjectCard";
import { PROJECTS } from "/public/projects/index";

export const Project = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <Container>
      <Heading2>Mes projets 🖼️</Heading2>
      {PROJECTS.map((data, index) => {
        console.log(data.IMG.src);
        return (
          <ProjectCard key={index} imageUrl={data.IMG.src} title={data.title} />
        );
      })}
      <div className="col-span-4">
        <FakeButton classNameButton="mt-9"> Voir plus de projets</FakeButton>
      </div>
    </Container>
  );
};
