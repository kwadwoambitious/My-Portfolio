import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

function Home() {
  return (
    <>
        <Helmet>
          
          {/* <!-- HTML Meta Tags --> */}
          <title>Ebenezer Antwi | Front-end Developer</title>
          <meta name="description" content="The landing page of my official portfolio website." />

          {/* <!-- Facebook Meta Tags --> */}
          <meta property="og:url" content="https://ebenezerantwi.vercel.app/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Ebenezer Antwi | Front-end Developer" />
          <meta property="og:description" content="The landing page of my official portfolio website." />
          <meta property="og:image" content="" />

          {/* <!-- Twitter Meta Tags --> */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="ebenezerantwi.vercel.app" />
          <meta property="twitter:url" content="https://ebenezerantwi.vercel.app/" />
          <meta name="twitter:title" content="Ebenezer Antwi | Front-end Developer" />
          <meta name="twitter:description" content="The landing page of my official portfolio website." />
          <meta name="twitter:image" content="" />
          <link rel='canonical' href='/' />
        </Helmet>
        <motion.div
            // initial={{ x: '100vw' }}
            // animate={{ x: 0 }}
            // transition={{ type: 'spring', stiffness: 100 }}
            
            className="home">
          <h2 className='my-name'>Ebenezer Antwi</h2>
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