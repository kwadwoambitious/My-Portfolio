import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import '../App.css';
import { LuMenu } from "react-icons/lu";

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
          
        </div>
        <LuMenu className='menu-bar'/>
        </nav>
    </>
  )
}

export default NavBar;