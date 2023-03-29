import axiosAPI from './axiosAPI';

const loginService = {
  signup: (email: string, password: string) => {
    return axiosAPI.post('auth/signup', { email, password });
  },

  login: (email: string, password: string) => {
    return axiosAPI.post('auth/signin', {
      email,
      password,
    });
  },
};

export default loginService;
