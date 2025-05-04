import React from 'react'

const Skillwrapper = ({skill,image}:{skill:string,image:string}) => {
  return (
    <div className='flex gap-2 justify-center items-center p-2  border border-blue-300 border-x-blue-500 text-white max-w-[150px] rounded-2xl'>
      <img className='sm:w-5 sm:h-5 w-4 h-4' src={`https://skillicons.dev/icons?i=${image}`}/>
      <div className='text-xs sm:text-base'>{skill}</div>
    </div>
  )
}

export default Skillwrapper
