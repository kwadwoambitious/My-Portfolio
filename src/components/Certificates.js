import React from 'react';
import webDesign from '../components/images/certificates/web-design.png';
import javaScript from '../components/images/certificates/Programming_with_JavaScript.png';
import webDesign2 from '../components/images/certificates/Responsive-Web-Design_certificate.jpg';
import htmlCourse from '../components/images/certificates/HTML_certificate.jpg';
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
        {/* <div className="certs">
          <div>
            <a href="https://www.freecodecamp.org/certification/antwiebenezer/responsive-web-design"><img src={webDesign} alt="web design course1" /></a>  
          </div>
          <div>
            <a href="https://www.coursera.org/account/accomplishments/certificate/NCG2M8UKH65Z"><img src={javaScript} alt="javaScript course" /></a>
          </div>
          <div>
            <a href="https://www.sololearn.com/Certificate/CT-KHVQLLZH/png"><img src={webDesign2} alt="web design course2" /></a>
          </div>
          <div>
            <a href="https://www.sololearn.com/Certificate/CT-Y4HSQYNM/png"><img src={htmlCourse} alt="html course" /></a>
          </div>
        </div> */}

        {/* <div className="timeline">
          <div className="checkpoint">
            <div>
              <h2>First Certificate</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus assumenda quos hic! Qui, mollitia distinctio.</p>
            </div>
          </div>
          <div className="checkpoint">
            <div>
              <h2>Second Certificate</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus assumenda quos hic! Qui, mollitia distinctio.</p>
            </div>
          </div>
          <div className="checkpoint">
            <div>
              <h2>Third Certificate</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus assumenda quos hic! Qui, mollitia distinctio.</p>
            </div>
          </div>
        </div> */}

          <section class="timeline-section">
            <div class="timeline-items">
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-date">2015</div>
                <div class="timeline-content">
                  <h3>PROGRAMMING WITH JAVASCRIPT</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-date">2016</div>
                <div class="timeline-content">
                  <h3>RESPONSIVE WEB DESIGN</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-date">2017</div>
                <div class="timeline-content">
                  <h3>RESPONSIVE WEB DESIGN</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-date">2018</div>
                <div class="timeline-content">
                  <h3>HTML</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
              </div>
            </div>
          </section>
      </motion.div>
    </>
  )
}

export default Certificates;