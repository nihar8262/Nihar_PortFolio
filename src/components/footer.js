import React, { useState } from "react";
import { Bio } from "../data/constants";
import image from "../Image/astro1.png";
import image3 from "../Image/planet.png";
import image4 from "../Image/planet1.png";

import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Mobilenav } from "./mobilenav";
import { Message } from "./message";

export const Footer = () => {
  const [nav ,setNav]=useState(false);
  return (
    <div className="relative flex  flex-col justify-center items-center mt-40 ">
      {/* images */}
      <div className="hidden absolute z-10 top-0 left-20 md:block transfom transition duration-500 hover:scale-125 hover:translate-x-10 hover:translate-y-5">
        <img src={image4} alt="" className="w-24" />
      </div>
      <div className="hidden absolute z-10 top-0 right-20 md:block transfom transition duration-500 hover:scale-125 hover:-translate-x-10 hover:translate-y-5">
        <img src={image3} alt="" className="w-28" />
      </div>
      

      <div className=" absolute -top-40 z-0   transfom transition duration-500 hover:scale-125  hover:-translate-y-10">
        <button onClick={()=> setNav(!nav)}>
        {
                nav ? <Message/> :null
            }
        <img src={image} alt="" className="w-28"></img>
        </button>
      </div>

      

      <div>
        
      </div>
      <div className="flex mb-32 gap-10">
        <div className="transform transiltion duration-500 hover:scale-125 cursor-pointer border p-4 rounded-full">
          <a href={Bio.linkedin} target="_blank">
            <FaLinkedin size={25} color="white" />
          </a>
        </div>
        <div className="transform transiltion duration-500 hover:scale-125 cursor-pointer border p-4 rounded-full">
          <a href={Bio.insta} target="_blank ">
            <FaInstagram size={25} color="white" />
          </a>
        </div>
        <div className="transform transiltion duration-500 hover:scale-125 cursor-pointer border p-4 rounded-full">
          <a href={Bio.facebook} target="_blank">
            <FaFacebook size={25} color="white" />
          </a>
        </div>
        <div className="transform transiltion duration-500 hover:scale-125 cursor-pointer border p-4 rounded-full">
          <a href={Bio.twitter} target="_blank">
            <FaTwitter size={25} color="white" />
          </a>
        </div>
      </div>
    </div>
  );
};
