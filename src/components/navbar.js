import React, { useState } from "react";
import {FaBars, FaGithub, FaTimes} from 'react-icons/fa'
import { Mobilenav } from "./mobilenav";
import { Bio } from "../data/constants";
import {motion } from "framer-motion"



export const Navbar = () => {

    const [nav ,setNav]=useState(false);
    const variants = {
      open: { opacity: 1, y: 0 },
      closed: { opacity: 1, y: "-50%" },
    }
  return (
    <div
      className="bg-[#191924]  h-[80px] flex justify-center items-center 
     text-[1.1rem] sticky top-0 z-10 md:transition-all ease-in-out delay-75 "
    >
        {/* Nav Container */}
      <div className="flex items-center justify-between gap-60 xl:gap-80 lg:gap-60 sm:gap-10 md:20 ">
        {/* Logo */}
        <div className="text-white text-3xl   
         sm:text-white cursor-pointer font-bold justify-start px-0 mr-25 ">
         <p className="bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-400">Nihar</p>
        </div>
        {/* mobile icon */}
        <motion.div animate={nav ? "open" : "closed"}
          variants={variants} 
          style={{
            transitionDelay:500
          }}
          className=" block  -top-4 right-5  mt-[3.75rem] mb-4 ml-0   transform duration-200 text-2xl cursor-pointer text-[#F2F3F4] sm:hidden">
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
        <div className="text-white hidden sm:gap-4 md:gap-7 border p-1 rounded-3xl bg-black/40 backdrop-blur-lg   sm:flex">
          <a
            href="#about"
            className="pointer-cursor hover:bg-white/35 hover:backdrop-blur-lg hover:text-yellow-500 rounded-3xl p-2 "
          >
            About
          </a>
          <a
            href="#skills"
            className="pointer-cursor hover:bg-white/35 hover:backdrop-blur-lg hover:text-yellow-500 rounded-3xl p-2 "
          >
            Skills
          </a>
          
          <a
            href="#projects"
            className="pointer-cursor hover:bg-white/35 hover:backdrop-blur-lg hover:text-yellow-500 rounded-3xl p-2"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="pointer-cursor hover:bg-white/35 hover:backdrop-blur-lg hover:text-yellow-500 rounded-3xl p-2"
          >
            Contact
          </a>
        </div>
        {/* Button */}
        <div className=" hidden sm:block">
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
