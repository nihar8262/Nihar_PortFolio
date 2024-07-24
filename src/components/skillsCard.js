
import React, { useRef } from 'react'
import { skills } from "../data/constants";
import {motion,useScroll, useTransform} from "framer-motion"

export const SkillsCard = () => {
    const ref = useRef(null);
    const{ scrollYProgress} = useScroll({
         target:ref,
         offset:["0 1","1.13 1"]
     })
     const scaleProgress = useTransform(scrollYProgress,[0,1],[0.6,1] );
     const opacityProgress = useTransform(scrollYProgress,[0,1],[0.4,1]);
  return (
    <motion.div ref={ref} 
    style={{
      scale:scaleProgress,
      opacity:opacityProgress,
    }}
    
    className="w-[20rem] md:grid md:grid-cols-2  md:gap-10  mt-10  md:w-[36rem] lg:w-[50rem]  ">
            {
                skills.map((skill) =>(
                    <div className="border-2 border-[#854CE6] shadow-lg shadow-indigo-500/25  mt-5 p-5 rounded-lg mb-10 ">
                        <h1 className="text-3xl text-center text-slate-500 font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500  ">{skill.title}</h1>
                        <div className="flex  flex-wrap gap-4 items-center justify-center">
                            {
                                skill.skills.map((item)=>(
                                    
                                    <div className=" border border-slate-500  p-2 flex  rounded-lg justify-center items-center gap-2 ">
                                        <img src={item.image} alt="" className="w-5 "/><p className="text-white">{item.name}</p>
                                    </div>
                                    
                                ))
                            }
                        </div>
                    </div>
               ))
            }
            
        </motion.div>
  )
}
