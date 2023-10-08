import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion';

function Home() {
  return (
    <>
        <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            // transition={{ type: 'spring', stiffness: 100 }}
            
            className="home">
          <h1>Ebenezer Antwi</h1>
          <h2>I'm a <span>Front-end Developer</span></h2>
            <div className='social-icons'>
                    <a href="https://twitter.com/_antwiebenezer" target='_blank' rel='noreferrer'><FaTwitter className='icon'/></a>
                    <a href="https://www.linkedin.com/in/antwi-ebenezer" target='_blank' rel='noreferrer'><FaLinkedin className='icon'/></a>
                    <a href="https://github.com/kwadwoambitious" target='_blank' rel='noreferrer'><FaGithub className='icon'/></a>
            </div>
        </motion.div>
    </>
  )
}

export default Home;