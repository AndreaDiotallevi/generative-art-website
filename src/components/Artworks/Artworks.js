import React from 'react';
import { Link } from 'react-router-dom';
import artworks from '../../utils/artworks';

const Artworks = () => {
  return (
    <div id='artworks-component'>
      <ul id='artworks-container'>
        {artworks.map((artwork) => (
        <li className='artwork' key={artwork.id}>
          <Link to={`/artworks/${artwork.title.replace(' ', '-')}`} className='artwork-link'>
            <img id={`artwork-image-${artwork.id}`} className='artwork-image' src={require(`../../assets/${artwork.title.replace(' ', '-')}.png`)} alt={artwork.title}></img>
            <p id={`artwork-title-${artwork.id}`} className='artwork-title'>{artwork.title}</p>
          </Link>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default Artworks;
