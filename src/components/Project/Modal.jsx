import { LinkButton } from "../atom/LinkButton";
import { Heading2 } from "../atom/Heading2";
import { Heading3 } from "../atom/Heading3";
import { PROJECTS } from "/public/projects/index";

export const Modal = ({ showModal, targetProject, setShowModal }) => {
  return (
    <div
      className={`fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-lightdark/[0.95] opacity-0 transition-opacity duration-1000 ${
        !showModal ? "hidden" : "opacity-100"
      }`}
    >
      <div
        className={`group/card relative w-11/12 rounded-xl bg-noblack p-7 drop-shadow-aura md:h-fit lg:w-1/2 lg:p-14`}
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
          {PROJECTS[targetProject].tags !== "" && (
            <ul className="flex justify-center pb-6">
              {PROJECTS[targetProject].tags.map((data, index) => (
                <li
                  key={index}
                  className="mx-2 rounded-xl bg-lightdark py-1 px-3 font-medium "
                >
                  {data}
                </li>
              ))}
            </ul>
          )}
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
