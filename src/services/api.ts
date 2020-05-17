import axios from 'axios'

/**
 * Responsible to configura base rest url
 */
const api = axios.create({
    baseURL: 'https://api.github.com',
});

export default api;