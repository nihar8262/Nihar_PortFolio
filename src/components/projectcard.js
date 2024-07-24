
import React from 'react'
import { FaGithub,FaLink } from 'react-icons/fa'


export const Projectcard = ({project}) => {
  
  return (
    <div
    >
        <div 
         className='hover:transform hover:transition hover:duration-500 '>
            {
             
                    <div
                    className={project?.bg}>
                      <a href={project?.webapp} target='_blank'>
                      <img src={project?.image} alt="" className='hover:scale-105 transition-all ease-in-out duration-500 rounded-md mb-4 h-48 md:h-40 lg:h-48 xl:h-52'/>
                      </a>
                        <div className='flex flex-wrap gap-2 w-[18rem] text-[#a277ec] '>
                     {  project.tags.map((tag)=>(
                            <h1 className='bg-purple-600/20 rounded-3xl p-2'>{tag}</h1>
                       ))}
                        </div>
                        <h1 className='mt-2 mb-2 text-3xl text-slate-300'>{project.title}</h1>
                        <p className='text-xs mb-2 text-slate-500 '>{project.date}</p>
                        <p className='mb-2 text-slate-500'>
                            {project.description}
                        </p>
                        <div className='flex gap-10 mt-5'>
                        <div className='transform transition duration-500 hover:scale-150 cursor-pointer'>
                        <a href={project.github} target='_blank'><FaGithub size={35} 
                          onMouseOut={({target})=>target.style.color="white"}
                          onMouseOver={({target})=>target.style.color="#854CE6"}
                        /></a>
                        </div>
                        <div className='transform transition duration-500 hover:scale-150 cursor-pointer'>
                        <a href={project.webapp} target='_blank'><FaLink size={30}
                          onMouseOut={({target})=>target.style.color="white"}
                          onMouseOver={({target})=>target.style.color="#854CE6"}
                        /></a>
                        </div>
                        </div>
                    </div>
               
            }
        </div>
      </div>
  )
}
