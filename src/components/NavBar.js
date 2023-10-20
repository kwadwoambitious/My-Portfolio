import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
import { LuMenu, LuX } from "react-icons/lu";

function NavBar() {
  const navRef = useRef();

  const showNavMenu = () => {
    navRef.current.classList.toggle('show');
    
    if (navRef.current.classList.contains('show')){
      document.body.style.overflowY = 'hidden';
    }
    else{
      document.body.style.overflowY = 'auto';
    }
  }

  const closeMenu = () => {
    navRef.current.classList.remove('show');
    document.body.style.overflowY = 'auto';
  }
  return (
    <>
        <nav>
        <div className='nav-container' ref={navRef}>
          <ul>
            <li>
              <NavLink to="/" className='nav-link' onClick={closeMenu}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className='nav-link' onClick={closeMenu}>About</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" className='nav-link' onClick={closeMenu}>Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/certificates" className='nav-link' onClick={closeMenu}>Certificates</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className='nav-link' onClick={closeMenu}>Contact</NavLink>
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