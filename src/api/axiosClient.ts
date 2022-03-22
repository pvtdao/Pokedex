import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  headers: {
    'Content-Type': 'application/json',
  },
});

//Interceptors
// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response;
  },
  function (error) {
    const { config, status, data } = error.response;
    // const URLs = [
    //   '/authentication/register',
    //   '/authentication/login',
    //   '/authentication/verification-email',
    //   '/authentication/forgot-password',
    // ];
    // if (URLs.includes(config.url) && status === 400) {
    //   throw new Error(data.errorMessage);
    // }

    return Promise.reject(error);
  }
);

export default axiosClient;
