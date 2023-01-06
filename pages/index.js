import Head from "next/head";
import { About } from "../src/components/About";
import { MobileMenu } from "../src/components/atom/MobileMenu";
import { Contact } from "../src/components/Contact";
import { Hero } from "../src/components/Hero";
import { Project } from "../src/components/Project";
import { Roadmap } from "../src/components/Roadmap";
import { Skill } from "../src/components/Skill";
import { Testimonial } from "../src/components/Testimonial";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tom Bost | PorteFolio</title>
      </Head>
      <Hero />
      <About />
      <Skill />
      <Roadmap />
      <Project />
      <Testimonial />
      <Contact />
    </>
  );
}
