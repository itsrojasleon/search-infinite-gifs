import React from 'react';
import { connect } from 'react-redux';

function Gif({ gifs }) {
  return (
    <section>
      {gifs.map((gif) => (
        <div key={gif.id}>
          <img src={gif.images.downsized_large.url} alt={gif.images.downsized_large.url} /> 
        </div>
      ))}
    </section>
  )
}
function mapDispatchToProps({ gifs }) {
 return { gifs };
} 
export default connect(mapDispatchToProps)(Gif);
