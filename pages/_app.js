import Head from "next/head";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import "../styles/globals.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alex Cheng</title>
        <link rel="icon" href="/assets/favicon-light.png" />
      </Head>
      <Navbar />
      <Main />
    </div>
  );
}
