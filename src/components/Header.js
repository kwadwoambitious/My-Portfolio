import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import { FaAngellist } from 'react-icons/fa';

const Header = () => {
  return (
    <>
      <header>
        <div className='logo'>
          <FaAngellist className="icon" /><Link to="/"><h1><span>EB.</span>CODES</h1></Link>
        </div>
        <NavBar/>
      </header>
    </>
  )
}

export default Header;