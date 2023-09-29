import React from 'react'
import { Link } from 'react-router-dom';
import menuBar from './images/menu.svg';
import closeBar from './images/close-thin.svg';
import '../App.css';

function NavBar() {
  return (
    <>
      <div className='nav-container'>
        <nav>
          <ul>
            <li>
              <Link to="/" className='nav-link active-link'>Home</Link>
            </li>
            <li>
              <Link to="/about" className='nav-link'>About</Link>
            </li>
            <li>
              <Link to="/portfolio" className='nav-link'>Portfolio</Link>
            </li>
            <li>
              <Link to="/certificates" className='nav-link'>Certificates</Link>
            </li>
            <li>
              <Link to="/contact" className='nav-link'>Contact</Link>
            </li>
          </ul>
          <img src={closeBar} alt="close-bar"/>
        </nav>
      </div>
    </>
  )
}

export default NavBar;