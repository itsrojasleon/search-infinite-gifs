import { FETCH_STICKERS } from '../actions/types';

export default function(state = [], action) {
  switch(action.type) {
    case  FETCH_STICKERS:
      return {};
    default:
      return state;
  }
}