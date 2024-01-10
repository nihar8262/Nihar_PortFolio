import React from 'react'
import { Projectcard } from './projectcard'


export const Project = () => {
    
    // const [toggle,setToggle] = useState("all");
  return (
    <div id="projects">
    <div className="flex  flex-col justify-center items-center ">

      {/* Project header */}
      <div className="text-white text-center mt-10  w-[20rem] md:w-[35rem]">
        <h1 className="font-bold text-3xl mb-10 border-b-2 border-b-yellow-500 py-2">Projects</h1>
        <p className="">
        I have worked on a wide range of projects. 
        From web apps to android apps. Here are some of my projects.
        </p>
      </div>
      {/* Option */}
      <div className='flex gap-4 text-[#854CE6] p-1  mt-16 border border-[#854CE6] rounded-xl items-center justify-center bg-slate-900 md:text-xl'>
        
        <button  className=' p-1 border-[#854CE6] hover:text-yellow-500'>ALL</button>
        <button  className='border-l p-1 border-[#854CE6] hover:text-yellow-500'>WEB APP'S</button>
        <button className='border-l p-1 border-[#854CE6] hover:text-yellow-500'>ANDROID APP'S</button>
      </div>

      {/* projects */}
      <div className='relative'>
      
        <Projectcard/>
        {/* {
            toggle === "all" && 
            projects.map((project)=><Projectcard project={project} />)
        }
        {
            projects.filter((item)=> item.category === toggle)
            .map((project) => {
                <Projectcard project={project}/>
            })
        } */}
        
      </div>
      
    </div>
  </div>
  )
}

