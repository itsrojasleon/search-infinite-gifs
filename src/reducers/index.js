import { combineReducers } from 'redux';

import gifsReducer from './gifsReducer';
import stickersReducer from './stickersReducer';
import toggleReducer from './toggleReducer';

export default combineReducers({
  gifs: gifsReducer,
  stickers: stickersReducer,
  toggle: toggleReducer
});