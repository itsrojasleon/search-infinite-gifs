import {
  FETCH_GIFS,
  CANCEL_GIFS,
  FETCH_STICKERS,
  CANCEL_STICKERS,
  TOGGLE_TERM
} from './types';

// This API_KEY should be private
const API_KEY = 'a0670008a6614471bbe718a8378dcd4c';

const GIFS_URL = 'https://api.giphy.com/v1/gifs/search?q';
const STICKERS_URL = 'https://api.giphy.com/v1/stickers/search?q';

export const fetchGifs = (term, limit = 0) => async dispatch => {
  const response = await fetch(`${GIFS_URL}=${term}&api_key=${API_KEY}&limit=${limit}`);
  const { data } = await response.json();
  dispatch({ type: FETCH_GIFS, payload: data });
}
export const cancelGifs = () => {
  return { type: CANCEL_GIFS }
};

export const fetchStickers = (term, limit = 0) => async dispatch => {
  const response = await fetch(`${STICKERS_URL}=${term}&api_key=${API_KEY}&limit=${limit}`);
  const { data } = await response.json();
  dispatch({ type: FETCH_STICKERS, payload: data });
}
export const cancelStickers = () => {
  return { type: CANCEL_STICKERS }
};

export const toggleTerm = () => {
  return {
    type: TOGGLE_TERM
  }
}