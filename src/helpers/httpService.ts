import axios from 'axios';

const httpService = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

httpService.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error),
);

httpService.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  },
);

export default httpService;
