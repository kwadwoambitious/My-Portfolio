import React, { useEffect } from 'react';
import { FaTwitter, FaLinkedin, FaGithub  } from "react-icons/fa";
import { LuShare } from 'react-icons/lu';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Socials = () => {
  return (
    <>
      <div className='socials-content'>
          <div className='img'>
              <LuShare className='shareImg'/>
          </div>
          <div>
              <h3>Social Profiles</h3>
              <div className='icons'>
                  <a href="https://twitter.com/_antwiebenezer" target='_blank'><FaTwitter/></a>
                  <a href="https://www.linkedin.com/in/antwi-ebenezer" target='_blank'><FaLinkedin/></a>
                  <a href="https://github.com/kwadwoambitious" target='_blank'><FaGithub/></a>
              </div>
          </div>
      </div>
    </>
  )
}

const ContactForm = () => {
  return (
    <>
      <form>
        <div className='div-flex'>
          <div>
              <input type="text" name="name" id="name" placeholder='Your Name' required />
          </div>
          <div>
              <input type="email" name="email" id="email" placeholder='Your Email' required />
          </div>
        </div>
        <input type="text" name="subject" id="subject" placeholder='Subject' required />
        <textarea name="message" id="message" rows="8" placeholder='Message' required/>
        <input type="submit" value="Send Message" />
      </form>
    </>
  )
}

const Contact = () => {
  useEffect(()=> {
    Aos.init({duration: 400, reset: false});
  }, [])
  return (
    <>
      <div className="contact-container" data-aos="fade-up">
        <h4>CONTACT</h4>
        <h2>CONTACT ME</h2>
        <Socials/>
        <ContactForm/>
      </div>
    </>
  )
}

export default Contact;