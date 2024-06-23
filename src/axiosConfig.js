// src/axiosConfig.js
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080', // URL do seu backend Spring Boot
    withCredentials: false, // Incluir cookies nas requisições, se necessário
    headers: {
        'Content-Type': 'application/json',
    }
});

// Adiciona um interceptor para incluir o token JWT em todas as requisições
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
