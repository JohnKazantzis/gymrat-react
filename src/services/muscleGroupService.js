import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080/api/musclegroups"
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

const getAllMuscleGroups = () => api.get();
const getMuscleGroup = (id) => api.get(`/${id}`);

export { getAllMuscleGroups, getMuscleGroup }