import React from 'react';
import { useParams } from 'react-router-dom';

function Artwork() {
  const { title } = useParams();
    return (
      <div id='artwork-component'>
        <div id='artwork-container'>
          <img className='artwork-page-image' src={require(`../../assets/artworks/${title}-750x750.png`)} alt={title}></img>
          <h3 id='artwork-page-title'>{title.replace('-', ' ')}</h3>
        </div>
      </div>
    )
}

export default Artwork;
