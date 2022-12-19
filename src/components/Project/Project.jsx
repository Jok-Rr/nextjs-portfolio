import { useEffect, useState } from "react";
import { Container } from "../atom/Container";
import { FakeButton } from "../atom/FakeButton";
import { Heading2 } from "../atom/Heading2";
import { Modal } from "./Modal";
import { ProjectCard } from "./ProjectCard";
import { PROJECTS } from "/public/projects/index";

export const Project = () => {
  const [showMore, setShowMore] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [targetProject, setTargetProject] = useState(0);

  useEffect(() => {
    if (showModal) {
      document.documentElement.classList.add("overflow-hidden");
      return;
    }
    document.documentElement.classList.remove("overflow-hidden");
  }, [showModal]);

  const handleClickCard = (event) => {
    const idTarget = event.currentTarget.id;
    setShowModal(!showModal);
    setTargetProject(idTarget);
  };

  return (
    <Container id="projects">
      <Heading2>Mes projets 🖼️</Heading2>
      {PROJECTS.map((data, index) => {
        return (
          <ProjectCard
            key={index}
            imageUrl={data.logo.src}
            title={data.title}
            indexKey={index}
            onClick={handleClickCard}
          />
        );
      })}
      <div className="col-span-4">
        <FakeButton classNameButton="mt-9"> Voir plus de projets</FakeButton>
      </div>
      <Modal
        showModal={showModal}
        targetProject={targetProject}
        setShowModal={setShowModal}
      />
    </Container>
  );
};
