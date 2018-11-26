import React from 'react';
import { connect } from 'react-redux';

function Gif({ gifs, stickers }) {
  return (
    <section>
      {stickers.map((gif) => (
        <div key={gif.id}>
          <img src={gif.images.downsized_large.url} alt={gif.images.downsized_large.url} /> 
        </div>
      ))}
    </section>
  )
}
function mapDispatchToProps({ gifs, stickers }) {
 return { gifs, stickers };
} 
export default connect(mapDispatchToProps)(Gif);
