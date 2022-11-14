import axios from "axios";

const apiController = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  timeout: 1000,
});

apiController.interceptors.request.use(
  function (config) {
    const tokenData = "";
    if (tokenData) {
      config.headers["Authorization"] = `Bearer ${tokenData}`;
    }

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
      throw error.response.data.errorMessage;
    }
    throw error;
  }
);

export default apiController;
