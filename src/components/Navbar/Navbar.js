import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <div id='navbar-component' className={`navbar-component ${props.isHome() && 'component-when-home'}`}>
      <div id='navbar-container'>
        <div className='navbar-left'>
          <h1 id='navbar-title' className={props.isHome() && 'hidden'}>ANDREA DIOTALLEVI</h1>
        </div>
        <div className='navbar-right'>
          <Link to='/' className={`navbar-link ${props.isHome() && 'text-when-home'}`} onClick={props.onClick}>
            <p id='navbar-home' className={`navbar-text ${props.isHome() && 'text-when-home'}`}>home</p>
          </Link>
          <a href='https://medium.com/@andreadiotallevi' id='medium-hyperlink' target="_blank" rel="noopener noreferrer" className={`navbar-link navbar-text ${props.isHome() && 'text-when-home'}`}>blog</a>
          <Link to='/artworks' className={`navbar-link ${props.isHome() && 'text-when-home'}`} onClick={props.onClick}>
            <p id='navbar-artworks' className={`navbar-text ${props.isHome() && 'text-when-home'}`}>art</p>
          </Link>
          {/* <Link to='/about' className='navbar-link' onClick={props.onClick}>
            <p id='navbar-about' className={`navbar-text ${props.isHome() && 'text-when-home'}`}>About</p>
          </Link> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar;
