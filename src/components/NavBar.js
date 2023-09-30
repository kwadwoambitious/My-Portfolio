import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom';
import '../App.css';
import { LuMenu, LuX } from "react-icons/lu";

function NavBar() {
  const navRef = useRef();

  const showNavMenu = () => {
    navRef.current.classList.toggle('show');
  }
  return (
    <>
        <nav>
        <div className='nav-container' ref={navRef}>
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
          <LuX className='close-bar' onClick={showNavMenu}/>
        </div>
        <LuMenu className='menu-bar' onClick={showNavMenu}/>
        </nav>
    </>
  )
}

export default NavBar;