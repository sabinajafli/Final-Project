import { API } from "../config/axios"


// ----Login-----
export const LoginCall = (data) => {
    let res = API.post("/login", data)
    return res
}


// -----Register------
export const RegisterCall = (data) => {
    try {
        let res = API.post("/site/register", data);
        return res
    } catch (error) {
        console.error('API Error:', error);
        throw error; 
    }
}


export const ProfileCall=()=>{
    let res =  API.get("/profile")
    return res
}