import axios from "axios";

const apiController = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  withCredentials: true,
  timeout: 1000,
});

apiController.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

apiController.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    if (error.response) {

      if (error.response.data.errorMessage === "Authentication error") {
        window.location.href = "/";
      }

      throw error.response.data.errorMessage;
    }
    throw error;
  }
);

export default apiController;
