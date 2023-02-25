import axios from 'axios';

const axiosAPI = axios.create({
  baseURL: 'https://pre-onboarding-selection-task.shop/',
  headers: {
    Authorization: 'Bearer ',
    'Content-Type': 'application/json',
  },
});

axiosAPI.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token') ?? '';
  config.headers.Authorization = 'Bearer '.concat(token);
  return config;
});

export default axiosAPI;
