import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080/api/workouts"
});

// Add a request interceptor
api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('accessToken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
);

const getAllWorkoutsByUserId = (page, size, userId, accessToken) => api.get("", {
    params: { 
        page: page, 
        size: size, 
        userId: userId 
    }
});

export { getAllWorkoutsByUserId }