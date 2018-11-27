import { TOGGLE_TERM } from '../actions/types';

export default function(state = false, action) {
  if (action.type === TOGGLE_TERM) return !state;
  else return state;
}