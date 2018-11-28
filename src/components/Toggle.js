import React from 'react';
import { connect } from 'react-redux';
import { toggleTerm } from '../actions';

function Toggle ({ toggled, toggleTerm }) {
  const render = () => {
    return toggleTerm();
  }
  return (
    <button onClick={render}>{toggled === false ? 'GIFS' : 'STICKERS'}</button>
  );
}
function mapStateToProps({ toggle }) {
  return { toggled: toggle };
}
export default connect(mapStateToProps, { toggleTerm })(Toggle);