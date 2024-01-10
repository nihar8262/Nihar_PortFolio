import React from 'react'
import { FaGithub,FaLink } from 'react-icons/fa'
import { projects } from '../data/constants'

export const Projectcard = () => {
  return (
    <div className='flex items-center justify-center mt-20 mb-26 lg:w-[80rem] md:w-[50rem]'>
        <div className='flex flex-wrap justify-center'>
            {
                projects.map((item) =>(
                    <div className='bg-slate-900 p-6 w-[21rem] rounded-lg m-5 text-white md:w-[20rem] hover:shadow-md hover:shadow-slate-300/25 transform transition duration-500  hover:scale-105 '>
                        <img src={item?.image} alt="" className=' rounded-md mb-4 h-48 md:h-40'/>
                        <div className='flex flex-wrap gap-2 w-[18rem] text-[#854CE6] '>
                     {  item.tags.map((tag)=>(
                            <h1 className='bg-purple-600/20 rounded-3xl p-1'>{tag}</h1>
                       ))}
                        </div>
                        <h1 className='mt-2 mb-2 text-3xl text-slate-300'>{item.title}</h1>
                        <p className='text-xs mb-2 text-slate-500 '>{item.date}</p>
                        <p className='mb-2 text-slate-500'>
                            {item.description}
                        </p>
                        <div className='flex gap-10 mt-5'>
                        <div className='transform transiltion duration-500 hover:scale-150 cursor-pointer'>
                        <a href={item.github} target='_blank'><FaGithub size={35} 
                          onMouseOut={({target})=>target.style.color="white"}
                          onMouseOver={({target})=>target.style.color="#854CE6"}
                        /></a>
                        </div>
                        <div className='transform transiltion duration-500 hover:scale-150 cursor-pointer'>
                        <a href={item.webapp} target='_blank'><FaLink size={30}
                          onMouseOut={({target})=>target.style.color="white"}
                          onMouseOver={({target})=>target.style.color="#854CE6"}
                        /></a>
                        </div>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>
  )
}
