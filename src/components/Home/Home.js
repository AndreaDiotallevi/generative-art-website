import React from 'react';
import Moonlight from '../Moonlight/Moonlight';

function Home() {
  return (
    <div id='home-component'>
      <div id='home-container'>
        <div id='home-page-text'>
          <h3 id='home-page-title'>Hello! My name is Andrea.</h3>
          <p id='home-page-paragraph'>I am a Software Engineer, with a background in music and architecture, fascinated by the intersection between art and technology.</p>
        </div>
        <Moonlight />
      </div>
    </div>
  )
}

export default Home;
