import axios from "axios";

const accessToken = localStorage.getItem("accessToken");
console.log("Muscle groups - accessToken", accessToken);
const api = axios.create({
    baseURL: "http://localhost:8080/api/musclegroups",
    headers: { 
        "Authorization": accessToken ? `Bearer ${accessToken}` : null 
    }
});

const getAllMuscleGroups = () => api.get();
const getMuscleGroup = (id) => api.get(`/${id}`);

export { getAllMuscleGroups, getMuscleGroup }