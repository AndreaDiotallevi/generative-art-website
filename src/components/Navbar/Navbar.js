import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {

  function isHome() {
    return props.currentPage == 'home';
  }

  return (
    <div className={`navbar-component ${isHome() && 'component-when-home'}`}>
      <div id='navbar-container'>
        <div className='navbar-left'>
          <h1 id='navbar-title' className={isHome() && 'hidden'}>ANDREA DIOTALLEVI</h1>
        </div>
        <div className='navbar-right'>
          <Link to='/' className='navbar-link' onClick={props.onClick}>
            <p id='navbar-home' className={`navbar-text ${isHome() && 'text-when-home'}`}>Home</p>
          </Link>
          <Link to='/artworks' className='navbar-link' onClick={props.onClick}>
            <p id='navbar-artworks' className={`navbar-text ${isHome() && 'text-when-home'}`}>Artworks</p>
          </Link>
          <Link to='/about' className='navbar-link' onClick={props.onClick}>
            <p id='navbar-about' className={`navbar-text ${isHome() && 'text-when-home'}`}>About</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
