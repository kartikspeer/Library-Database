import axios from "axios";

const API = axios.create({baseURL: "http://localhost:8000"});
console.log(localStorage.getItem("authtoken"))
API.interceptors.request.use(
    request => {
        if(localStorage.getItem("authtoken")){
            request.headers.Authorization = `Bearer ${localStorage.getItem("authtoken")}`;
        }
        return request;
    }
);

export default API;