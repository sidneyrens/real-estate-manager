import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001';

const api = axios.create({
  baseURL: API_URL,
  withCredentials: false,
});

api.interceptors.request.use((config) => {
  if (config.data instanceof FormData) {
    delete config.headers['Content-Type'];
  }
  return config;
}, (error) => {
    console.error('API Error:', error.response ? error.response.data : error.message);
    return Promise.reject(error.message);
});

api.interceptors.response.use((response) => {
  return response.data;
}, (error) => {
  console.error('API Error:', error.message);
  return Promise.reject(error.message);
});

export const apiCall = async (method, url, data = null, options = {}) => {
    try {
      const response = await api({
        method,
        url,
        data,
        ...options,
      });
      return response;
    } catch (error) {
      console.error(`Error in ${method.toUpperCase()} ${url}:`, error.message);
      throw error;
    }
  };  

export default api;