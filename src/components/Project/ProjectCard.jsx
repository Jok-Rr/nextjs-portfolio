import logo from "/public/vectors/logo-tb.svg";

export const ProjectCard = ({ imageUrl, title }) => {
  console.log(imageUrl);
  return (
    <div className="col-span-2 bg-white text-noblack rounded-2xl overflow-hidden flex justify-center hover:scale-105 p-5 h-36">
      <img src={imageUrl} className="object-contain w-5/6" alt="" />
    </div>
  );
};
