import Head from "next/head";
import LeftTemplate from "../components/left-sidebar/template";
import MainTemplate from "../components/main-content/Template";
import Navbar from "../components/Navbar";
import RightTemplate from "../components/right-sidebar/Template";

export default function Home() {
  return (
    <>
      <Head>
        <title>Twitter Plus</title>
      </Head>
      <div className="w-80 mx-auto">
        <Navbar />
        <div className="grid grid-cols-home gap-2">
          <LeftTemplate />
          <MainTemplate />
          <RightTemplate />
        </div>
      </div>
    </>
  );
}
