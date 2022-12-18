import Head from "next/head";
import { About } from "../src/components/about";
import { Hero } from "../src/components/hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>PorteFolio | Tom Bost</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <About />
    </>
  );
}
