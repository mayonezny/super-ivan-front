
import axios from 'axios';

const api = axios.create({
  baseURL: 'localhost:8080', // Замени на свой базовый URL
  timeout: 10000, // Тайм-аут в 10 секунд
});

export default api;
