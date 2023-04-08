import axiosAPI from './axiosAPI';
import { ACCESS_TOKEN_KEY } from '../utils/constants';

const loginService = {
  signup: (email: string, password: string) => {
    return axiosAPI.post('auth/signup', { email, password });
  },

  login: async (email: string, password: string) => {
    const response = await axiosAPI.post('auth/signin', {
      email,
      password,
    });
    const token = response.data.access_token;
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
    return;
  },
};

export default loginService;
