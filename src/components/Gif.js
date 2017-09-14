import React, { Component } from 'react';
import GifImage from './GifImage';

class Gif extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: null,
    };
  }

  render() {
    return (
      <section className="container-gifs">
        <GifImage onSelected={this.setSelected}  images={this.props} />
      </section>
    )
  }
}
export default Gif;
