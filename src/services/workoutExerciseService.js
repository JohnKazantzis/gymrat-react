import axios from "axios";

const api = axios.create({ 
    baseURL: "http://localhost:8080/api/workoutexercises" 
});

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

const getWorkoutExercisesByWorkout = (workoutId) => api.get("", {
    params: {
        workoutId: workoutId
    }
});

export { getWorkoutExercisesByWorkout }