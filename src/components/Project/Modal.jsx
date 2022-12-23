import { LinkButton } from "../atom/LinkButton";
import { Heading2 } from "../atom/Heading2";
import { Heading3 } from "../atom/Heading3";
import { PROJECTS } from "/public/projects/index";

export const Modal = ({ showModal, targetProject, setShowModal }) => {
  return (
    <div
      className={`fixed  top-0 left-0 z-30 h-full w-full bg-lightdark/[1] ${
        !showModal ? "hidden" : ""
      }`}
    >
      <div
        className={`fixed top-0 bottom-0 right-0 left-0 z-30 m-auto h-fit w-11/12 rounded-xl bg-noblack p-7 drop-shadow-aura md:h-fit lg:w-1/2 lg:p-14`}
      >
        <i
          className="fa-solid fa-xmark absolute right-6 top-4 cursor-pointer text-3xl"
          onClick={() => {
            setShowModal(!showModal);
          }}
        ></i>

        <div className="contentModal flex h-full flex-col justify-evenly">
          <Heading2 className={"col-span-4"}>
            {PROJECTS[targetProject].title}
          </Heading2>
          <p className="pb-6">{PROJECTS[targetProject].description}</p>
          {PROJECTS[targetProject].site && (
            <LinkButton
              classNameButton="block"
              href={PROJECTS[targetProject].site}
              target="_blank"
            >
              Consulter le site
            </LinkButton>
          )}
        </div>
      </div>
    </div>
  );
};
