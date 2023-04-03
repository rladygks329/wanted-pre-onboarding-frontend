import axios, { InternalAxiosRequestConfig } from 'axios';
import { ACCESS_TOKEN_KEY } from '../utils/constants';

const axiosAPI = axios.create({
  baseURL: 'https://www.pre-onboarding-selection-task.shop/',
  headers: {
    Authorization: 'Bearer ',
    'Content-Type': 'application/json',
  },
});

axiosAPI.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const token = localStorage.getItem(ACCESS_TOKEN_KEY) ?? '';
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  }
);

export default axiosAPI;
