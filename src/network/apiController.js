import axios from "axios";

const apiController = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  timeout: 1000,
});

apiController.interceptors.request.use(
  function (config) {
    // SRP에 맞게 수정 필요
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
