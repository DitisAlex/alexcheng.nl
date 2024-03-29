import Head from "next/head";
import Main from "../components/Main";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

import { useTheme } from "next-themes";

export default function Home() {
  const { resolvedTheme } = useTheme();

  return (
    <div>
      <Head>
        <title>Alex Cheng</title>
        <link
          rel="icon"
          href={
            resolvedTheme === "light"
              ? "/assets/icons/favicon-light.png"
              : "/assets/icons/favicon-dark.png"
          }
        />
      </Head>
      <Main />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
