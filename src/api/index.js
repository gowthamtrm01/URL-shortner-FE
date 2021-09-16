import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' })

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req;
});

export const signin = (formData) => API.post('/signin', formData);
export const signup = (formData) => API.post('/signup', formData);
export const forgotPassword = (email) => API.post('/forgotPassword', email);
export const activeLink = (id) => API.patch(`/active/${id}`);
export const resetPassword = (data, id) => API.patch(`/resetPassword/${id}`, data);