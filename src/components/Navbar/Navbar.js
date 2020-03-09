import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div className='navbar-component'>
        <div className='navbar-left'>
          <h1 data-test='navbar-title'>ANDREA DIOTALLEVI</h1>
        </div>
        <div className='navbar-right'>
          <Link to='/'>
            <p className='navbar-link' data-test='navbar-home'>home</p>
          </Link>
          <Link to='/about'>
            <p className='navbar-link' data-test='navbar-about'>about</p>
          </Link>
        </div>
      </div>
    )
  }
}

export default Navbar;
