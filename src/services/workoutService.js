import axios from "axios";

const accessToken = sessionStorage.getItem("accessToken");
const api = axios.create({
    baseURL: "http://localhost:8080/api/workouts",
    headers: { 
        "Authorization": accessToken ? `Bearer ${accessToken}` : null 
    }
});

const getAllWorkoutsByUserId = (page, size, userId, accessToken) => api.get("", {
    params: { 
        page: page, 
        size: size, 
        userId: userId 
    }
});

export { getAllWorkoutsByUserId }