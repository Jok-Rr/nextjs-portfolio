import { Container } from "./atom/Container";
import { Logo } from "./atom/Logo";
import Link from "next/link";
import { IconGithub } from "./atom/IconGithub";
import { IconLinkedin } from "./atom/IconLinkedin";
import { gitLink } from "../../src/lib/config";

export const Footer = () => {
  return (
    <Container className={"lg:text-left"}>
      <figure className="col-span-4 m-auto lg:hidden">
        <Link href={"/"}>
          <Logo width={70} />
        </Link>
      </figure>
      <div className="col-span-4 m-auto font-bold lg:col-span-5 lg:m-0">
        <p className="mb-2">
          © tom.com 2022. <br />
          Tous droits réservés.
        </p>
        <Link href="/legalMention">Mentions Légales</Link>
      </div>
      <figure className="col-span-2 m-auto hidden lg:block">
        <Link href={"/"}>
          <Logo width={70} />
        </Link>
      </figure>
      <div className="col-span-4 flex justify-center lg:col-span-5 lg:justify-end">
        <IconGithub className="mx-1" url={gitLink} />
        <IconLinkedin className="mx-1" />
      </div>
    </Container>
  );
};
