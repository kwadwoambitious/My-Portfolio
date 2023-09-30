import React from 'react'
import { NavLink } from 'react-router-dom';
import menuBar from './images/menu.svg';
import closeBar from './images/close-thin.svg';
import '../App.css';

function NavBar() {
  return (
    <>
        <nav>
        <div className='nav-container'>
          <ul>
            <li>
              <NavLink to="/" className='nav-link'>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className='nav-link'>About</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" className='nav-link'>Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/certificates" className='nav-link'>Certificates</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className='nav-link'>Contact</NavLink>
            </li>
          </ul>
          <img src={closeBar} alt="close-bar" className='close-bar'/>
        </div>
          <img src={menuBar} alt="menu-bar" className='menu-bar'/>
        </nav>
    </>
  )
}

export default NavBar;