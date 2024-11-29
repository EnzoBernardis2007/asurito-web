import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authData, setAuthData] = useState({
        token: null,
        cpf: null,
    });

    const login = (token, cpf) => {
        setAuthData({ token, cpf });
    };

    const logout = () => {
        setAuthData({ token: null, cpf: null });
    };

    return (
        <AuthContext.Provider value={{ ...authData, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
