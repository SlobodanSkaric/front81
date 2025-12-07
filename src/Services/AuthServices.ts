import axios from "axios";
import apiClinet from "../api/apiCliner";

interface AuthCredencials {
    email: string;
    password: string;
}

class AuthServices{
    async login({email, password}: AuthCredencials): Promise<void> {
        try{
            const response = await apiClinet.post("/auth/administrator/",{
                email,
                password
            });

            console.log("Login successful:", response.data);
        }catch(error){
            if(axios.isAxiosError(error) && error.response){
                console.error("Login failed:", error.response.data);
                throw new Error(error.response.data.message || "Login failed");
            }else{
                console.error("An unexpected error occurred during login:", error);
                throw new Error("An unexpected error occurred");
            }
        }
    }
}

export const authServices =  new AuthServices();