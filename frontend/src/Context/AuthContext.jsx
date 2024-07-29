import React, { createContext, useContext, useState } from 'react'


const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    let [isAuthenticated, setIsAuthenticated] = useState(false)

    let login = () => {
        setIsAuthenticated(true)
    }

    let logout = () => {
        setIsAuthenticated(false)
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}
