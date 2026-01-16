
import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { IoLink } from "react-icons/io5";


export const Projectcard = ({project}) => {
  
  return (
    <div className={project?.bg}>
      <a href={project?.webapp} target='_blank' rel="noopener noreferrer">
        <img src={project?.image} alt="" className='hover:scale-105 transition-all ease-in-out duration-500 rounded-md mb-4 w-full aspect-[16/9] object-cover'/>
      </a>
      <div className='flex flex-wrap gap-2 w-full text-white'>
        {project.tags.map((tag, index) => (
          <div key={index} className='bg-gray-600/30 text-xs rounded-3xl py-1 px-2 flex items-center gap-1.5'>
            <img src={tag.image} alt={tag.name} className='w-4 h-4 bg-white rounded-full object-contain' />
            <span>{tag.name}</span>
          </div>
        ))}
      </div>
      <h1 className='mt-2 mb-2 text-3xl text-slate-300'>{project.title}</h1>
      <p className='text-xs mb-2 text-slate-500'>{project.date}</p>
      <p className='mb-2 text-slate-500 text-xs md:text-sm'>
        {project.description}
      </p>
      <div className='flex gap-5 mt-5'>
        <a href={project.github} target='_blank' rel="noopener noreferrer" className='transform transition duration-500 hover:scale-125 border p-2 hover:bg-black rounded-full shadow-inner shadow-white/70 cursor-pointer'>
          <FaGithub size={25}/>
        </a>
        <a href={project.webapp} target='_blank' rel="noopener noreferrer" className='transform transition duration-500 hover:scale-125 border p-2 hover:bg-blue-600 rounded-full shadow-inner shadow-white/70 cursor-pointer'>
          <IoLink size={25}/>
        </a>
      </div>
    </div>
  )
}
