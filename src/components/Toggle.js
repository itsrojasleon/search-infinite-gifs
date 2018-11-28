import React from 'react';
import { connect } from 'react-redux';
import { toggleTerm } from '../actions';

import Switch from './Switch';

function Toggle ({ toggled, toggleTerm }) {
  const render = () => {
    return toggleTerm();
  }
  return <Switch on={toggled} onClick={render} />;
}
function mapStateToProps({ toggle }) {
  return { toggled: toggle };
}
export default connect(mapStateToProps, { toggleTerm })(Toggle);