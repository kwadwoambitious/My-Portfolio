import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

const Header = () => {
  return (
    <>
      <header>
        <div className='logo'>
          <Link to="/"><h1><span>EB.</span>CODES</h1></Link>
        </div>
        <NavBar/>
      </header>
    </>
  )
}

export default Header;