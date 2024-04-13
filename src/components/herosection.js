import React from "react";
import image from "../Image/Nihar.jpg";
import { Bio } from "../data/constants";
import Typewriter from "typewriter-effect";
// import {HeroBgAnimation} from "../components/HeroBgAnimation/index"
// justify-center items-center gap-16 top-1/2 bottom-0 right-0 left-1/2 overflow-hidden w-full h-full px-0 py-7
export const Herosection = ({isDropdown,closeModal}) => {
  return (
    <div id="about" >
      <div className=" md:flex md:flex-row-reverse  w-full justify-center  items-center  mx-auto">
         {/* image */}
        {/* <HeroBgAnimation/> */}
        <div className=" md:w-full h-full flex justify-center  ">
          <img
            src={image} alt=""
            className=" w-[20rem] md:w-[15rem] rounded-full relative  border-2 border-[#854CE6] hover:shadow-xl hover:shadow-indigo-500/25 mt-8"
          />
        </div>
        {/* hero header */}
        <div className=" w-full  justify-center text-center mt-10 px-32 md:items-start md:text-start">
          <p className="text-white font-bold md:text-2xl mb-4 ">
            Hi,I am
            <br/>
            {Bio.name}
          </p>
          <div className="font-bold w-[full] justify-center text-xs sm:text-xl md:text-2xl flex gap-2 items-center text-white mb-4 md:text-start md:justify-start">
          I am a
            <span className="role  md:text-2xl font-bold text-[#854CE6]">
              <Typewriter
                options={{
                  strings: Bio.roles,
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>
          {/* desc */}
          <div className="mb-4   md:w-full">
            <p className="text-slate-500">{Bio.description}</p>
          </div>
          {/* button */}
          <div className="mb-5">
            <a
              href={Bio.resume} target="_blank"
              class="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
            >
              <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
              <span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
              <span class="relative text-white">Resume</span>
            </a>
          </div>
        </div>
       
      </div>
    </div>
  );
};
