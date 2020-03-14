import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import agateStoneImage from '../../assets/agate-stone-750x750.png';
import marbleLakeImage from '../../assets/marble-lake-750x750.png';
import fluidImage from '../../assets/fluid-750x750.png';
import daisyImage from '../../assets/daisy-750x750.png';
import whiteCherryImage from '../../assets/white-cherry-750x750.png';
import blackHoleImage from '../../assets/black-hole-750x750.png';

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
          <li className='artwork' key={index}>
            <Link to={`/artworks/${artwork.title.replace(' ', '-')}`} className='artwork-link'>
            <img id={`artwork-image-${index}`} className='artwork-image' src={artwork.imageUrl} alt={artwork.title}></img>
              <p id={`artwork-title-${index}`} className='artwork-title'>{artwork.title}</p>
            </Link>
          </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Artworks;
