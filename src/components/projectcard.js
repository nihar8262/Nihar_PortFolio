
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
                      <a href={project?.webapp} target='_blank' rel="noopener noreferrer">
                      <img src={project?.image} alt="" className='hover:scale-105 transition-all ease-in-out duration-500 rounded-md mb-4 w-16/9 '/>
                      </a>
                        <div className='flex flex-wrap gap-2 w-full text-white '>
                     {  project.tags.map((tag)=>(
                            <h1 className='bg-gray-600/30 text-xs rounded-3xl py-1 px-1.5'>{tag}</h1>
                       ))}
                        </div>
                        <h1 className='mt-2 mb-2 text-3xl text-slate-300'>{project.title}</h1>
                        <p className='text-xs mb-2 text-slate-500 '>{project.date}</p>
                        <p className='mb-2 text-slate-500 text-xs md:text-sm'>
                            {project.description}
                        </p>
                        <div className='flex gap-10 mt-5'>
                        <div className='transform transition duration-500 hover:scale-150 cursor-pointer'>
                        <a href={project.github} target='_blank' rel="noopener noreferrer"><FaGithub size={35} 
                          onMouseOut={({target})=>target.style.color="white"}
                          onMouseOver={({target})=>target.style.color="#854CE6"}
                        /></a>
                        </div>
                        <div className='transform transition duration-500 hover:scale-150 cursor-pointer'>
                        <a href={project.webapp} target='_blank' rel="noopener noreferrer"><FaLink size={30}
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
