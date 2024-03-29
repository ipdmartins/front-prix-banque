import axios from "axios";
import { getUserLocalStorage } from "../context/authProvider/util";

export const api = axios.create({
  baseURL: "http://localhost:3333",
});

api.interceptors.request.use(
  (config) => {
    const user = getUserLocalStorage();

    config.headers.Authorization = user?.token;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
