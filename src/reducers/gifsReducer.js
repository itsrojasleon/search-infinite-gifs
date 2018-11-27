import { FETCH_GIFS, CANCEL_GIFS } from '../actions/types';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_GIFS:
      return action.payload;
    case CANCEL_GIFS:
      return state = [];
    default:
      return state;
  }
}