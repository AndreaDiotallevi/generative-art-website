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
          <Link to='/' className='navbar-link'>
            <p data-test='navbar-home'>home</p>
          </Link>
          <Link to='/about' className='navbar-link'>
            <p data-test='navbar-about'>about</p>
          </Link>
        </div>
      </div>
    )
  }
}

export default Navbar;
