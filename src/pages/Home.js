import React, { lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const GifsAndStickers = lazy(() => import('../components/GifsAndStickers'));

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
  padding-bottom: 10px;
`;

function Home({ toggle }) {
  return (
    <Container>
      <H3>{toggle ? 'Stickers' : 'Gifs'}</H3>
      <Suspense fallback={<div>Loading....</div>}>
        <GifsAndStickers />
      </Suspense>
    </Container>
  )
}
function mapStateToProps({toggle}) {
  return { toggle };
}
export default connect(mapStateToProps)(Home);