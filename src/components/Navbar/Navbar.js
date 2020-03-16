import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div id='navbar-component'>
      <div id='navbar-container'>
        <div className='navbar-left'>
          <h1 id='navbar-title'>ANDREA DIOTALLEVI</h1>
        </div>
        <div className='navbar-right'>
          <Link to='/' className='navbar-link'>
            <p id='navbar-home' className='navbar-text'>Home</p>
          </Link>
          <Link to='/artworks' className='navbar-link'>
            <p id='navbar-artworks' className='navbar-text'>Artworks</p>
          </Link>
          <Link to='/about' className='navbar-link'>
            <p id='navbar-about' className='navbar-text'>About</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
