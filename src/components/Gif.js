import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 10px;
  justify-content: center;
  grid-auto-rows: minmax(100px, auto);
  grid-auto-flow: dense;
`;
const Item = styled.div`
  grid-row-end: span 3;
  grid-row: auto ${props => props.width === props.height ? '1' : ''};
  /* grid-column: auto ${props => props.width === props.height ? '1' : ''}; */
  border: ${props => props.width === props.height ? '10px solid #ccc' : ''};
`;
const Image = styled.img`
  max-width: 100%;
`;

function Gif({ gifs, stickers }) {
  // Choose gifs or stickers
  const renderContent = gifs.length > 1 ? gifs : stickers;
  if (gifs.length !== 0) {
    gifs.map(e => console.log(`Width: ${e.images.downsized_large.width}, Height: ${e.images.downsized_large.height}`))
  }

  return (
    <Wrapper>
      {renderContent.map(({
        images, 
        id,
        slug
      }) => (
        <Item width={images.downsized_large.width} height={images.downsized_large.height} key={id}>
          <Image src={images.downsized_large.url} alt={slug} /> 
        </Item>
      ))}
    </Wrapper>
  )
}
function mapDispatchToProps({ gifs, stickers }) {
 return { gifs, stickers };
} 
export default connect(mapDispatchToProps)(Gif);
