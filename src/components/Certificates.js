import React from 'react';
import { motion } from 'framer-motion';

const Certificates = () => {
  return (
    <>
      <motion.div 
        // initial={{ x: '100vw' }}
        // animate={{ x: 0 }}
        // transition={{ type: 'spring', stiffness: 100 }}

        className="awards-container">
        <h4>CERTIFICATES</h4>
        <h2>MY CERTIFICATES</h2>
          <section class="timeline-section">
            <div class="timeline-items">
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-date">2015</div>
                <div class="timeline-content">
                  <h3>PROGRAMMING WITH JAVASCRIPT</h3>
                  <p>I was fortunate enough to partake in this course powered by Coursera. Having completed online courses on HTML and CSS, I needed to learn JavaScript to make my projects more interactive. During this course, I was exposed to vital lessons such as arrays, functions, DOM, classes, testing, etc. With the knowledge acquired from this course, I could build projects more effectively.</p>
                  <a href='https://www.coursera.org/account/accomplishments/certificate/NCG2M8UKH65Z' rel='noreferrer'>CHECK IT</a>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-date">2016</div>
                <div class="timeline-content">
                  <h3>RESPONSIVE WEB DESIGN</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                  <a href='https://www.freecodecamp.org/certification/antwiebenezer/responsive-web-design' rel='noreferrer'>CHECK IT</a>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-date">2017</div>
                <div class="timeline-content">
                  <h3>RESPONSIVE WEB DESIGN</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                  <a href='https://www.sololearn.com/Certificate/CT-KHVQLLZH/png' rel='noreferrer'>CHECK IT</a>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-date">2018</div>
                <div class="timeline-content">
                  <h3>HTML</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                  <a href='https://www.sololearn.com/Certificate/CT-Y4HSQYNM/png' rel='noreferrer'>CHECK IT</a>
                </div>
              </div>
            </div>
          </section>
      </motion.div>
    </>
  )
}

export default Certificates;