import React from 'react'
import Navbar from "../components/Navbar";
import Section1 from "../components/Section1";
import Footer from "../components/Footer";
import Work from "../components/Work";

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Section1/>
        <Work/>
        <Footer/>
    </div>
  );
};

export default Home;