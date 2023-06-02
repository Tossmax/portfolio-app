import "./Footerstyles.css";

import React from 'react'

import {FaHome, FaPhone, FaMailBulk, FaLinkedin, FaFacebook, FaTwitter} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome  size={20}  style={{color: "#fff", marginRight: "2rem"}}/>
                    <div>
                        <p>Ilaro.</p>
                        <p>Ogun State, Nigeria.</p>
                    </div>
                </div>
                <div className="phone">
                        <h4><FaPhone  size={20}  style={{color: "#fff", marginRight: "2rem"}}/> +2348136320222</h4>
                    </div>
                    <div className="email">
                        <h4><FaMailBulk  size={20}  style={{color: "#fff", marginRight: "2rem"}}/> tossmax61@gmail.com</h4>
                    </div>
            </div>
            <div className="right">
                <h4>About me</h4>
                <p>Hello, this is Ahmed Ogunbiyi. A UX Designer &
                     a React developer
                    who loves solving problems. I enjoy building 
                    a project that solves user problems
                    and design challenges.
                </p>
                <div className="social">
                    <FaFacebook  size={30}  style={{color: "#fff", marginRight: "1rem"}}/>
                    <FaTwitter  size={30}  style={{color: "#fff", marginRight: "1rem"}}/>
                    <FaLinkedin  size={30}  style={{color: "#fff", marginRight: "1rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;