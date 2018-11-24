import React from 'react';

function Toggle ({ toggled, clicked }) {
  return (
    <button onClick={clicked}>{toggled !== true ? 'GIFS' : 'STICKERS'}</button>
  );
}
export default Toggle;