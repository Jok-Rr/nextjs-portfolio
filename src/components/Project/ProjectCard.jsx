import { useState } from "react";

export const ProjectCard = ({ imageUrl, onClick, indexKey }) => {
  return (
    <div
      className="col-span-2 flex h-36 cursor-zoom-in justify-center overflow-hidden rounded-2xl bg-white p-5 text-noblack transition-transform duration-300 ease-in-out hover:scale-105 lg:col-span-4"
      id={indexKey}
      onClick={onClick}
    >
      <img src={imageUrl} className="w-5/6 object-contain" alt="" />
    </div>
  );
};
