import { motion } from 'framer-motion';
import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub  } from "react-icons/fa";
import { LuShare } from 'react-icons/lu';
import { Helmet } from 'react-helmet';

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
                  <a href="https://twitter.com/_antwiebenezer" target='_blank' rel='noreferrer'><FaTwitter/></a>
                  <a href="https://www.linkedin.com/in/antwi-ebenezer" target='_blank' rel='noreferrer'><FaLinkedin/></a>
                  <a href="https://github.com/kwadwoambitious" target='_blank' rel='noreferrer'><FaGithub/></a>
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
  return (
    <>
      <motion.div
        // initial={{ x: '100vw' }}
        // animate={{ x: 0 }}
        // transition={{ type: 'spring', stiffness: 100 }}
        

        className="contact-container">
        <Helmet>
            <title>Contact | Ebenezer Antwi</title>
            <meta name='description' content='Reach out to me by filling out the form on this page.' />
            <meta name='keywords' content='ebcodes,EbCodes,EBCODES, Ebenezer Antwi,ebenezerantwi,EbenezerAntwi, My Portfolio,ebenezerantwi.netlify.app' />

            <meta property="og:url" content="https://ebenezerantwi.netlify.app/contact" />
            <meta property="og:type" content="website" />
            <meta property='og:title' content='Contact | Ebenezer Antwi' />
            <meta property='og:description' content='Reach out to me by filling out the form on this page.' />
            <meta property="og:image" content="/images/og-image.jpg" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image" content="/images/og-image.jpg" />
            <meta property="og:image:width" content="300" />
            <meta property="og:image:height" content="300" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta property="twitter:domain" content="ebenezerantwi.netlify.app" />
            <meta property="twitter:url" content="https://ebenezerantwi.netlify.app/contact" />
            <meta name="twitter:title" content="Contact | Ebenezer Antwi" />
            <meta name="twitter:description" content="Reach out to me by filling out the form on this page." />
            <meta name="twitter:image" content="/images/og-image.jpg" />
            <link rel='canonical' href='/' />
        </Helmet>

        <h4>CONTACT</h4>
        <h2>CONTACT ME</h2>
        <Socials/>
        <ContactForm/>
      </motion.div>
    </>
  )
}

export default Contact;