import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { LuX } from 'react-icons/lu';
import htmlImg from '../images/skills/html.png';
import cssImg from '../images/skills/css.png';
import javascriptImg from '../images/skills/javascript.png';
import { Helmet } from 'react-helmet';



const Portfolio = () => {
  const overlay = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1
    },
    exit: {
      opacity: 0
    }
  }
  const myModal = {
    hidden: {
      y: '-100vh', 
      opacity: 0,
    },
    visible: {
      y: '-50%', 
      opacity: 1, 
      x: '-50%',
      transition: {
        delay: 0.3,
        ease: 'easeInOut',
      },
    },
    exit: {
      y: '100vh',
      opacity: 0,
    }
  }

  const cover = {
    hidden: {
      y: '-100%',
    },
    visible: {
      y: '0%',
      transition: {
        type: 'tween', ease: 'easeOut',
      }
    },
    exit: {
      y: '100%',
      opacity: 0,
      transition: {
          ease: 'easeOut',
      }
    }
  }

  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleModal2 = () => {
    setModal2(!modal2);
  }

  const handleMouseEnter = () => {
    setIsHovering(true);
  }

  const handleMouseLeave = () => {
    setIsHovering(false);
  }

  const handleMouseEnter2 = () => {
    setIsHovering2(true);
  }

  const handleMouseLeave2 = () => {
    setIsHovering2(false);
  }

  if(modal || modal2){
    document.body.classList.add('active-modal');
  }
  else{
    document.body.classList.remove('active-modal');
  }

  return (
    <>
      

      <AnimatePresence>
        {modal && (
        <motion.div 
          variants={overlay}
          initial='hidden'
          animate='visible'
          exit='exit'
          
          className="modal-overlay">

          <motion.div 
          variants={myModal}
          initial='hidden'
          animate='visible'
          exit='exit'
          
          className='modal'>
              <h2>PROJECT INFO</h2>
              <p>
                <li><b>Project URL: </b><a href="https://oria-charity-foundation.netlify.app/" target='_blank' rel='noreferrer'>View it here</a></li>
                <li><b>Project date: </b>Sep, 2023</li>
              </p>
              <h2>ABOUT PROJECT</h2>
              <p>
              A non-governmental organization(NGO) established to address specific social, humanitarian, or environmental issues by raising funds, providing resources, and conducting initiatives to support those in need.
              </p>
              <h2>STACK USED</h2>
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
              </div>
              <LuX className="close-modal" onClick={toggleModal} />
          </motion.div>
        </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {modal2 && (
          <motion.div 
          variants={overlay}
          initial='hidden'
          animate='visible'
          exit='exit'
          
          className="modal-overlay">

          <motion.div 
          variants={myModal}
          initial='hidden'
          animate='visible'
          exit='exit'
          
          className='modal'>
          <h2>PROJECT INFO</h2>
              <p>
                <li><b>Project URL: </b><a href="https://roxy-by-eben.netlify.app/" target='_blank' rel='noreferrer'> View it here</a></li>
                <li><b>Project date: </b> Sep, 2023</li>
              </p>
              <h2>ABOUT PROJECT</h2>
              <p>
                I was eager to use my skills and knowledge in HTML, CSS, and JavaScript to build something new, so I began searching for a project online. Eventually, I came across a template on a website and endeavored to rebuild it.
              </p>
              <h2>STACK USED</h2>
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
              </div>
              <LuX className="close-modal" onClick={toggleModal2} />
          </motion.div>
        </motion.div>
        )}
      </AnimatePresence>      

      <motion.div
        // initial={{ x: '100vw' }}
        // animate={{ x: 0 }}
        // transition={{ type: 'spring', stiffness: 100 }}

        className="portfolio-container">
        <Helmet>
              <title>Portfolio | Ebenezer Antwi</title>
              <meta name='description' content='The projects I have completed so far are shown on this page.' />
              <meta name='keywords' content='ebcodes,EbCodes,EBCODES, Ebenezer Antwi,ebenezerantwi,EbenezerAntwi, My Portfolio,ebenezerantwi.netlify.app' />

              <meta property='og:site_name' content='Ebenezer Antwi' />
              <meta property="og:url" content="https://ebenezerantwi.netlify.app/portfolio" />
              <meta property="og:type" content="website" />
              <meta property='og:title' content='Portfolio | Ebenezer Antwi' />
              <meta property='og:description' content='The projects I have completed so far are shown on this page.' />
              <meta property="og:image" itemProp='image' content="https://ebenezerantwi.netlify.app/images/og-image.jpg" />
              <meta property="og:image:width" content="300" />
              <meta property="og:image:height" content="300" />

              <meta name="twitter:card" content="summary_large_image" />
              <meta property="twitter:domain" content="ebenezerantwi.netlify.app" />
              <meta property="twitter:url" content="https://ebenezerantwi.netlify.app/portfolio" />
              <meta name="twitter:title" content="Portfolio | Ebenezer Antwi" />
              <meta name="twitter:description" content="The projects I have completed so far are shown on this page." />
              <meta name="twitter:image" content="https://ebenezerantwi.netlify.app/images/og-image.jpg" />
              <link rel='canonical' href='/' />
          </Helmet>


        <h4>PORTFOLIO</h4>
        <h2>MY PROJECTS</h2>
        <div className="projects-container">
          <div>
              <div className='wrapper' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <img src='./images/projects/project-1.png' alt='project-1' />
                  <AnimatePresence>
                      {isHovering && (
                        <motion.div className='cover' 
                            variants={cover}
                            initial='hidden'
                            animate='visible'
                            exit='exit'>
                              <h3>ORIA CHARITY FOUNDATION</h3>
                              <div>
                                <p onClick={toggleModal}>Info</p>
                                <a href='https://github.com/kwadwoambitious/Oria-Charity-Foundation' target='_blank' rel='noreferrer'>Github</a>
                              </div>
                        </motion.div>
                      )}
                  </AnimatePresence>
              </div>
          </div>
          <div>
              <div className='wrapper' onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
                        <img src='./images/projects/project-2.png' alt='project-2' />
                        <AnimatePresence>
                          {isHovering2 && (
                            <motion.div className='cover' 
                                  variants={cover}
                                  initial='hidden'
                                  animate='visible'
                                  exit='exit'>
                                  <h3>ROXY TEMPLATE</h3>
                                  <div>
                                    <p onClick={toggleModal2}>Info</p>
                                    <a href='https://github.com/kwadwoambitious/Roxy-Template' target='_blank' rel='noreferrer'>Github</a>
                                  </div>
                            </motion.div>
                          )}
                        </AnimatePresence>           
              </div>
          </div>
        </div>  
      </motion.div>
    </>
  )
}

export default Portfolio;