// api.js

import axios from 'axios';

export const getToken = () => {
    return localStorage.getItem('accessToken');
};

export const isTokenExpired = () => {
};

export const tokenRefresh = () => {
};

const api = axios.create({
    baseURL: 'http://localhost:4000'
});

api.interceptors.request.use(
    (config) => {
        const accessToken = getToken();
        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        console.log("요청합니다.");
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        console.log("응답합니다.");
        return response;
    },
    (error) => {
        console.log("응답 실패", error);
        return Promise.reject(error);
    }
);

export default api;
