import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.png'
import { FaLinkedin, FaGithub, FaCode } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        
          <div className="footer-top-left">
            <img src={footer_logo} alt="Logo" />
            <p>
              Thank you for visiting my portfolio. Let’s connect and create something meaningful together!
            </p>
          </div>

          <div className="footer-top-right">
            <a href="https://www.linkedin.com/in/annalakshmi-durai/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="footer-icon" />
            </a>
            <a href="https://github.com/Annalakshmi012/" target="_blank" rel="noopener noreferrer">
              <FaGithub className="footer-icon" />
            </a>
            <a href="https://leetcode.com/u/Annalakshmi012/" target="_blank" rel="noopener noreferrer">
              <FaCode className="footer-icon" />
            </a>
          </div>
        
          </div>
       
       <div className="footer-bottom">
       <div className="footer-bottom-left">
         © {new Date().getFullYear()} Annalakshmi. All rights reserved. <br />
    Designed and Developed by Annalakshmi | Powered by Passion and Precision.

       </div>
    </div>
    </div>
  )
}

export default Footer
