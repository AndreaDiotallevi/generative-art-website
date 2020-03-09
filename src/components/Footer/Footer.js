import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div className='footer-component'>
        <div className='footer-left'>
          <p data-test='footer-licence'>Andrea Diotallevi 2020</p>
        </div>
        <div className='footer-right'>

        </div>
      </div>
    )
  }
}

export default Footer;
