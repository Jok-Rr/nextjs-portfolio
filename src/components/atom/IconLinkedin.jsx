import Image from "next/image";
import Link from "next/link";

import { linkedinLink } from "../../lib/config";
import linkedinIcon from "/public/vectors/linkedin.svg";

export const IconLinkedin = ({ style }) => {
  return (
    <Link href={linkedinLink} target="_blank" className={`flex ${style}`}>
      <Image
        src={linkedinIcon}
        width="38"
        height={38}
        alt="Lien de redirection vers Github de Tom"
      />
    </Link>
  );
};
