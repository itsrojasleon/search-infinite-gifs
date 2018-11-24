import React from 'react';

class ImageGif extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src={this.props.images.images.downsized_large.url} alt={this.props.images.images.downsized_large.url} />
        </div>
      </div>
    )
  }
}

export default ImageGif;
