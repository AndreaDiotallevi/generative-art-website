import React from 'react';
import copyrightLogo from '../../assets//icons/copyright-logo.png';
import instagramLogo from '../../assets/icons/instagram-logo.png';

function Footer() {
  return (
    <div id='footer-component'>
      <div id='footer-container'>
        <div className='footer-left'>
          <img id='copyright-logo' src={copyrightLogo} alt='copyright'></img>
          <p id='footer-copyright'>Andrea Diotallevi 2020</p>
        </div>
        <div className='footer-right'>
          <a href='https://www.instagram.com/andreadiotalleviart/' target="_blank" rel="noopener noreferrer" id='instagram-hyperlink'><img id='instagram-logo' src={instagramLogo} alt='instagram'></img></a>
        </div>
      </div>
    </div>
  )
}

export default Footer;
