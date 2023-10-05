import { motion } from 'framer-motion';
import React from 'react';
import { FaChevronUp } from 'react-icons/fa';

const Portfolio = () => {
  return (
    <>
      <a href="#">
            <div className="chevronup-container">
              <FaChevronUp className="chevronup-icon"/>
            </div>
      </a>
      <motion.div
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}

        className="portfolio-container">
        <h4>PORTFOLIO</h4>
        <h2>MY PROJECTS</h2>
      </motion.div>
    </>
  )
}

export default Portfolio;