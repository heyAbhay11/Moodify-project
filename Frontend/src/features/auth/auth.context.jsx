import { createContext, useState } from "react";


export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [user, setuser] = useState(null);
    const [loading, setloading] = useState(false);


    return (

        //Data Broadcast Station  -> AuthContext.Provider
        //children -> Receiver Components Ex - (login ,resigster etc.) 
        <AuthContext.Provider value={{ user, setuser, loading, setloading }}>
            {children}
        </AuthContext.Provider>
    )


}

