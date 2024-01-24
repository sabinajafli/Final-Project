import axios from "axios";

const API = axios.create({
    baseURL: 'https://frontend-api-dypw.onrender.com/api/8080dddd-9d50-406f-8d9e-3cbb51a18294',
});

const token = typeof window !== 'undefined' ? localStorage.getItem("token") : null;

if (token) {
  API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export { API };