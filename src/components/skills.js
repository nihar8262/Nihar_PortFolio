import React, { useState } from "react";
import image1 from "../Image/astro2.png"
import { Message } from "./message";
import { SkillsCard } from "./skillsCard";

export const Skills = () => {
    const [nav, setNav] = useState(false);
   
  return (
    <div id="skills" className="bg-gradient-to-b from-[#1a1a2e] via-[#23234b] to-[#1a1a2e] py-6">
      <div className="flex relative flex-col justify-center items-center">

        {/* skills header */}
        <div className="text-white text-center mt-10 w-[20rem] md:w-[35rem] relative">
          <h1 className="font-bold text-3xl mb-10 border-b-2 border-b-yellow-500 py-2 relative">
            Skills
            {/* Image positioned on the yellow border */}
            <div className="absolute -bottom-5 left-1 transform -translate-x-1/2 transition duration-500 hover:scale-125 animate-bounce">
              <button onClick={() => setNav(!nav)}>
                {nav ? <Message/> : null}
                <img src={image1} alt="" className="w-16 md:w-20"/>
              </button>
            </div>
          </h1>
          <p className="mt-6">
            Here are some of my skills on which I have been working on for the
            past 3 years.
          </p>
        </div>

        {/* Skills container */}
        <div className="justify-center -mt-10 md:mt-10">
          <div>
            <SkillsCard/>
          </div>
        </div>
      </div>
    </div>
  );
};