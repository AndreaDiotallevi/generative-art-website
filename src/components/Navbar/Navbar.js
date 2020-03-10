import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div id='navbar-component'>
        <div id='navbar-container'>
          <div className='navbar-left'>
            <h1 id='navbar-title'>ANDREA DIOTALLEVI</h1>
          </div>
          <div className='navbar-right'>
            <Link to='/' className='navbar-link'>
              <p id='navbar-home'>home</p>
            </Link>
            <Link to='/about' className='navbar-link'>
              <p id='navbar-about'>about</p>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar;
