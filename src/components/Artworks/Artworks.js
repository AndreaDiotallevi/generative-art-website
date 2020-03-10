import React, { Component } from 'react';
import agateStoneImage from '../../images/artworks/agate-stone-750x750.png';
import marbleLakeImage from '../../images/artworks/marble-lake-750x750.png';
import fluidImage from '../../images/artworks/fluid-750x750.png';
import daisyImage from '../../images/artworks/daisy-750x750.png';
import whiteCherryImage from '../../images/artworks/white-cherry-750x750.png';
import blackHoleImage from '../../images/artworks/black-hole-750x750.png';

class Artworks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artworks: [
        { title: 'agate stone', imageUrl: agateStoneImage },
        { title: 'marble lake', imageUrl: marbleLakeImage },
        { title: 'fluid', imageUrl: fluidImage },
        { title: 'daisy', imageUrl: daisyImage },
        { title: 'white cherry', imageUrl: whiteCherryImage },
        { title: 'black hole', imageUrl: blackHoleImage }
      ]
    };
  }

  render() {
    return (
      <div id='artworks-component'>
        <ul id='artworks-container'>
          {this.state.artworks.map((artwork, index) => (
          <li key={index}>
            <img id={`artwork-image-${index}`} className='artwork-image' src={artwork.imageUrl}></img>
            <p id={`artwork-title-${index}`} className='artwork-title'>{artwork.title}</p>
          </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Artworks;
