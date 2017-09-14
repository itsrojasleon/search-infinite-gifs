import React from 'react';

class ImageGif extends React.Component {
  render() {
    return (
      <div className="col s12 m6 l4">
        <div className="card">
          <div className="card-image">
            <img className="responsive-img image-gif" src={this.props.images.images.downsized_large.url} alt={this.props.images.images.downsized_large.url} />
          </div>
          <div className="card-content"></div>
        </div>
      </div>
    )
  }
}

export default ImageGif;
