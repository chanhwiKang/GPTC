import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/member';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const registerUser = (userData) => api.post('/signup', userData);
export const loginUser = (userData) => api.post('/login', userData);
export const getCurrentUser = () => api.get('/profile');

export default api;
