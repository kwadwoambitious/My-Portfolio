import React, { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
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
import { Helmet } from "react-helmet";
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

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
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const openIt = () => {
    setIsOpen(!isOpen);
  }
  const openIt2 = () => {
    setIsOpen2(!isOpen2);
  }
  const openIt3 = () => {
    setIsOpen3(!isOpen3);
  }

  const openService = {
    hidden: {
      height: '80px',
    },
    visible: {
      height: '100%',
    },
  }
  return (
    <>
      <h4 className="title">SERVICES</h4>
      <div className="services-container">
      <AnimatePresence>
        <motion.div 
        variants={openService}
        initial='hidden'
        animate='visible'
        exit='exit'
        
        className="service">
          <h2 onClick={openIt}>Web Development 
            {isOpen ? <FaMinusCircle className="arrow-icon" />
              : <FaPlusCircle className="arrow-icon" />  
            }
          </h2>
            {isOpen && (
              <motion.p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis eligendi non quidem molestiae odio officia nulla nemo, tempore recusandae ab optio maiores harum! Molestias quis optio, libero earum eaque amet temporibus placeat nobis asperiores ad necessitatibus nostrum aspernatur ipsum repellat accusamus vero consequuntur! Dolores natus accusamus tempore aspernatur consequatur quos!</motion.p>
            )}
          
        </motion.div>
      </AnimatePresence>
        <AnimatePresence>
          <motion.div 
          variants={openService}
          initial='hidden'
          animate='visible'
          exit='exit'
          
          className="service">
            <h2 onClick={openIt2}>Responsive Design
            {isOpen2 ? <FaMinusCircle className="arrow-icon" />
              : <FaPlusCircle className="arrow-icon" />
            }
              </h2>
            {isOpen2 && (
              <motion.p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis dolore possimus? Dicta deleniti iusto earum veritatis! Est dignissimos dolorum ut iure provident aut labore eos, error quae quo, at quaerat distinctio ipsum. Reiciendis eum animi sed explicabo, rem eveniet, consequuntur fugiat quibusdam harum ullam iusto tempora amet vero nostrum.</motion.p>
            )}
          </motion.div>
        </AnimatePresence>
        <AnimatePresence>
          <motion.div 
          variants={openService}
          initial='hidden'
          animate='visible'
          exit='exit'
          
          className="service">
            <h2 onClick={openIt3}>Website Management
            {isOpen3 ? <FaMinusCircle className="arrow-icon" />
              : <FaPlusCircle className="arrow-icon" />
            }
              </h2>
            {isOpen3 && (
              <motion.p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis eligendi non quidem molestiae odio officia nulla nemo, tempore recusandae ab optio maiores harum! Molestias quis optio, libero earum eaque amet temporibus placeat nobis asperiores ad necessitatibus nostrum aspernatur ipsum repellat accusamus vero consequuntur! Dolores natus accusamus tempore aspernatur consequatur quos!</motion.p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
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
          <Helmet>
              <title>About | Ebenezer Antwi</title>
              <meta name='description' content='This page shows what I actually do, my skills, and interests.' />
              <meta name='keywords' content='ebcodes,EbCodes,EBCODES, Ebenezer Antwi,ebenezerantwi,EbenezerAntwi, My Portfolio,ebenezerantwi.netlify.app' />

              <meta property='og:site_name' content='Ebenezer Antwi' />
              <meta property="og:url" content="https://ebenezerantwi.netlify.app/about" />
              <meta property="og:type" content="website" />
              <meta property='og:title' content='About | Ebenezer Antwi' />
              <meta property='og:description' content='This page shows what I actually do, my skills, and interests.' />
              <meta property="og:image" itemProp='image' content="https://ebenezerantwi.netlify.app/images/og-image-1.png" />
              <meta property="og:image:width" content="300" />
              <meta property="og:image:height" content="300" />

              <meta name="twitter:card" content="summary_large_image" />
              <meta property="twitter:domain" content="ebenezerantwi.netlify.app" />
              <meta property="twitter:url" content="https://ebenezerantwi.netlify.app/about" />
              <meta name="twitter:title" content="About | Ebenezer Antwi" />
              <meta name="twitter:description" content="This page shows what I actually do, my skills, and interests." />
              <meta name="twitter:image" content="https://ebenezerantwi.netlify.app/images/og-image-1.png" />
              <link rel='canonical' href='/' />
        </Helmet>

        <AboutMe/>
        <Skills/>
        <Interest/>
        <Services/>
      </motion.div>
    </>
    
  )
}

export default About;