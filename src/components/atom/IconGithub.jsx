import Image from "next/image";
import Link from "next/link";
import { gitLink } from "../../lib/config";
import gitIcon from "/public/vectors/square-github.svg";

export const IconGithub = ({ style }) => {
  return (
    <Link href={gitLink} target="_blank" className={`flex ${style}`}>
      <Image src={gitIcon} alt="Lien de redirection vers Github de Tom" />
    </Link>
  );
};
