import React, { lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Gifs = lazy(() => import('../components/Gif'));

const Container = styled.div`
  width: 90%;
  margin: auto;
`; 

function Home({ toggle }) {
  return (
    <Container>
      {toggle ? 'Stickers' : 'Gifs'}
      <Suspense fallback={<div>Loading....</div>}>
        <Gifs />
      </Suspense>
    </Container>
  )
}
function mapStateToProps({toggle}) {
  return { toggle };
}
export default connect(mapStateToProps)(Home);