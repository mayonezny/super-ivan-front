
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'localhost:80', // Замени на свой базовый URL
  timeout: 10000, // Тайм-аут в 10 секунд
});

export default axiosInstance;
