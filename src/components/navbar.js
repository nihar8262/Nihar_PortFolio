import React, { useState } from "react";
import {FaBars, FaGithub, FaTimes} from 'react-icons/fa'
import { Mobilenav } from "./mobilenav";
import { Bio } from "../data/constants";
import {motion } from "framer-motion"



export const Navbar = () => {

    const [nav ,setNav]=useState(false);
    const variants = {
      open: { opacity: 1, y: 0 },
      closed: { opacity: 1, y: "-35%" },
    }
  return (
    <div
      className="bg-[#191924]  h-[80px] flex justify-center items-center 
     text-[1.1rem] sticky top-0 z-10 md:transition-all ease-in-out delay-75 "
    >
        {/* Nav Container */}
      <div className="flex items-center justify-evenly gap-16 w-[40rem]">
        {/* Logo */}
        <div className="text-white text-2xl  sm:text-white cursor-pointer font-bold justify-start px-0 mr-25 ">
          <span>N</span>
          ihar
        </div>
        {/* mobile icon */}
        <motion.div animate={nav ? "open" : "closed"}
          variants={variants} 
          style={{
            transitionDelay:500
          }}
          className=" block  top-0 right-0 mb-4 ml-0  mt-12 transform duration-100 text-2xl cursor-pointer text-[#F2F3F4] md:hidden">
            <button onClick={()=> setNav(!nav)}>
            {
                nav ? <FaTimes/> :<FaBars/>
            }
            </button>
            {
                nav ? <Mobilenav/> :null
            }
            
        </motion.div>
        {/* Nav content */}
        <div className="text-white hidden gap-4 border p-2 rounded-3xl bg-white/5 md:flex">
          <a
            href="#about"
            className="pointer-cursor hover:bg-white/35 hover:text-yellow-500 rounded-3xl p-1 "
          >
            About
          </a>
          <a
            href="#skills"
            className="pointer-cursor hover:bg-white/35 hover:text-yellow-500 rounded-3xl p-1 "
          >
            Skills
          </a>
          
          <a
            href="#projects"
            className="pointer-cursor hover:bg-white/35 hover:text-yellow-500 rounded-3xl p-1"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="pointer-cursor hover:bg-white/35 hover:text-yellow-500 rounded-3xl p-1"
          >
            Contact
          </a>
        </div>
        {/* Button */}
        <div className=" hidden md:block">
          <a
            href={Bio.github} target="_blank"
            class="relative inline-flex items-center justify-center p-3 px-5 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
          >
            <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-500 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
              <FaGithub />
            </span>
            <span class="relative invisible">Github</span>
          </a>
        </div>
      </div>
    </div>
  );
};
