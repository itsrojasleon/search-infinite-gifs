import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 220px);
  grid-gap: 10px;
  justify-content: center;
  grid-template-rows:repeat(auto-fill, 220px);
  grid-auto-flow: dense;
`;

const Item = styled.div`
  grid-row:auto / span ${({width, height}) => height > width ? height > (width * 2) ? '3' : '2' : height === width ? '1' : width > height ? '1' : '' };
  border: ${({width, height}) => height > width ? height > (width * 2) ? '10px solid black' : '10px solid yellow' : height === width ? '10px solid purple' : width > height ? '10px solid green' : '10px solid red' };
  grid-column: auto / span ${({width, height}) => height > width ? height > (width * 2) ? '1' : '1' : height === width ? '1' : width > height ? '2' : '' }; 
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
	vertical-align: text-top;
`;

function Gif({ gifs, stickers }) {
  // Choose gifs or stickers
  const renderContent = gifs.length > 1 ? gifs : stickers;
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
  );
}
function mapDispatchToProps({ gifs, stickers }) {
 return { gifs, stickers };
} 
export default connect(mapDispatchToProps)(Gif);
