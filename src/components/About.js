import React from 'react';
import Header from './Header';
import menuBar from './images/menu.svg';

const About = () => {
  return (
    <>
      <Header/>
      <img src={menuBar} alt="menu-bar" className='menu-bar'/>
    </>
    
  )
}

export default About;