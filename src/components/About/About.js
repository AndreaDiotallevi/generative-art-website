import React, { Component } from 'react';
import staggeredPortrait from '../../assets/artworks/staggered-portrait.png';

class About extends Component {
  render() {
    return (
      <div id='about-component'>
        <div id='about-container'>
          <div>
            <img id='profile-image' src={staggeredPortrait} alt='profile'></img>
          </div>
          <div>
            <h3 id='about-title'>about</h3>
            <p className='about-description' id='about-paragraph-1'>Software developer with a background in music and architecture, fascinated by the intersection between art and technology.</p>
            <p className='about-description' id='about-paragraph-2'>For each new work, I design a custom algorithm capable of generating a sequence of unique, but aesthetically related images.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
