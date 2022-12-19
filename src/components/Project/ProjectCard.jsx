import { useState } from "react";

export const ProjectCard = ({ imageUrl, onClick, indexKey }) => {
  return (
    <div
      className="col-span-2 bg-white text-noblack rounded-2xl overflow-hidden flex justify-center hover:scale-105 p-5 h-36"
      id={indexKey}
      onClick={onClick}
    >
      <img src={imageUrl} className="object-contain w-5/6" alt="" />
    </div>
  );
};
