import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import LeftTemplate from "../components/LeftSideBar";
import MainTemplate from "../components/MainSideBar";
import Navbar from "../components/Navbar";
import RightTemplate from "../components/RightSideBar";
import { tweetsType } from "../types/types";
import { PrismaClient } from "@prisma/client";

export default function Home({
  tweets,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Twitter Plus</title>
      </Head>
      <div className="w-80 mx-auto">
        <Navbar />
        <div className="grid grid-cols-home gap-10">
          <LeftTemplate />
          <MainTemplate tweets={tweets} />
          <RightTemplate />
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  tweets: tweetsType[];
}> = async () => {
  const Prisma = new PrismaClient();
  const tweets = await Prisma.tweet.findMany();
  return {
    props: {
      tweets,
    },
  };
};
