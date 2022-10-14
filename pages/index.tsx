import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="w-screen h-screen">
      <Head>
        <title>Links</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-1/2 mx-auto mt-10">
        <div className="space-y-4">
          <img
            src="./images/logo.png"
            alt="codechef-logo"
            className="cursor-pointer hover:scale-75 duration-300 ease-out rounded-full mx-auto border-2 shadow-xl border-black/20 h-36 w-36"
          />

          <h1 className="text-center font-bold text-2xl">@CodeChefSrmRmp</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
