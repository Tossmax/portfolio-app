import "./AboutContentstyles.css";

import React from 'react'
import { Link } from "react-router-dom";
import r11 from "../assets/2.jpg";
import r12 from "../assets/15.jpg";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I'm a react front-end Developer. I create responsive secure websites for any clients.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={r11} className="img" alt="me"/>
                </div>
                <div className="img-stack bottom">
                    <img src={r12} className="img" alt="me"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent;