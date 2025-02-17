import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useAuth } from '../../components/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/HomeHeader';
import Footer from '../../components/Footer/Footer';

const Login: React.FC = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            const data = await response.json();
            login(data.token, data.cpf);
            navigate('/profile');
        } else {
            console.error('Falha no login');
        }
        } catch (error) {
        console.error('Erro ao fazer login:', error);
        }
    };

    return (
        <>
        <Header />
        <form onSubmit={handleSubmit}>
            <label>Email:</label>
            <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            />
            <label>Senha:</label>
            <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            />

            <button type="submit">Entrar</button>
        </form>
        <Footer />
        </>
    );
};

export default Login;
