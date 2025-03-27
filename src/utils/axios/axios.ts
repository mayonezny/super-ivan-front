
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { outerApi } from '../constants/endpoints';

const api = axios.create({
  baseURL: 'https://localhost:8080', // Замени на свой базовый URL
  timeout: 10000, // Тайм-аут в 10 секунд
});

let isRefreshing = false;
let failedQueue: Array<{
  resolve: (token?: string) => void;
  reject: (error: any) => void;
}> = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token || '');
    }
  });
  failedQueue = [];
};

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as AxiosRequestConfig & { _retry?: boolean };
    console.log('перший признак работы интерцептора')
    if (error.response?.status === 401 && !originalRequest._retry) {
      console.log('прилетает')
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then(token => {
            originalRequest.headers = {
              ...originalRequest.headers,
              'Authorization': 'Bearer ' + token,
            };
            return api(originalRequest);
          })
          .catch(err => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        console.log('zzzz');
        const { data } = await api.post(`${outerApi}/auth/refresh`, { "ivan": 'zapara' }, { headers: { 'Content-Type': 'application/json' }, withCredentials: true });
        console.log('dt', data)
        // Обновляем токен в локальном хранилище или глобальном состоянии
        api.defaults.headers.common['Authorization'] = 'Bearer ' + data.accessToken;
        processQueue(null, data.accessToken);
        originalRequest.headers!['Authorization'] = 'Bearer ' + data.accessToken;
        return api(originalRequest);
      } catch (err) {
        processQueue(err, null);
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }
    return Promise.reject(error);
  },
);

export default api;
