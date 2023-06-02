import React from 'react'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section2 from "../components/Section2";
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
      <Navbar/>
      <Section2 heading="ABOUT ME." text="I'm a friendly front-end Developer"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About;