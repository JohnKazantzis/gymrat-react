import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:8080/api/auth"
});

const signIn = (credentials) => api.post("/signin", credentials);

export { signIn }