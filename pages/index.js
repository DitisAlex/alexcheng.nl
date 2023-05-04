import Head from "next/head";
import Main from "../components/Main";
import About from "../components/About";
import Projects from "../components/Projects";
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
      <Projects />
    </div>
  );
}
