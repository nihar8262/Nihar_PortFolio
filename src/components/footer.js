import React, { useState } from "react";
import { Bio } from "../data/constants";
import image from "../Image/astro1.png";
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { SiLeetcode,SiCodeforces } from "react-icons/si";
import { Message2 } from "./message2";

export const Footer = () => {
  const [nav ,setNav]=useState(false);
  return (
    <div
    className="relative flex  flex-col justify-center items-center w-full mt-32">

      <div className=" absolute -top-28 z-0   transfom transition duration-500 hover:scale-125  hover:-translate-y-4">
        <button onClick={()=> setNav(!nav)}>
        {
                nav ? <Message2/> :null
            }
        <img src={image} alt="" className="w-24 md:w-28 drop-shadow-lg"></img>
        </button>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 ]   mb-8 mt-8">

      <div className="hover:bg-gradient-to-r from-black via-black/70 to-orange-400  transform transition duration-500 hover:scale-125 cursor-pointer border p-4 rounded-full">
          <a href={Bio.leetcode} target="_blank">
            <SiLeetcode size={25} color="white" />
          </a>
        </div>

        <div className="hover:bg-blue-800  transform transition duration-500 hover:scale-125 cursor-pointer border p-4 rounded-full">
          <a href={Bio.linkedin} target="_blank">
            <FaLinkedin size={25} color="white" />
          </a>
        </div>

        <div className="hover:bg-gradient-to-t from-orange-600 via-pink-600 to-pink-700 transform transition duration-500 hover:scale-125 cursor-pointer border p-4 rounded-full">
          <a href={Bio.insta} target="_blank ">
            <FaInstagram size={25} color="white" />
          </a>
        </div>

        <div className="hover:bg-blue-800 transform transition duration-500 hover:scale-125 cursor-pointer border p-4 rounded-full">
          <a href={Bio.facebook} target="_blank">
            <FaFacebook size={25} color="white" />
          </a>
        </div>

        <div className="hover:bg-black transform transition duration-500 hover:scale-125 cursor-pointer border p-4 rounded-full">
          <a href={Bio.twitter} target="_blank">
            <FaTwitter size={25} color="white" />
          </a>
        </div>

        {/* <div className="hover:bg-gradient-to-r from-yellow-400 via-blue-700 to-red-600  transform transition duration-500 hover:scale-125 cursor-pointer border p-4 rounded-full">
          <a href={Bio.codeforces} target="_blank">
            <SiCodeforces size={25} color="white" />
          </a>
        </div> */}

      </div>
      <div className="text-center mt-2 pb-4">
        <p className="text-slate-400 text-sm md:text-base">
          &copy; {new Date().getFullYear()} <span className="font-bold text-[#854CE6]">Nihar Chandra Sharma</span>. All rights reserved.
        </p>
      </div>
    </div>
  );
};
