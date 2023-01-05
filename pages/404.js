import Head from "next/head";
import Image from "next/image";
import { LinkButton } from "../src/components/atom/LinkButton";
import { Heading2 } from "../src/components/atom/Heading2";
import FourOhFourVector from "/public/vectors/404.svg";
import { Container } from "../src/components/atom/Container";

const FourOhFour = () => {
  return (
    <>
      <Head>
        <title>Page introuvable | Tom Bost</title>
      </Head>
      <Container className=" pt-24 text-center">
        <Image
          src={FourOhFourVector}
          alt={"sqd"}
          className={
            "col-span-4 mb-7 md:col-span-2 md:col-start-2 lg:col-span-6 lg:col-start-4"
          }
        />
        <Heading2 className="col-span-4 mb-6 lg:col-span-8 lg:col-start-3">
          La page que vous recherchez semble introuvable
        </Heading2>
        <LinkButton
          href="/"
          classNameButton={
            "col-span-4 lg:col-span-4 md:col-span-2 md:col-start-2 lg:col-start-5 lg:col-span-5"
          }
        >
          Page d&lsquo;accueil
        </LinkButton>
      </Container>
    </>
  );
};

export default FourOhFour;
