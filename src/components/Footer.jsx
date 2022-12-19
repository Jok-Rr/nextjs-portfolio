import logo from "/public/vectors/logo-tb.svg";
import { Container } from "./atom/Container";
import { Logo } from "./atom/Logo";
import Link from "next/link";
import { IconGithub } from "./atom/IconGithub";
import { IconLinkedin } from "./atom/IconLinkedin";

export const Footer = () => {
  return (
    <Container>
      <figure className="col-span-4 m-auto">
        <Logo width={70} />
      </figure>
      <div className="col-span-4 m-auto font-bold">
        <p className="mb-2">
          © tom.com 2022. <br />
          Tous droits réservés.
        </p>
        <Link href="">Mentions Légales</Link>
      </div>
      <IconGithub className="col-span-1 col-start-2 justify-end" />
      <IconLinkedin className="col-span-1" />
    </Container>
  );
};
