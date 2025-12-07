import axios from "axios";

const apiClinet = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 10000,
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
});

apiClinet.interceptors.response.use(
    (response) => response,
    (error) => {
        if(axios.isAxiosError(error) && error.response){
            if (error.response.status === 401) {
                console.error("Unauthorized access - redirecting to login.");
            }
        }
        return Promise.reject(error);
    }
);

export default apiClinet;