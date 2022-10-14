import React, { useState } from "react";
import toast from "react-hot-toast";
import { IoShareOutline } from "react-icons/io5";

interface Props {
  image?: string;
  title: string;
  redirect: string;
}

const LinkCard = ({ image, title, redirect }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const toastMessage = () => {
    const toastMessage = toast.success(<b>Link Copied to clipboard!</b>);
    navigator.clipboard.writeText(redirect);
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex items-center px-4 py-3 justify-between bg-white md:hover:scale-105 duration-75 ease-out  rounded-md shadow-sm cursor-pointer"
    >
      <a
        className="flex justify-between items-center flex-1"
        href={redirect}
        target="_blank"
      >
        <img className="w-10 h-10" src={image} alt="logo" />
        <p className="text-center text-sm mx-auto font-bold">{title}</p>
      </a>
      <IoShareOutline
        className={`${
          isHovered ? "visible" : "invisible"
        } hidden md:inline-flex social-icons z-40`}
        onClick={toastMessage}
      />
    </div>
  );
};

export default LinkCard;