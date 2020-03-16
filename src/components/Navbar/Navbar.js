import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {

  function isHome() {
    return props.currentPage === 'home';
  }

  return (
    <div className={`navbar-component ${isHome() && 'component-when-home'}`}>
      <div id='navbar-container'>
        <div className='navbar-left'>
          <h1 id='navbar-title' className={isHome() && 'hidden'}>ANDREA DIOTALLEVI</h1>
        </div>
        <div className='navbar-right'>
          <Link to='/' className={`navbar-link ${isHome() && 'text-when-home'}`} onClick={props.onClick}>
            <p id='navbar-home' className={`navbar-text ${isHome() && 'text-when-home'}`}>home</p>
          </Link>
          <a href='https://medium.com/@andreadiotallevi' id='medium-hyperlink' target="_blank" rel="noopener noreferrer" className={`navbar-link navbar-text ${isHome() && 'text-when-home'}`}>blog</a>
          <Link to='/artworks' className={`navbar-link ${isHome() && 'text-when-home'}`} onClick={props.onClick}>
            <p id='navbar-artworks' className={`navbar-text ${isHome() && 'text-when-home'}`}>art</p>
          </Link>
          {/* <Link to='/about' className='navbar-link' onClick={props.onClick}>
            <p id='navbar-about' className={`navbar-text ${isHome() && 'text-when-home'}`}>About</p>
          </Link> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar;
