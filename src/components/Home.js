import React from 'react';
import twitterIcon from './images/twitter-x-fill.svg';
import linkedInIcon from './images/linkedin-logo.svg';
import githubIcon from './images/github.svg';
import menuBar from './images/menu.svg';
import NavBar from './NavBar';

function Home() {
  return (
    <div className="home">
      <img src={menuBar} alt="menu-bar" className='menu-bar'/>
      <h1>Ebenezer Antwi</h1>
      <p>I'm a <span>Front-end Developer.</span></p>
      <NavBar/>
        <div className='social-icons'>
          <a href="https://twitter.com/_antwiebenezer" target='_blank'><img src={twitterIcon} alt='twitter-logo'/></a>
          <a href="https://www.linkedin.com/in/antwi-ebenezer" target='_blank'><img src={linkedInIcon} alt='linkedIn-logo'/></a>
          <a href="https://github.com/kwadwoambitious" target='_blank'><img src={githubIcon} alt='githun-logo'/></a>
        </div>
    </div>
  )
}

export default Home;