import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080/api/users"
});

const getUser = (id) => api.get(`/${id}`);
const updateUser = (user) => api.put(`/${user.id}`, user);

export { getUser, updateUser }