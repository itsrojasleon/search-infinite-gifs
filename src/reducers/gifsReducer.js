import { FETCH_GIFS } from '../actions/types';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_GIFS:
      return action.payload;
    default:
      return state;
  }
}