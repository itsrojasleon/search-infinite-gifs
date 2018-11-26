import React from 'react';
import styled from 'styled-components';

import Gifs from '../components/Gif';

const Container = styled.div`
  width: 80%;
  margin: auto;
`; 

export default class Home extends React.Component {
  render() {
    return (
      <Container>
        <Gifs />
      </Container>
    )
  }
}
