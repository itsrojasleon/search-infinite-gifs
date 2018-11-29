import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  grid-row:auto / span ${({width, height}) => height > width ? height > (width * 2) ? '3' : '2' : height === width ? '1' : width > height ? '1' : '' };
  /* border: ${({width, height}) => height > width ? height > (width * 2) ? '10px solid black' : '10px solid yellow' : height === width ? '10px solid purple' : width > height ? '10px solid green' : '10px solid red' }; */
  grid-column: auto / span ${({width, height}) => height > width ? height > (width * 2) ? '1' : '1' : height === width ? '1' : width > height ? '2' : '' }; 
  background-color: white;
  padding:10px;
  border-radius: 6px;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  vertical-align: text-top;
  border-radius: 6px;
`;

function Image({ images, id, slug }) {
  return (
    <Item width={images.downsized_large.width} height={images.downsized_large.height} key={id}>
      <Img src={images.downsized_large.url} alt={slug} /> 
    </Item>
  );
}
export default Image;