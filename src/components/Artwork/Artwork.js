import React from 'react';
import artworks from '../../utils/artworks';

const Artwork = props => {
  const title = props.match.params.title;

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div id='artwork-component'>
      <div id='artwork-container'>
        <img id='artwork-page-image' className='artwork-page-image' src={require(`../../assets/${title}.png`)} alt={title}></img>
        <div id='artwork-page-info'>
          {/* <h3 id='artwork-page-title'>{title.replace('-', ' ')}</h3> */}
          <h3 id='artwork-page-title'>{title.replace('-', ' ').toUpperCase()}</h3>
          {/* <h3 id='artwork-page-title'>{capitalizeFirstLetter(title.replace('-', ' '))}</h3> */}
          <p id='artwork-page-description'>{artworks.find(artwork => artwork.title === title.replace('-', ' ')).description}</p>
        </div>
      </div>
    </div>
  )
}

export default Artwork;
