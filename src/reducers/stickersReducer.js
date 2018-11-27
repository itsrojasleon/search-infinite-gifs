import { FETCH_STICKERS, CANCEL_STICKERS } from '../actions/types';

export default function(state = [], action) {
  switch(action.type) {
    case  FETCH_STICKERS:
      return action.payload;
    case CANCEL_STICKERS: 
      return state = [];
    default:
      return state;
  }
}