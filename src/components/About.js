import React, { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { skillSet, interestSet } from './aboutData';
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
        <a href="../resume/Ebenezer_Antwi_Resume.pdf" className="resume" target="_blank">View Resume</a>
    </>
  )
}

const Skills = () => {
  return (
    <>
      <h4 className="title">SKILLS</h4>
      <div className="skill-content">
        {skillSet.map((skill) =>{
          return (
            <div>
              <img src={`../images/skills/${skill.skill_img}`} alt={skill.skill_img_alt} />
              <p>{skill.skill_name}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

const Interest = () => {
  return (
    <>
      <h4 class="title">INTERESTS</h4>
      <div className="interest-content">
        {interestSet.map((interest)=> {
          return (
            <div>
              <img src={`../images/interests/${interest.interest_img}`} alt={interest.interest_img_alt}/>
              <h3>{interest.interest_name}</h3>
            </div>
          )
        })}
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
              <motion.p>This is the core service. I build websites and web applications from scratch, or redesign and update existing ones. This involves writing the HTML, CSS, and JavaScript code that makes up the front-end of a website or web application.</motion.p>
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
              <motion.p>I ensure that websites and web applications look good and function well on all devices, including desktop computers, laptops, tablets, and smartphones. I use a variety of techniques to make websites and web applications responsive, such as using CSS media queries and fluid layouts.</motion.p>
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
            <h2 onClick={openIt3}>Maintenance
            {isOpen3 ? <FaMinusCircle className="arrow-icon" />
              : <FaPlusCircle className="arrow-icon" />
            }
              </h2>
            {isOpen3 && (
              <motion.p>Maintenance and support for websites and web applications is important because it helps to keep them secure, up-to-date, and running smoothly. I can play a vital role in this process by fixing bugs, adding new features, updating to new versions of software, monitoring performance, and ensuring accessibility.</motion.p>
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