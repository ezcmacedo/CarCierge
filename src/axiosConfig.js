// src/axiosConfig.js
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080', // URL do seu backend Spring Boot
    withCredentials: false, // Incluir cookies nas requisições, se necessário
    headers: {
        'Content-Type': 'application/json',
    }
});

export default axiosInstance;
