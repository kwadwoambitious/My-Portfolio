import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import project1 from '../components/images/projects/project-1.png';
import project2 from '../components/images/projects/project-2.png';
import project3 from '../components/images/projects/project-3.png';
import htmlImg from '../images/skills/html.png';
import cssImg from '../images/skills/css.png';
import javascriptImg from '../images/skills/javascript.png';


const Portfolio = () => {
  const [modal, setModal] = useState(true);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleModal2 = () => {
    setModal2(!modal2);
  }

  const toggleModal3 = () => {
    setModal3(!modal3);
  }

  if(modal || modal2 || modal3){
    document.body.classList.add('active-modal');
  }
  else{
    document.body.classList.remove('active-modal');
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {modal && (
          <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          
          className="modal-overlay">

          <motion.div 
          initial={{ y: '-100vh', opacity: 0 }}
          animate={{ y: '-50%', opacity: 1, x: '-50%' }}
          transition={{ delay: 0.5 }}
          exit={{ y: '100vh', opacity: 0 }}
          
          className='modal'>
          <h1>Original Trombones</h1>
          <img src={project1} alt='project-1' onClick={toggleModal} />
              <h2>PROJECT INFO</h2>
              <p>
                <li><b>Project URL: </b><a href="#" target='_blank' rel='noreferrer'>Original Trombones</a></li>
                <li><b>Date created: </b>Mar 2023</li>
              </p>
              <h2>SUMMARY</h2>
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
              <FaTimes className="close-modal" onClick={toggleModal} />
          </motion.div>
        </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {modal2 && (
          <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          
          className="modal-overlay">

          <motion.div 
          initial={{ y: '-100vh', opacity: 0 }}
          animate={{ y: '-50%', opacity: 1, x: '-50%' }}
          transition={{ delay: 0.5 }}
          exit={{ y: '-100vh' }}
          
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
              <FaTimes className="close-modal" onClick={toggleModal2} />
          </motion.div>
        </motion.div>
        )}
      </AnimatePresence>    

      <AnimatePresence mode="wait">
        {modal3 && (
          <motion.div className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          >

          <motion.div className='modal'
          initial={{ y: '-100vh', opacity: 0 }}
          animate={{ y: '-50%', opacity: 1, x: '-50%' }}
          transition={{ delay: 0.5 }}
          exit={{ y: '-100vh' }}
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
              <FaTimes className="close-modal" onClick={toggleModal3} />
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
             <img src={project1} alt='project-1' onClick={toggleModal} />
          </div>
          <div>
             <img src={project2} alt='project-2' onClick={toggleModal2} />
          </div>
          <div>
             <img src={project3} alt='project-3' onClick={toggleModal3} />
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Portfolio;