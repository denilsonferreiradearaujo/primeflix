import axios from 'axios';

// Base da URL: https://api.themoviedb.org/3/
// movie/now_playing?api_key=11cbcde7682214a3ba9546f966c29558&linguage=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;

