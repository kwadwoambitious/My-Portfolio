import React from "react";
import { motion } from 'framer-motion';
import htmlImg from '../images/skills/html.png';
import cssImg from '../images/skills/css.png';
import javascriptImg from '../images/skills/javascript.png';
import bootstrapImg from '../images/skills/bootstrap.png';
import gitImg from '../images/skills/git.png';
import githubImg from '../images/skills/github.png';
import reactImg from '../images/skills/reactjs.svg';
import vscodeImg from '../images/skills/vscode.svg';
import writingImg from '../components/images/interests/writing.svg';
import musicImg from '../components/images/interests/music.svg';
import readingImg from '../components/images/interests/reading.svg';
import selfDevImg from '../components/images/interests/self-development.svg';
import basketballImg from '../components/images/interests/basketball.svg';
import moviesImg from '../components/images/interests/movies.svg';
import programmingImg from '../components/images/interests/programming.svg';
import peaceImg from '../components/images/interests/calm-atmosphere.svg';

const AboutMe = () => {
  return(
    <>
        <h4>ABOUT</h4>
        <h2>GET TO KNOW ME WELL</h2>
        <h3>Front-end Developer</h3>
        <p>As a seasoned front-end developer specializing in HTML, CSS, JavaScript, and React, I bring a comprehensive skill set to web development. My expertise encompasses crafting clean and semantic HTML, employing advanced CSS techniques for responsive and visually appealing designs, and building dynamic interfaces with JavaScript, utilizing modern frameworks like React. </p>
        <p>With a user-centric focus, I prioritize creating intuitive and engaging experiences, incorporating feedback to iteratively enhance designs. A collaborative team player, I communicate effectively with designers, back-end developers, and stakeholders to translate concepts into functional code.  </p>
        <p> Committed to continuous learning, I stay updated on emerging technologies, ensuring my work remains cutting-edge and adaptable in the ever-evolving landscape of web development. My goal is to contribute to projects that not only meet technical requirements but also surpass user expectations, leaving a lasting impact in the digital sphere.</p>
        <a href="https://google.com" className="resume">Download Resume</a>
    </>
  )
}

const Skills = () => {
  return (
    <>
      <h4 className="title">SKILLS</h4>
      <div className="skill-content">
        <div>
          <img src={htmlImg} alt="html logo"/>
          <p>HTML</p>
        </div>
        <div>
          <img src={cssImg} alt="css logo"/>
          <p>CSS</p>
        </div>
        <div>
          <img src={javascriptImg} alt="javascript logo"/>
          <p>JavaScript</p>
        </div>
        <div>
          <img src={bootstrapImg} alt="bootstrap logo"/>
          <p>Bootstrap</p>
        </div>
        <div>
          <img src={reactImg} alt="react logo"/>
          <p>React</p>
        </div>
        <div>
          <img src={gitImg} alt="git logo"/>
          <p>Git</p>
        </div>
        <div>
          <img src={githubImg} alt="github logo"/>
          <p>GitHub</p>
        </div>
        <div>
          <img src={vscodeImg} alt="vscode logo"/>
          <p>VsCode</p>
        </div>
      </div>
    </>
  )
}

const Interest = () => {
  return (
    <>
      <h4 class="title">INTERESTS</h4>
      <div className="interest-content">
        <div>
          <img src={writingImg} alt="writing img"/>
          <h3>Writing</h3>
        </div>
        <div>
          <img src={musicImg} alt="music img"/>
          <h3>Music</h3>
        </div>
        <div>
          <img src={readingImg} alt="reading img"/>
          <h3>Reading</h3>
        </div>
        <div>
          <img src={selfDevImg} alt="self development img"/>
          <h3>Self Development</h3>
        </div>
        <div>
          <img src={basketballImg} alt="basketball img"/>
          <h3>BasketBall</h3>
        </div>
        <div>
          <img src={moviesImg} alt="movies img"/>
          <h3>Movies</h3>
        </div>
        <div>
          <img src={programmingImg} alt="programming img"/>
          <h3>Programming</h3>
        </div>
        <div>
          <img src={peaceImg} alt="peace img"/>
          <h3>Calm Atmosphere</h3>
        </div>
      </div>
    </>
  )
}

const Services = () => {
  return (
    <>
      <h4 className="title">SERVICES</h4>
    </>
  )
}

const About = () => {
  return (
    <>
      <motion.div 
        // initial={{ x: '100vw' }}
        // animate={{ x: 0 }}
        // transition={{ type: 'spring', stiffness: 100 }}

        className='about-container'>
        <AboutMe/>
        <Skills/>
        <Interest/>
        <Services/>
      </motion.div>
    </>
    
  )
}

export default About;