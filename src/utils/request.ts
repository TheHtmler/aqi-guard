import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://www.afair-cc.com',
  timeout: 5000,
});

// 请求拦截器
axiosInstance.interceptors.request.use(
  (config: any) => {
    // config.headers['Authorization'] = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response?.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
