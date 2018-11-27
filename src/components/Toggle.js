import React from 'react';
import { connect } from 'react-redux';
import { toggleTerm } from '../actions';

function Toggle ({ toggled, toggleTerm }) {
  return (
    <button onClick={toggleTerm}>{toggled !== true ? 'GIFS' : 'STICKERS'}</button>
  );
}
function mapStateToProps({ toggle }) {
  return { toggled: toggle };
}
export default connect(mapStateToProps, { toggleTerm })(Toggle);