import React from 'react'
import './About.css'
import my from'../../assets/my2.jpg'
import theme_pattern from '../../assets/theme_pattern.svg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
              <img src={my} alt="" />         
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I’m Annalakshmi D, a dedicated Full Stack Developer and Computer Science student with strong skills in web and software development.Proficient in Java, Python, React JS, Node.js, and database management, I enjoy solving complex problems through code.</p>
                    </div>
                <div className="about-skills">
                <div className="about-skill">
                        <p>C Programming</p><hr style={{width:"90%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>HTML & CSS</p><hr style={{width:"80%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>JavaScript</p><hr style={{width:"70%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>React JS</p><hr style={{width:"50%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>Node JS</p><hr style={{width:"40%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>Java</p><hr style={{width:"70%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>Python</p><hr style={{width:"50%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>SQL</p><hr style={{width:"80%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>MongoDB</p><hr style={{width:"70%"}}/>
                    </div>
                </div>
            </div>
        </div>
        <div className="about-achievments">
   
   
    
    <div className="about-achievment">
        <h1>71%</h1>
        <p>NPTEL Java Exam</p>
    </div>
   
    <hr />
    <div className="about-achievment">
        <h1>SIH 2024</h1>
        <p>Hackathon Winner</p>
    </div>
    <hr />
    <div className="about-achievment">
        <h1>₹7,500</h1>
        <p>TNSCST Grant Project</p>
    </div>
     <hr />
    <div className="about-achievment">
        <h1>100+</h1>
        <p>DSA Problems Solved</p>
    </div>
</div>


      
    </div>
  )
}

export default About
