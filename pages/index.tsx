import type { NextPage } from "next";
import LinkCard from "../components/LinkCard";
import { client } from "../components/sanityClient";
import imageUrlBuilder from "@sanity/image-url";
import Head from "next/head";
import {
  TfiTwitter,
  TfiInstagram,
  TfiLinkedin,
  TfiGithub,
} from "react-icons/tfi";

const Home: NextPage = ({ socials, linksReformated: links }: any) => {
  return (
    <div className="w-screen h-screen">
      <Head>
        <title>Links</title>
        <link rel="icon" href="/images/logo.png" />
      </Head>

      <div className="md:w-1/2 mx-auto pt-10">
        <div className="space-y-4">
          <img
            src="./images/logo.png"
            alt="codechef-logo"
            className="cursor-pointer md:hover:scale-75 duration-300 ease-out rounded-full mx-auto border-2 shadow-xl border-black/20 h-36 w-36"
          />

          <h1 className="text-center font-bold text-2xl">@CodeChefSrmRmp</h1>
        </div>
        <div className="flex justify-center space-x-5 mt-5">
          {socials?.map((social: any) => {
            if (social.title == "Twitter")
              return (
                <a
                  key={social.title}
                  target="_blank"
                  href={social.profile_link}
                >
                  <TfiTwitter className="social-icons" />
                </a>
              );
          })}
          {socials?.map((social: any) => {
            if (social.title == "Github")
              return (
                <a
                  key={social.title}
                  target="_blank"
                  href={social.profile_link}
                >
                  <TfiGithub className="social-icons" />
                </a>
              );
          })}
          {socials?.map((social: any) => {
            if (social.title == "Instagram")
              return (
                <a
                  key={social.title}
                  target="_blank"
                  href={social.profile_link}
                >
                  <TfiInstagram className="social-icons" />
                </a>
              );
          })}
          {socials?.map((social: any) => {
            if (social.title == "LinkedIn")
              return (
                <a
                  key={social.title}
                  target="_blank"
                  href={social.profile_link}
                >
                  <TfiLinkedin className="social-icons" />
                </a>
              );
          })}
        </div>
        <div className="mx-10 md:mx-0 py-10 space-y-5">
          {links?.map((link: any, index: any) => (
            <LinkCard
              key={index}
              image={link.thumbnail}
              title={link.title}
              redirect={link.redirect_url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const builder = imageUrlBuilder(client);

  function urlFor(source: any) {
    return builder.image(source);
  }

  const socialsGroq = `*[_type=="socials"]{_updatedAt,title, profile_link}|order(dateTime("_updatedAt"))`;
  const socials = await client.fetch(socialsGroq);

  const linksGroq = `*[_type=="links"]{_updatedAt, title, thumbnail, redirect_url}|order(dateTime(_updatedAt) desc)`;
  const links = await client.fetch(linksGroq);
  const linksReformated = links.map((link: any) => {
    if (link.thumbnail) {
      return {
        ...link,
        thumbnail: urlFor(link.thumbnail).url(),
      };
    } else {
      return link;
    }
  });

  return {
    props: {
      socials,
      linksReformated,
    },
  };
}

export default Home;
