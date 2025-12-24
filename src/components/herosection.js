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
              rel="noopener noreferrer">
<button class="border text-gray-50  duration-300 relative group cursor-pointer   overflow-hidden h-12 w-40 rounded-full  p-2  font-extrabold hover:bg-[#631fd9]">

  <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150 group-hover:blur-md  duration-700 right-12 top-8 bg-yellow-500"></div>
  <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150 group-hover:blur-md duration-700 right-20 -top-6 bg-orange-500"></div>
  <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8   rounded-full group-hover:scale-150 group-hover:blur-md duration-700 right-32 top-6 bg-pink-500"></div>
  <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4   rounded-full group-hover:scale-150 group-hover:blur-md duration-700 right-2 top-8 bg-red-600"></div>
  <p class="z-10 absolute bottom-[.8rem] left-[2.8rem]">Resume</p>
</button>

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