import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import copyrightLogo from '../../images/copyright-logo.png';
import InstagramLogo from '../../images/instagram-logo.png';

class Footer extends Component {
  render() {
    return (
      <div id='footer-component'>
        <div className='footer-left'>
          <img id='copyright-logo' src={copyrightLogo}></img>
          <p id='footer-copyright'>Andrea Diotallevi 2020</p>
        </div>
        <div className='footer-right'>
          <img id='instagram-logo' src={InstagramLogo}></img>
        </div>
      </div>
    )
  }
}

export default Footer;
