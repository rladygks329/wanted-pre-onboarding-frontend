import axios from 'axios';
import { ACCESS_TOKEN_KEY } from '../utils/constants';
const axiosAPI = axios.create({
  baseURL: 'https://pre-onboarding-selection-task.shop/',
  headers: {
    Authorization: 'Bearer ',
    'Content-Type': 'application/json',
  },
});

axiosAPI.interceptors.request.use((config) => {
  const token = localStorage.getItem(ACCESS_TOKEN_KEY) ?? '';
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default axiosAPI;
