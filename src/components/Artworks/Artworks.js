import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import imageLoader from '../../images';

class Artworks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artworks: imageLoader()
    };
  }

  render() {
    console.log(this.state.artworks)
    return (
      <div id='artworks-component'>
        <ul id='artworks-container'>
          {this.state.artworks.map((artwork) => (
          <li className='artwork' key={artwork.id}>
            <Link to={`/artworks/${artwork.title.replace(' ', '-')}`} className='artwork-link'>
              <img id={`artwork-image-${artwork.id}`} className='artwork-image' src={`${artwork.src}`} alt={artwork.title}></img>
              <p id={`artwork-title-${artwork.id}`} className='artwork-title'>{artwork.title}</p>
            </Link>
          </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Artworks;
