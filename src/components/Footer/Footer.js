import React, { Component } from 'react';
import copyrightLogo from '../../images//icons/copyright-logo.png';
import instagramLogo from '../../images/icons/instagram-logo.png';

class Footer extends Component {
  render() {
    return (
      <div id='footer-component'>
        <div id='footer-container'>
          <div className='footer-left'>
            <img id='copyright-logo' src={copyrightLogo} alt='copyright logo'></img>
            <p id='footer-copyright'>Andrea Diotallevi 2020</p>
          </div>
          <div className='footer-right'>
            <img id='instagram-logo' src={instagramLogo} alt='instagram logo'></img>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;
