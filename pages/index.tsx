import type { NextPage } from "next";
import LinkCard from "../components/LinkCard";
import Head from "next/head";
import {
  TfiTwitter,
  TfiInstagram,
  TfiLinkedin,
  TfiGithub,
} from "react-icons/tfi";

const Home: NextPage = () => {
  return (
    <div className="w-screen h-screen">
      <Head>
        <title>Links</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="md:w-1/2 mx-auto mt-10">
        <div className="space-y-4">
          <img
            src="./images/logo.png"
            alt="codechef-logo"
            className="cursor-pointer md:hover:scale-75 duration-300 ease-out rounded-full mx-auto border-2 shadow-xl border-black/20 h-36 w-36"
          />

          <h1 className="text-center font-bold text-2xl">@CodeChefSrmRmp</h1>
        </div>
        <div className="flex justify-center space-x-5 mt-5">
          <TfiTwitter className="social-icons" />
          <TfiInstagram className="social-icons" />
          <TfiLinkedin className="social-icons" />
          <TfiGithub className="social-icons" />
        </div>
        <div className="mx-10 md:mx-0 py-10 space-y-5">
          <LinkCard
            image="https://bit.ly/3CYRgnG"
            title="Buidlers Connect Meetup Pass"
            redirect="https://lu.ma/BuidlersConnect"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
