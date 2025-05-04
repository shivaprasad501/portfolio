import About from '@/components/About'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Projects from '@/components/project'
import Navbar from '@/components/ui/navbar'


import React from 'react'

const Home = () => {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
        </div>
  )
}

export default Home
