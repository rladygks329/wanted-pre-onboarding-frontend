import axios from "axios";

const axiosAPI = axios.create({
  baseURL: "https://pre-onboarding-selection-task.shop/",
});

export default axiosAPI;
