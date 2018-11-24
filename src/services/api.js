const API_KEY = 'a0670008a6614471bbe718a8378dcd4c';
const BASE_URL = 'https://api.giphy.com/v1/gifs/search?q';

const api = {
  gifs: {
    async getGifs(term = '', limit = 0) {
      const response = await fetch(`${BASE_URL}=${term}&api_key=${API_KEY}&limit=${limit}`);
      const data = await response.json();
      console.log(data);
      return data;
    },
  }
}
export default api;
