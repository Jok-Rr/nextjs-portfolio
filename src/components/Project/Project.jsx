import { useEffect, useState } from "react";
import { Container } from "../atom/Container";
import { FakeButton } from "../atom/FakeButton";
import { Heading2 } from "../atom/Heading2";
import { Modal } from "./Modal";
import { ProjectCard } from "./ProjectCard";
import { PROJECTS } from "/public/projects/index";

export const Project = () => {
  const [showMore, setShowMore] = useState({
    length: 6,
    text: "Voir plus de projets",
  });
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

  const handleClickMore = () => {
    if (showMore.length == PROJECTS.length) {
      return setShowMore({ length: 6, text: "Voir plus de projets" });
    }
    setShowMore({ length: PROJECTS.length, text: "Voir moins de projets" });
  };

  return (
    <Container id="projects">
      <Heading2 className={"col-span-4 lg:col-span-12 lg:justify-self-start"}>
        Mes projets 🖼️
      </Heading2>
      {PROJECTS.filter((data, idx) => idx < showMore.length).map(
        (data, index) => {
          return (
            <ProjectCard
              key={index}
              imageUrl={data.logo.src}
              title={data.title}
              indexKey={index}
              onClick={handleClickCard}
            />
          );
        }
      )}
      {PROJECTS.length > 6 && (
        <div className="col-span-4 lg:col-span-12">
          <FakeButton
            classNameButton="mt-9"
            onClick={handleClickMore}
            data={{}}
          >
            {showMore.text}
          </FakeButton>
        </div>
      )}
      <Modal
        showModal={showModal}
        targetProject={targetProject}
        setShowModal={setShowModal}
      />
    </Container>
  );
};
