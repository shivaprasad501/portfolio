import React from 'react';
import ProjectWrapper from './ui/project-wrapper';
import { ProjectData } from '@/data';

const Projects = () => {
  return (
    <div id='Projects' className='mx-10 sm:mx-20 mt-10'>
      <div className='text-5xl text-center mb-5 font-bold ' >Latest work</div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2 md:gap-4 justify-center items-center'>
        {ProjectData.map((project, index) => (
          <ProjectWrapper
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
