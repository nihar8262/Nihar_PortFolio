import React from "react";
import image from "../Image/portrait.jpg";
import { Bio } from "../data/constants";
import Typewriter from "typewriter-effect";

export const Herosection = ({ isDropdown, closeModal }) => {
  return (
    <div id="about" className="w-full px-4 py-8 md:py-16 bg-gradient-to-b from-[#1a1a2e] via-[#23234b] to-[#1a1a2e]">
      <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-center max-w-5xl mx-auto gap-6 md:gap-16">
        {/* hero header */}
        <div className="w-full flex flex-col items-center md:items-start text-center md:text-left mt-6 md:mt-0">
          <p className="text-white font-bold text-lg sm:text-xl md:text-2xl mb-2">
            Hi, I am
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl text-[#854CE6]">{Bio.name}</span>
          </p>
          <div className="font-bold text-sm sm:text-lg md:text-2xl flex gap-2 items-center text-white mb-3">
            I am a
            <span className="role font-bold text-[#854CE6]">
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
          <div className="mb-4 w-full max-w-xs sm:max-w-md md:max-w-lg">
            <p className="text-slate-400 text-xs sm:text-sm md:text-base">{Bio.description}</p>
          </div>
          {/* button */}
          <div className="mb-5">
            <a
              href={Bio.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
              <span className="absolute bottom-0 right-0 block w-40 h-40 mb-16 mr-2 transition duration-500 origin-bottom-left transform rotate-45 translate-x-12 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
              <span className="relative text-white">Resume</span>
            </a>
          </div>
        </div>
        {/* image */}
        <div className="flex justify-center items-center w-full">
          <img
            src={image}
            alt=""
            className="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-[#854CE6] shadow-xl hover:shadow-indigo-500/25 object-cover"
          />
        </div>
      </div>
    </div>
  );
};