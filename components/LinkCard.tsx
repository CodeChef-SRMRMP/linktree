import React, { useState } from "react";
import { IoShareOutline } from "react-icons/io5";

interface Props {
  image?: string;
  title: string;
  redirect: string;
}

const LinkCard = ({ image, title, redirect }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex items-center px-4 py-3 justify-between bg-white md:hover:scale-105 duration-75 ease-out  rounded-md shadow-sm cursor-pointer"
    >
      <img className="w-10 h-10" src={image} alt="logo" />
      <p className="text-center font-bold">{title}</p>
      <IoShareOutline className={`${!isHovered && "invisible"} social-icons`} />
    </div>
  );
};

export default LinkCard;
