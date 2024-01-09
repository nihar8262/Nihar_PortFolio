import React from "react";
import { Bio } from "../data/constants";
import image from "../Image/astro1.png"
import image3 from "../Image/planet.png"
import image4 from "../Image/planet1.png"


import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="relative flex  flex-col justify-center items-center mt-32 ">
        {/* images */}
        <div className="hidden absolute top-0 left-32 md:block transfom transition duration-500 hover:scale-125 hover:translate-x-10 hover:translate-y-5">
            <img src={image4} alt="" className="w-24"/>
        </div>
        <div className=" absolute -top-32  md:block transfom transition duration-500 hover:scale-125  hover:-translate-y-10">
            <img src={image} alt="" className="w-28"/>
        </div>
        
        <div className="hidden absolute top-0 right-32 md:block transfom transition duration-500 hover:scale-125 hover:-translate-x-10 hover:translate-y-5">
            <img src={image3} alt="" className="w-28"/>
        </div>
        
      <div>
        <h1 className="text-3xl text-[#854CE6] font-bold mb-20">
          Nihar Chandra Sharma
        </h1>
      </div>
      <div className="flex mb-32 gap-10">
        <div className="transform transiltion duration-500 hover:scale-125 cursor-pointer border p-4 rounded-full">
          <a href={Bio.linkedin} target="_blank">
            <FaLinkedin size={25} color="white"/>
          </a>
        </div>
        <div className="transform transiltion duration-500 hover:scale-125 cursor-pointer border p-4 rounded-full">
          <a  href={Bio.insta} target="_blank ">
            <FaInstagram size={25}  color="white"/>
          </a>
        </div>
        <div className="transform transiltion duration-500 hover:scale-125 cursor-pointer border p-4 rounded-full">
          <a href={Bio.facebook} target="_blank">
            <FaFacebook size={25} color="white"/>
          </a>
        </div>
        <div className="transform transiltion duration-500 hover:scale-125 cursor-pointer border p-4 rounded-full">
          <a href={Bio.twitter} target="_blank">
            <FaTwitter size={25} color="white"/>
          </a>
        </div>
      </div>
    </div>
  );
};
