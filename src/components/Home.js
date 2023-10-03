import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

function Home() {
  return (
    <>
      <div className="home">
        <h1>Ebenezer Antwi</h1>
        <h2>I'm a <span>Front-end Developer.</span></h2>
          <div className='social-icons'>
                  <a href="https://twitter.com/_antwiebenezer" target='_blank'><FaTwitter className='icon'/></a>
                  <a href="https://www.linkedin.com/in/antwi-ebenezer" target='_blank'><FaLinkedin className='icon'/></a>
                  <a href="https://github.com/kwadwoambitious" target='_blank'><FaGithub className='icon'/></a>
          </div>
      </div>
    </>
  )
}

export default Home;