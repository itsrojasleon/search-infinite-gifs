import React from 'react';
import { connect } from 'react-redux';
import { toggleTerm, cancelGifs, cancelStickers } from '../actions';

function Toggle ({ toggled, toggleTerm, cancelGifs, cancelStickers }) {
  const cancel = () => {
    if (!toggled) return cancelGifs();
    else return cancelStickers();
  }
  const render = () => {
    return toggleTerm() && cancel();
  }
  return (
    <button onClick={render}>{toggled === false ? 'GIFS' : 'STICKERS'}</button>
  );
}
function mapStateToProps({ toggle }) {
  return { toggled: toggle };
}
export default connect(mapStateToProps, { toggleTerm, cancelGifs, cancelStickers })(Toggle);