import React from 'react'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section2 from "../components/Section2";
import ContactContent from '../components/ContactContent';

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Section2 heading="CONTACT ME." text="Let's have a chat"/>
      <ContactContent/>
      <Footer/>
    </div>
  )
}

export default Contact;