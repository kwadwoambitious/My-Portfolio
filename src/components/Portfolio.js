import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { LuX } from 'react-icons/lu';
import project1 from '../components/images/projects/project-1.png';
import project2 from '../components/images/projects/project-2.png';
import project3 from '../components/images/projects/project-3.png';
import htmlImg from '../images/skills/html.png';
import cssImg from '../images/skills/css.png';
import javascriptImg from '../images/skills/javascript.png';



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

  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const [isHovering3, setIsHovering3] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleModal2 = () => {
    setModal2(!modal2);
  }

  const toggleModal3 = () => {
    setModal3(!modal3);
  }

  const handleMouseOver = () => {
    setIsHovering(true);
  }

  const handleMouseOut = () => {
    setIsHovering(false);
  }

  const handleMouseOver2 = () => {
    setIsHovering2(true);
  }

  const handleMouseOut2 = () => {
    setIsHovering2(false);
  }

  const handleMouseOver3 = () => {
    setIsHovering3(true);
  }

  const handleMouseOut3 = () => {
    setIsHovering3(false);
  }

  if(modal || modal2 || modal3){
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
          <h1>Original Trombones</h1>
          <img src={project1} alt='project-1' onClick={toggleModal} />
              <h2>PROJECT INFO</h2>
              <p>
                <li><b>Project URL: </b><a href="https://linkedin.com" target='_blank' rel='noreferrer'>Original Trombones</a></li>
                <li><b>Date created: </b>Mar 2023</li>
              </p>
              <h2>ABOUT PROJECT</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
                perferendis suscipit officia recusandae, eveniet quaerat assumenda
                id fugit, dignissimos maxime non natus placeat illo iusto!
                Sapiente dolorum id maiores dolores? Illum pariatur possimus
                quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
                placeat tempora vitae enim incidunt porro fuga ea.
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
          <h2>Hello Modal 2</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
                perferendis suscipit officia recusandae, eveniet quaerat assumenda
                id fugit, dignissimos maxime non natus placeat illo iusto!
                Sapiente dolorum id maiores dolores? Illum pariatur possimus
                quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
                placeat tempora vitae enim incidunt porro fuga ea.
              </p>
              <LuX className="close-modal" onClick={toggleModal2} />
          </motion.div>
        </motion.div>
        )}
      </AnimatePresence>    

      <AnimatePresence>
        {modal3 && (
          <motion.div className="modal-overlay"
          variants={overlay}
          initial='hidden'
          animate='visible'
          exit='exit'
          >

          <motion.div className='modal'
          variants={myModal}
          initial='hidden'
          animate='visible'
          exit='exit'
          >
          <h2>Hello Modal 3</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
                perferendis suscipit officia recusandae, eveniet quaerat assumenda
                id fugit, dignissimos maxime non natus placeat illo iusto!
                Sapiente dolorum id maiores dolores? Illum pariatur possimus
                quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
                placeat tempora vitae enim incidunt porro fuga ea.
              </p>
              <LuX className="close-modal" onClick={toggleModal3} />
          </motion.div>
        </motion.div>
        )}
      </AnimatePresence>    

      <motion.div
        // initial={{ x: '100vw' }}
        // animate={{ x: 0 }}
        // transition={{ type: 'spring', stiffness: 100 }}

        className="portfolio-container">
        <h4>PORTFOLIO</h4>
        <h2>MY PROJECTS</h2>
        <div className="projects-container">
          <div>
               <div className='wrapper' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                  <h1>ORIA CHARITY FOUNDATION</h1>
                  <AnimatePresence>
                      {isHovering && (
                        <motion.div className='cover' 
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            transition={{ type: 'tween', ease: 'easeInOut' }}
                            exit={{ x: '-100%' }}
                        >
                              <h1>ORIA</h1>
                              <div>
                                <p onClick={toggleModal}>Info</p>
                                <a href='https://unsplash.com' rel='noreferrer'>Github</a>
                              </div>
                        </motion.div>
                      )}
                  </AnimatePresence>
               </div>
          </div>
          <div>
                <div className='wrapper' onMouseOver={handleMouseOver2} onMouseOut={handleMouseOut2}>
                        <h1>ROXY</h1>
                        <AnimatePresence>
                          {isHovering2 && (
                            <motion.div className='cover' 
                                initial={{ x: '-100%' }}
                                animate={{ x: 0 }}
                                transition={{ type: 'tween', ease: 'easeInOut' }}
                                exit={{ x: '-100%' }}
                            >
                                  <h1>ROXY</h1>
                                  <div>
                                    <p onClick={toggleModal2}>Info</p>
                                    <a href='https://pexel.com' rel='noreferrer'>Github</a>
                                  </div>
                            </motion.div>
                          )}
                  </AnimatePresence>
                    </div>
                </div>
          <div>
                <div className='wrapper' onMouseOver={handleMouseOver3} onMouseOut={handleMouseOut3}>
                        <h1>NICE</h1>
                        <AnimatePresence>
                          {isHovering3 && (
                            <motion.div className='cover' 
                                initial={{ x: '-100%' }}
                                animate={{ x: 0 }}
                                transition={{ type: 'tween', ease: 'easeInOut' }}
                                exit={{ x: '-100%' }}
                            >
                                  <h1>Project Name 3</h1>
                                  <div>
                                    <p onClick={toggleModal3}>Info</p>
                                    <a href='https://pexel.com' rel='noreferrer'>Github</a>
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