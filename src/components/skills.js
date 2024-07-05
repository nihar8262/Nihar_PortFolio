import React, {  useState } from "react";
import image1 from "../Image/astro2.png"
import { Message } from "./message";
import { SkillsCard } from "./skillsCard";


export const Skills = () => {
    const [nav ,setNav]=useState(false);
   
  return (
    <div
    id="skills">
      <div className="flex relative flex-col justify-center items-center">

        {/* skills header */}
        <div  className="text-white text-center mt-10  w-[20rem] ">
          <h1 className=" font-bold  text-3xl mb-10 border-b-2 border-b-yellow-500 py-2">Skills</h1>
          <p className="">
            Here are some of my skills on which I have been working on for the
            past 3 years.
          </p>
        </div>
        {/* Skills container */}
       <div className=" justify-center">
       {/* <div className="hidden md:block absolute bottom-96 left-0 md:left-28 transfom transition duration-500 hover:scale-125 animate-spin">
            <img src={image4} alt="" className="w-24"/>
        </div>
        
        <div className=" absolute hidden md:block top-16 right-44 md:right-28 transfom transition duration-500 hover:scale-125  hover:translate-y-10   ">
            <img src={image3} alt="" className="w-24"/>
        </div> */}
        
        <div className=" absolute top-52 left-auto md:left-auto transfom transition duration-500 hover:scale-125  hover:-translate-y-10 animate-bounce">
            <button onClick={()=> setNav(!nav)}>
            {
                nav ? <Message/> :null
            }
            <img src={image1} alt="" className="w-24"/>
            </button>
        </div>
        
        {/* <div className="hidden md:block absolute bottom-0 right-20 md:right-20 md:bottom-0 transfom transition duration-500 hover:scale-125 hover:translate-x-10 hover:translate-y-5">
            <img src={image6} alt="" className="w-24"/>
        </div> */}
        

       <div>
        <SkillsCard/>
       </div>
       </div>
      </div>
    </div>
  );
};
