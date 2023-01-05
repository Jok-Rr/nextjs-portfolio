import Head from "next/head";
import Image from "next/image";
import { LinkButton } from "../src/components/atom/LinkButton";
import FourOhFourVector from "/public/vectors/404.svg";

const FourOhFour = () => {
  return (
    <>
      <Head>
        <title>Page introuvable | Tom Bost</title>
      </Head>
      <div
        style={{ height: "calc(100vh - 200px)" }}
        className="center flex flex-col items-center justify-center align-middle"
      >
        <Image src={FourOhFourVector} alt={"sqd"} className={"mb-7 w-1/2"} />
        <LinkButton href="/">Page d&lsquo;accueil</LinkButton>
      </div>
    </>
  );
};

export default FourOhFour;
