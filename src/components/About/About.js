import React, { Component } from 'react';
import staggeredPortrait from '../../images/artworks/staggered-portrait.png';

class About extends Component {
  render() {
    return (
      <div id='about-component'>
        <div id='about-container'>
          <div>
            <img id='profile-image' src={staggeredPortrait} alt='profile image'></img>
          </div>
          <div>
            <h3 id='about-title'>about</h3>
            <p id='about-description'>Software developer with a background in music and architecture, fascinated by the intersection between art and technology. For each new work, I design a custom algorithm capable of generating a sequence of unique, but aesthetically related images.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
