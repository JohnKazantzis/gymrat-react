import axios from "axios";

// Create API
const accessToken = sessionStorage.getItem("accessToken");
const api = axios.create({
    baseURL: "http://localhost:8080/api/users",
    headers: {
        "Authorization": `Bearer ${accessToken}` ?? null
    }
});

const getAllUsers = () => api.get();
const getUser = (id) => api.get(`/${id}`);
const updateUser = (user) => api.put(`/${user.id}`, user);

export { getUser, updateUser, getAllUsers }