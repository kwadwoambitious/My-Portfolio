import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Portfolio = () => {
  useEffect(()=> {
    Aos.init({duration: 400});
  }, [])
  return (
    <>
      <div className="portfolio-container" data-aos="fade-up">
        <h4>PORTFOLIO</h4>
        <h2>MY PROJECTS</h2>
      </div>
    </>
  )
}

export default Portfolio;