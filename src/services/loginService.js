import axiosAPI from "./axiosAPI";

const loginService = {
  signup: (email, password) => {
    return axiosAPI.post("auth/signup", { email, password });
  },
  login: (email, password) => {
    return axiosAPI.post("auth/signin", {
      email,
      password,
    });
  },
};

export default loginService;
