import axios from 'axios';

const baseApi = axios.create({
    baseURL: "http://localhost:3001",
    headers: {
        "Content-Type": "application/json",
    }
})

export default baseApi;