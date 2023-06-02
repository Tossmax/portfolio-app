import React from 'react'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section2 from "../components/Section2";
import Pricing from '../components/Pricing';
import Work from '../components/Work';

const Project = () => {
  return (
    <div>
      <Navbar/>
      <Section2 heading="PROJECTS." text="Some of my most recent works" />
      <Work/>
      <Pricing/>
      <Footer/>
    </div>
  )
}

export default Project;