import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authData, setAuthData] = useState({
        token: null,
        email: null,
    });

    const login = (token, email) => {
        setAuthData({ token, email });
    };

    const logout = () => {
        setAuthData({ token: null, email: null });
    };

    return (
        <AuthContext.Provider value={{ ...authData, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
