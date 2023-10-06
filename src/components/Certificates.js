import React from 'react';
import webDesign from '../components/images/certificates/web-design.png';
import javaScript from '../components/images/certificates/Programming_with_JavaScript.png';
import webDesign2 from '../components/images/certificates/Responsive-Web-Design_certificate.jpg';
import htmlCourse from '../components/images/certificates/HTML_certificate.jpg';
import { motion } from 'framer-motion';
import { FaChevronUp } from 'react-icons/fa';

const Certificates = () => {
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
        transition={{ type: 'spring', stiffness: 100, duration: 0.1, ease: [0.22, 1, 0.36, 1] }}
        // exit= {{ x: '-100vw' }}

        className="awards-container">
        <h4>CERTIFICATES</h4>
        <h2>MY CERTIFICATES</h2>
        <div className="certs">
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
        </div>
      </motion.div>
    </>
  )
}

export default Certificates;