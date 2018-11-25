import { combineReducers } from 'redux';

import gifsReducer from './gifsReducer';
import stickersReducer from './stickersReducer';

export default combineReducers({
  gifs: gifsReducer,
  stickers: stickersReducer
})