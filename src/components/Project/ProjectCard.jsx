import { FakeButton } from "../atom/FakeButton";
import { Heading4 } from "../atom/Heading4";

export const ProjectCard = ({ imageUrl, onClick, indexKey, data }) => {
  return (
    <div
      className="group/card relative isolate col-span-2 flex h-32 cursor-pointer overflow-hidden rounded-2xl lg:col-span-4 lg:h-56"
      id={indexKey}
      onClick={onClick}
    >
      <img
        src={imageUrl}
        className="w-full object-cover transition duration-300 ease-in-out lg:group-hover/card:scale-125"
        alt=""
      />
      <div className="hidden lg:absolute lg:top-0 lg:left-0 lg:flex lg:h-full lg:w-full lg:flex-col lg:items-center lg:justify-center lg:text-noblack lg:opacity-0 lg:backdrop-blur-xl lg:transition lg:duration-300 lg:ease-in-out lg:group-hover/card:opacity-100">
        <Heading4>{data.title}</Heading4>
        <FakeButton classNameButton={"text-white"}>
          Voir <i className="fa-solid fa-eye"></i>
        </FakeButton>
      </div>
    </div>
  );
};
