import React from 'react';
import { Link } from 'react-router-dom';
import artworks from '../../utils/artworks';

class Artworks extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render() {
    return (
      <div id='artworks-component'>
        <ul id='artworks-container'>
          {artworks.map((artwork) => (
          <li className='artwork' key={artwork.id}>
            <Link to={`/art/${artwork.title.replace(' ', '-')}`} className='artwork-link'>
              <img id={`artwork-image-${artwork.id}`} className='artwork-image' src={require(`../../assets/${artwork.title.replace(' ', '-')}-0.png`)} alt={artwork.title}></img>
              <p id={`artwork-title-${artwork.id}`} className='artwork-title'>{artwork.title.toUpperCase()}</p>
            </Link>
          </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Artworks;
