import React, { lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Gifs = lazy(() => import('../components/Gif'));

const Container = styled.div`
  width: 90%;
  margin: auto;
`; 
const H3 = styled.h3`
  font-family: "Colfax Bold";
  font-size: 2em;
  width: 50%;
  text-align: center;
  margin: 10px auto 10px auto; 
  border-bottom: 1px solid #f2f2f2;
  padding-bottom: 10px;
`;

function Home({ toggle }) {
  return (
    <Container>
      <H3>{toggle ? 'Stickers' : 'Gifs'}</H3>
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