import React from 'react'
import { experiences } from '../data/constants'

export const Experience = () => {
  return (
    <div id="exp">
    <div className="flex  flex-col justify-center items-center pt-40">

      {/* skills header */}
      <div className="text-white text-center mt-10  w-[30rem] md:w-[40rem]">
        <h1 className="font-bold text-3xl mb-10 border-b-2 border-b-yellow-500 py-2">Experiences</h1>
        <p className="">
        Here are some of my experiences in the field of web development and design.
        </p>
      </div>

      <div className='flex flex-col  gap-20 mt-10'>
        {
          experiences.map((experience) =>(
            <div className='pt-10 flex flex-row  space-x-10 justify-evenly'>
              <div className='flex flex-col items-center gap-5 '>
                 <div className=' border-2 p-1 rounded-full border-[#854CE6] shadow-lg shadow-indigo-500/25'>
                  <img src={experience.img} alt="" className='w-[5rem] h-[5rem] md:w-[8rem] md:h-[8rem] rounded-full'/>
                 </div>
                 <div className=' bg-[#854CE6] h-[50vh] w-[0.1rem]'></div>
              </div>

            <div className={experience.bg}>
              <div className='flex flex-col items-center pb-4'>
                <h1 className="text-3xl text-center text-white font-bold mb-5">{experience.role}</h1>
                <div className='bg-gradient-to-r from-black via-white to-black h-[1px] w-[45vw] '></div>
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <p className="text-slate-300 text-xl font-bold ">{experience.company}</p>
                  <p className="text-slate-300 text-sm pt-2">{experience.date}</p>
                </div>
                <div>
                  <p className="text-slate-300 text-lg font-semibold pt-4">{experience.location}</p>
                  <p className="text-slate-300 text-sm">{experience.type}</p>
                </div>

                {
                  experience.desc.map((item) =>(
                    <p className="text-slate-300 text-sm pt-1">• {item}</p>
                  ))
                }
                {/* {
                  experience.skills?.map((item)=>(
                    <div className=" border border-slate-500  p-2 flex  rounded-lg justify-center items-center gap-2 ">
                      <p className="text-white">{item.name}</p>
                    </div>
                  ))
                } */}
              </div>
            </div>
            </div>
          ))
        }
      </div>
      
    </div>
  </div>
  )
}
