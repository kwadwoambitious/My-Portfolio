import React from 'react';
import NavBar from './NavBar';
import twitterIcon from './images/twitter-x-fill.svg';
import linkedInIcon from './images/linkedin-logo.svg';
import githubIcon from './images/github.svg';

function Home() {
  return (
    <div className="home">
      <h1>Ebenezer Antwi</h1>
      <p>I'm a <span>Front-end Developer.</span></p>
      <NavBar/>
        <div className='social-icons'>
          <img src={twitterIcon} alt='twitter-icon'/>
          <img src={linkedInIcon} alt='linkedIn-icon'/>
          <img src={githubIcon} alt='githun-icon'/>
        </div>
    </div>
  )
}

export default Home;