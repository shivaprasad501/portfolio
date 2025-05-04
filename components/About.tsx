import React from 'react';
import About_intro from './ui/About_intro';
import Skills from './skills';

const About = () => {
  return (
    <div id="About" className="bg-black text-white  flex items-center justify-center">
      <div className="max-w-4xl w-full px-6 mt-10">
    <About_intro/>
    <Skills/>
    </div>
    </div>

  );
};

export default About;
