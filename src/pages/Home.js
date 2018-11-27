import React, { lazy, Suspense } from 'react';
import styled from 'styled-components';

const Gifs = lazy(() => import('../components/Gif'));

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