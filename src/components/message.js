import React from 'react'

export const Message = () => {
  return (
    <div className='flex flex-col flex-wrap w-[8rem]  text-white bg-white/30 rounded-lg text-sm p-3 absolute -top-0 left-16 -z-10'>
        <a href='#about' className='border-b-2 border-yellow-500'>About</a>
        <a href='#skills' className='border-b-2 mt-2 border-yellow-500'>Skills</a>
        <a href='#projects' className='border-b-2 mt-2 border-yellow-500'>Project</a>
        <a href='#contact' className='border-b-2 mt-2 border-yellow-500'>Contact</a>

        
    </div>
  )
}
