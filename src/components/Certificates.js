import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import webDesign from '../components/images/certificates/web-design.png';
import javaScript from '../components/images/certificates/Programming_with_JavaScript.png';
import webDesign2 from '../components/images/certificates/Responsive-Web-Design_certificate.jpg';
import htmlCourse from '../components/images/certificates/HTML_certificate.jpg';

const Certificates = () => {
  useEffect(()=> {
    Aos.init({duration: 400, once: true});
  }, [])
  return (
    <>
      <div className="awards-container" data-aos="fade-up">
        <h4>CERTIFICATES</h4>
        <h2>MY CERTIFICATES</h2>
        <div className="certs">
          <div>
            <img src={webDesign} alt="web design course1" />
                   
          </div>
          <div>
            <img src={javaScript} alt="javaScript course" />
          </div>
          <div>
            <img src={webDesign2} alt="web design course2" />
          </div>
          <div>
            <img src={htmlCourse} alt="html course" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Certificates;