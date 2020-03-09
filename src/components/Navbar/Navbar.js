import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className='navbar-component'>
        <div className='navbar-left'>
          <h1 data-test='navbar-title'>ANDREA DIOTALLEVI</h1>
        </div>
        <div className='navbar-right'>
          <p data-test='navbar-home navbar-btn'>home</p>
          <p data-test='navbar-about navbar-btn'>about</p>
        </div>
      </div>
    )
  }
}

export default Navbar;
