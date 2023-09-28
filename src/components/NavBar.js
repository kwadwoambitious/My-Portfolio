import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

function NavBar() {
  return (
    <>
       <nav>
        <ul>
          <Link to="/" className='nav-link active-link'>Home</Link>
          <Link to="/about" className='nav-link'>About</Link>
          <Link to="/portfolio" className='nav-link'>Portfolio</Link>
          <Link to="/certificates" className='nav-link'>Certificates</Link>
          <Link to="/contact" className='nav-link'>Contact</Link>
        </ul>
       </nav>
    </>
  )
}

export default NavBar;