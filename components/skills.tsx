import Image from 'next/image'
import React from 'react'
import Skillwrapper from './ui/skillwrapper'

const Skills = () => {
  return (
    <div className='sm:my-10 my-5 mx-20  '>
      <div className="sm:text-2xl text-base font-bold my-4">
        Technologies and tools that I use to create websites.
      </div>
      <div className='sm:flex  sm:gap-10'>
      <div className="rounded-2xl bg-gray-950 p-5 max-w-80 border-1 border-x-blue-500 mb-6">
        <div className="text-lg font-semibold mb-5">Frontend Development</div>
        <div className="flex flex-wrap gap-2">
          <Skillwrapper skill="JavaScript" image="js" />
          <Skillwrapper skill="TypeScript" image="ts" />
          <Skillwrapper skill="React.js" image="react" />
          <Skillwrapper skill="Next.js" image="nextjs" />
          <Skillwrapper skill="Redux" image="redux" />
          <Skillwrapper skill="Tailwind CSS" image="tailwind" />
          <Skillwrapper skill="HTML" image="html" />
          <Skillwrapper skill="CSS" image="css" />
        </div>
      </div>


      <div className="rounded-2xl bg-gray-950 p-5 max-w-80 border-1 border-x-blue-500 mb-6">
        <div className="text-lg font-semibold mb-5">Backend Development</div>
        <div className="flex flex-wrap gap-2">
          <Skillwrapper skill="Node.js" image="nodejs" />
          <Skillwrapper skill="Express.js" image="express" />
          <Skillwrapper skill="MongoDB" image="mongodb" />
          <Skillwrapper skill="PostgreSQL" image="postgresql" />
          <Skillwrapper skill="Prisma" image="prisma" />
        </div>
      </div>
      </div>
      <div className='sm:flex  sm:gap-10  '>
      <div className="rounded-2xl bg-gray-950 p-5 max-w-80 border-1 border-x-blue-500 mb-6 sm:mb-0 ">
        <div className="text-lg font-semibold mb-5">DevOps & Cloud Services</div>
        <div className="flex flex-wrap gap-2 ">
          <Skillwrapper skill="AWS(EC2,S3)" image="aws" />
          <Skillwrapper skill="Docker" image="docker" />
          <Skillwrapper skill="Nginx" image="nginx" />
          <Skillwrapper skill="Vercel" image="vercel" />
        </div>
      </div>
      <div className="rounded-2xl bg-gray-950 p-5 max-w-80 border-1 border-x-blue-500">
        <div className="text-lg font-semibold mb-5">Tools & Version Control</div>
        <div className="flex flex-wrap gap-2">
          <Skillwrapper skill="Git" image="git" />
          <Skillwrapper skill="GitHub" image="github" />
          <Skillwrapper skill="Postman" image="postman" />
          <Skillwrapper skill="VSCode" image="vscode" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Skills
