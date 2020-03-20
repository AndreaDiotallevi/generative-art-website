import React from 'react';
import artworks from '../../utils/artworks';

const Artwork = props => {
  const title = props.match.params.title;

  return (
    <div id='artwork-component'>
      <div id='artwork-container'>
        <img id='artwork-page-image' className='artwork-page-image' src={require(`../../assets/${title}.png`)} alt={title}></img>
        <div>
          <h3 id='artwork-page-title'>{title.replace('-', ' ')}</h3>
          <p id='artwork-page-description'>{artworks.find(artwork => artwork.title === title.replace('-', ' ')).description}</p>
        </div>
      </div>
    </div>
  )
}

export default Artwork;
