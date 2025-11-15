import React from 'react'
import { createContext , useState , useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'


console.log("AuthContext Loaded!!")

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const [isLoggedIn, setIsLoggedIn] = useState(false);


    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) return;
        

        try {
            const decoded = jwtDecode(token);

            let currentTime = Date.now() / 1000;
            if (decoded.exp < currentTime) {
                logout();
            } else {
                setUser(decoded);
                setIsLoggedIn(true);
            }
        }
        catch {
            logout();
        }
    }, []); 


    // Login
    function login(token) {
        localStorage.setItem("token", token); 

        const decode = jwtDecode(token); 
        setUser(decode);
        setIsLoggedIn(true);
    }

    // Logout
    function logout() {
        localStorage.removeItem("token"); 
        setUser(null); 
        setIsLoggedIn(false)
    }


    return (
        <AuthContext.Provider value={{ user, isLoggedIn, login, logout }} >
            {children}
        </AuthContext.Provider>
    )
}