import React, { createContext, useState, useContext, ReactNode } from 'react';

// Definindo tipos para o estado de autenticação
interface AuthData {
    token: string | null;
    cpf: string | null;
}

// Tipando o contexto com os métodos e dados
interface AuthContextType extends AuthData {
    login: (token: string, cpf: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [authData, setAuthData] = useState<AuthData>({
        token: null,
        cpf: null,
    });

    const login = (token: string, cpf: string) => {
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

// Custom hook para acessar o contexto
export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
