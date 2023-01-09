import Image from "next/image";
import Link from "next/link";

import gitIcon from "/public/vectors/square-github.svg";

export const IconGithub = ({ className = "", url }) => {
  return (
    <Link href={url} target="_blank" className={`flex ${className}`}>
      <Image src={gitIcon} alt="Lien de redirection vers Github de Tom" />
    </Link>
  );
};
