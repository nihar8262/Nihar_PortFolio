import React, { useState } from 'react'
import { Projectcard } from './projectcard'
import image from "../Image/astro1.png"
import { projects } from '../data/constants'
import { Message1 } from './message1'

export const Project = () => {
  const [filtered, setFilter] = useState(projects);
  const [project] = useState(projects);
  const [nav, setNav] = useState(false);
  const [active, setActive] = useState("all");

  function allProject() {
    setFilter(project);
    setActive("all");
  }

  function filterProject(cat) {
    const filter = projects.filter(project => project.category === cat);
    setFilter(filter);
    setActive(cat);
  }

  return (
    <div id="projects" className="w-full bg-gradient-to-b from-[#1a1a2e] via-[#23234b] to-[#1a1a2e] py-16 px-2">
      <div className="relative flex flex-col justify-center items-center">
        {/* Project header */}
        <div className="text-white text-center mt-10 w-full max-w-2xl">
          <h1 className="font-bold text-3xl mb-6 border-b-2 border-b-yellow-500 py-2">Projects</h1>
          <p className="text-slate-300">
            I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
          </p>
        </div>
        {/* Option */}
        <div className="flex gap-2 sm:gap-4 text-[#854CE6] p-1 mt-10 border border-[#854CE6] rounded-full items-center justify-center bg-slate-900/80 md:text-xl shadow-lg">
          <button
            onClick={allProject}
            className={`px-4 py-2 rounded-full transition-all font-semibold
              ${active === "all" ? "bg-[#854CE6] text-white shadow" : "hover:bg-[#854CE6]/20 hover:text-yellow-500"}
            `}
          >
            ALL
          </button>
          <button
            onClick={() => filterProject("web")}
            className={`px-4 py-2 rounded-full transition-all font-semibold border-l border-[#854CE6]
              ${active === "web" ? "bg-[#854CE6] text-white shadow" : "hover:bg-[#854CE6]/20 hover:text-yellow-500"}
            `}
          >
            WEB APP'S
          </button>
          <button
            onClick={() => filterProject("android app")}
            className={`px-4 py-2 rounded-full transition-all font-semibold border-l border-[#854CE6]
              ${active === "android app" ? "bg-[#854CE6] text-white shadow" : "hover:bg-[#854CE6]/20 hover:text-yellow-500"}
            `}
          >
            ANDROID APP'S
          </button>
        </div>
        {/* Astro Button */}
        <div className="absolute top-2 left-2 md:top-10 md:left-20 transform transition duration-500 ">
          <button onClick={() => setNav(!nav)}>
            {nav ? <Message1 /> : null}
            <img src={image} alt="" className="w-20 md:w-24 drop-shadow-lg" />
          </button>
        </div>
        {/* Projects */}
        <div className="w-full flex flex-wrap gap-8 items-center justify-center mt-12">
          {filtered.map((project, idx) => (
            <div key={idx} className="transition-transform duration-300 hover:scale-105">
              <Projectcard project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}