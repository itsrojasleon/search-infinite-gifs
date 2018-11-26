import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto, 1fr);
  width: auto;
`;
const Image = styled.img`
  width: 100%;
`;

function Gif({ gifs, stickers }) {
  // Choose gifs or stickers
  const renderContent = gifs.length > 1 ? gifs : stickers;
  return (
    <Wrapper>
      {renderContent.map((gif) => (
        <div key={gif.id}>
          <Image src={gif.images.downsized_large.url} alt={gif.images.downsized_large.url} /> 
        </div>
      ))}
    </Wrapper>
  )
}
function mapDispatchToProps({ gifs, stickers }) {
 return { gifs, stickers };
} 
export default connect(mapDispatchToProps)(Gif);
