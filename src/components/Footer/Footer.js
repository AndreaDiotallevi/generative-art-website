import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import copyrightLogo from '../../images/copyright-logo.png';

class Footer extends Component {
  render() {
    return (
      <div className='footer-component'>
        <div className='footer-left'>
          <img id='copyright-logo' src={copyrightLogo}></img>
          <p data-test='footer-licence'>Andrea Diotallevi 2020</p>
        </div>
        <div className='footer-right'>

        </div>
      </div>
    )
  }
}

export default Footer;
