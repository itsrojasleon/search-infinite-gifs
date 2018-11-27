import React, { Suspense } from 'react';
import styled from 'styled-components';

import Gifs from '../components/Gif';

const Container = styled.div`
  width: 90%;
  margin: auto;
`; 

function Home() {
  return (
    <Container>
      <Suspense fallback={<div>Loading....</div>}>
        <Gifs />
      </Suspense>
    </Container>
  )
}
export default Home;