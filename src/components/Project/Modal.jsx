import { LinkButton } from "../atom/LinkButton";
import { Heading2 } from "../atom/Heading2";
import { Heading3 } from "../atom/Heading3";
import { PROJECTS } from "/public/projects/index";

export const Modal = ({ showModal, targetProject, setShowModal }) => {
  return (
    <div
      className={`bg-lightdark/[1]  fixed w-full h-full top-0 left-0 z-30 ${
        !showModal ? "hidden" : ""
      }`}
    >
      <div
        className={`bg-noblack fixed drop-shadow-aura w-11/12 h-max top-0 bottom-0 right-0 left-0 z-30 m-auto rounded-xl p-7`}
      >
        <div className="headerModal flex justify-end text-3xl">
          <i
            className="fa-solid fa-xmark"
            onClick={() => {
              setShowModal(!showModal);
            }}
          ></i>
        </div>
        <div className="contentModal flex flex-col justify-between h-3/4">
          <div>
            <Heading2>{PROJECTS[targetProject].title}</Heading2>
            <p className="pb-6">{PROJECTS[targetProject].description}</p>
            {/* <div className="mb-6">
              <Heading3>Les techno utilisées</Heading3>
              <div className="stack flex justify-between ">
                {PROJECTS[targetProject].stack.map((data, index) => {
                  return (
                    <span
                      className="font-semibold p-2 bg-neonblue w-fit rounded-xl"
                      key={index}
                    >
                      {data}
                    </span>
                  );
                })}
              </div>
            </div> */}
            <LinkButton
              classNameButton="block"
              href={PROJECTS[targetProject].site}
              target="_blank"
            >
              Consulter le site
            </LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
};
