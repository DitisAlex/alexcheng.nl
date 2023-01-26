import Head from "next/head";
import Main from "../components/Main";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alex Cheng</title>
        <link rel="icon" href="/assets/favicon-light.png" />
      </Head>
      <Main />
    </div>
  );
}
