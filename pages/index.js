import Head from "next/head";
import { About } from "../src/components/About";
import { Hero } from "../src/components/Hero";
import { Roadmap } from "../src/components/Roadmap";
import { Skill } from "../src/components/Skill";

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
      <Skill />
      <Roadmap />
    </>
  );
}
