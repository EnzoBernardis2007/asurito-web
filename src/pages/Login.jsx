import React, { useState } from "react"
import { useAuth } from '../components/AuthProvider';
import { useNavigate } from "react-router-dom";
import Header from "../components/HomeHeader";

const Login = () => {
    const { login } = useAuth()
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(formData)
        })

        if(response.ok) {
            const data = await response.json()
            login(data.token, formData.email)
            navigate('/profile')
        }
    }

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
        </>
    )
}

export default Login