import { FakeButton } from "../atom/FakeButton";
import { Heading4 } from "../atom/Heading4";

export const ProjectCard = ({ imageUrl, onClick, indexKey, data }) => {
  return (
    <div
      className="group/card relative col-span-2 flex h-32 cursor-pointer overflow-hidden rounded-2xl lg:col-span-4 lg:h-56"
      id={indexKey}
      onClick={onClick}
    >
      <img
        src={imageUrl}
        className="w-full object-cover transition duration-300 ease-in-out group-hover/card:scale-125"
        alt=""
      />
      <div className="absolute top-0 left-0 flex h-full w-full flex-col items-center justify-center text-noblack opacity-0 backdrop-blur-xl transition duration-300 ease-in-out group-hover/card:opacity-100">
        <Heading4>{data.title}</Heading4>
        <FakeButton classNameButton={"text-white"}>
          Voir <i class="fa-solid fa-eye"></i>
        </FakeButton>
      </div>
    </div>
  );
};
