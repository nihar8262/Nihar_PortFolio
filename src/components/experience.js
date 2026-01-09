import React from 'react'
import { experiences } from '../data/constants'

export const Experience = () => {
  return (
    <div id="exp" className="bg-gradient-to-b from-[#1a1a2e] via-[#23234b] to-[#1a1a2e] py-20">
      <div className="flex flex-col justify-center items-center">
        {/* skills header */}
        <div className="text-white text-center mt-10 w-[90vw] max-w-xl">
          <h1 className="font-bold text-3xl mb-6 border-b-2 border-b-yellow-500 py-2">Experiences</h1>
          <p className="text-slate-300">
            Here are some of my experiences in the IT field.
          </p>
        </div>

        <div className="flex flex-col gap-16 mt-12 w-full max-w-3xl">
          {experiences.map((experience, idx) => (
            <div
              key={idx}
              className="relative flex flex-col md:flex-row items-center md:items-start group"
            >
              {/* Timeline Dot and Line */}
              <div className="flex flex-col items-center md:mr-8">
                <div className="  flex items-center justify-center rounded-full border-4 border-[#854CE6] bg-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <img src={experience.img} alt="" className="w-[15vw] md:w-[5vw]  rounded-full" />
                </div>
                {idx !== experiences.length  && (
                  <div className="hidden md:block w-0.5 bg-gradient-to-b from-[#854CE6] to-transparent h-[50vh] mt-2"></div>
                )}
              </div>

              {/* Experience Card */}
              <div
                className={`mt-6 md:mt-0 flex-1 bg-[#23234b] bg-opacity-80 rounded-2xl shadow-lg border border-[#854CE6] p-6 md:p-8 transition-all duration-300 hover:scale-[1.025] hover:shadow-2xl ${experience.bg}`}
              >
                <div className="flex flex-col items-center md:items-start pb-4">
                  <h1 className="text-2xl md:text-3xl text-white font-bold mb-2">{experience.role}</h1>
                  <div className="bg-gradient-to-r from-[#854CE6] via-white to-[#854CE6] h-[2px] w-24 mb-2"></div>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between gap-2 mb-2">
                  <div>
                    <p className="text-yellow-400 text-lg font-bold">{experience.company}</p>
                    <p className="text-slate-400 text-xs">{experience.date}</p>
                  </div>
                  <div>
                    <p className="text-slate-300 text-base font-semibold">{experience.location}</p>
                    <p className="text-slate-400 text-xs">{experience.type}</p>
                  </div>
                </div>
                <ul className="list-disc list-inside text-slate-300 text-sm mb-3 space-y-1">
                  {experience.desc.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <p className="pt-2 font-bold text-white">Skills</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {experience.skills?.map((item, i) => (
                    <div
                      key={i}
                      className="border border-slate-500 hover:bg-white/80 text-white hover:text-black p-1 pr-2 flex items-center rounded-full gap-2 shadow-sm"
                    >
                      <img src={item.image} alt="" className="w-6 h-6 rounded-full aspect-square" />
                      <p className="text-xs">{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}