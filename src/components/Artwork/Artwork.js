import React from "react";
import artworks from "../../utils/artworks";

class Artwork extends React.Component {
  title = this.props.match.params.title;
  artwork = artworks.find(
    (artwork) => artwork.title === this.title.replace("-", " ")
  );

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  renderImages() {
    let images = [];
    for (let i = 0; i < this.artwork.variations; i++) {
      images.push(
        <img
          key={`${this.title}-${i}`}
          id={`artwork-page-image-${i}`}
          className="artwork-page-image"
          src={require(`../../assets/${this.title}-${i}.png`)}
          alt={this.title}
        ></img>
      );
    }
    return images;
  }

  render() {
    return (
      <div id="artwork-component">
        <div id="artwork-container">
          <div id="artwork-page-images">{this.renderImages()}</div>
          <div id="artwork-page-info">
            <h3 id="artwork-page-title">
              {this.title.replace("-", " ").toUpperCase()}
            </h3>
            <p id="artwork-page-description">{this.artwork.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Artwork;
