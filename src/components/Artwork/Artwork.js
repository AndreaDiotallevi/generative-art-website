import React, { useEffect } from "react";
import artworks from "../../utils/artworks";

const Artwork = (props) => {
  const title = props.match.params.title;
  const artwork = artworks.find(
    (artwork) => artwork.title === title.replace("-", " ")
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderImages = () => {
    let images = [];
    for (let i = 0; i < artwork.variations; i++) {
      images.push(
        <img
          key={`${title}-${i}`}
          id={`artwork-page-image-${i}`}
          className="artwork-page-image"
          src={require(`../../assets/${title}-${i}.png`)}
          alt={title}
        ></img>
      );
    }
    return images;
  };

  return (
    <div id="artwork-component">
      <div id="artwork-container">
        <div id="artwork-page-images">{renderImages()}</div>
        <div id="artwork-page-info">
          <h3 id="artwork-page-title">{title.replace("-", " ")}</h3>
          <p id="artwork-page-description">{artwork.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Artwork;
