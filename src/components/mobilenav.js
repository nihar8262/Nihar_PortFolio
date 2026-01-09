import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { Bio } from '../data/constants'

export const Mobilenav = ({ onClose }) => {
  
  
  return (
    <div className='flex flex-col w-[25rem] p-7 shadow-md shadow-black bg-black/50 backdrop-blur-xl rounded-3xl fixed text-3xl top-12 right-0 z-50 border border-white/20'>
      <div className='flex flex-col'>
        <a href='#about' onClick={onClose} className='border-b-2 border-yellow-500'>About</a>
        <a href='#exp' onClick={onClose} className='border-b-2 mt-2 border-yellow-500'>Experiences</a>
        <a href='#skills' onClick={onClose} className='border-b-2 mt-2 border-yellow-500'>Skills</a>
        <a href='#projects' onClick={onClose} className='border-b-2 mt-2 border-yellow-500'>Project</a>
        <a href='#contact' onClick={onClose} className='border-b-2 mt-2 border-yellow-500'>Contact</a>

        {/* button */}
        <div className="mt-4">
          <a
            href={Bio.github} 
            target='_blank'
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center p-3 px-5 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-500 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
              <FaGithub />
            </span>
            <span className="relative invisible">Github</span>
          </a>
        </div>
      </div>
    </div>
  )
}