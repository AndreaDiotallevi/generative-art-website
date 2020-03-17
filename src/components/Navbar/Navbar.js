import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {

  const isHome = () => {
    return props.location.pathname === '/';
  }

  return (
    <div id='navbar-component' className={`navbar-component ${isHome() ? 'component-when-home' : undefined}`}>
      <div id='navbar-container'>
        <div className='navbar-left'>
          <h1 id='navbar-title' className={isHome() ? 'hidden' : undefined}>ANDREA DIOTALLEVI</h1>
        </div>
        <div className='navbar-right'>
          <Link to='/' className={`navbar-link ${isHome() ? 'text-when-home' : undefined}`}>
            <p id='navbar-home' className={`navbar-text ${isHome() ? 'text-when-home' : undefined}`}>home</p>
          </Link>
          <a href='https://medium.com/@andreadiotallevi' id='medium-hyperlink' target="_blank" rel="noopener noreferrer" className={`navbar-link navbar-text ${isHome() ? 'text-when-home' : undefined}`}>blog</a>
          <Link to='/artworks' className={`navbar-link ${isHome() ? 'text-when-home' : undefined}`}>
            <p id='navbar-artworks' className={`navbar-text ${isHome() ? 'text-when-home' : undefined}`}>art</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
