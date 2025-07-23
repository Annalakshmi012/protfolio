import React from 'react'
import './Hero.css'
import my from '../../assets/my.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { TypeAnimation } from 'react-type-animation';
const Hero = () => {
  return (
    <div id='home' className='hero'>
       <img src={my} alt="" /> 
   <h1>
  <span>I'm Annalakshmi </span>
  <span className="type-white">
    <TypeAnimation
    sequence={[
  'Full Stack Java Developer', 2000,
  'MERN & Core Java Learner', 2000,
  'Ready for My First Role', 2000,
]}

      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  </span>
</h1>


       <p>Hi, I'm Annalakshmi, a passionate Full Stack Developer and recent Computer Science graduate. I'm eager to apply my skills in building dynamic web applications and solving real-world problems. As a fresher, I'm actively seeking opportunities
         in software development to contribute and grow in a collaborative environment.</p>
      <div className="hero-action">
          <div className="hero-connect">
          <AnchorLink
            className="anchor-link"
            href="#contact"
            offset="50"
          >
            Connect with me
          </AnchorLink>
        </div>
      <a
  href="/ANNALAKSHMI_D.pdf"
  target="_blank"
  rel="noopener noreferrer"
  download="ANNALAKSHMI_D.pdf"
  className="hero-resume"
>
  My resume
</a>


      </div>
    </div>
  )
}

export default Hero
