import { useContext } from "react";
import { AuthContext } from "../auth.context";
import { login, register, getme, logout } from "../services/auth.api.";




export const useAuth = () => {
    const context = useContext(AuthContext)
    const {user,loading,setuser,setloading} = context 
}