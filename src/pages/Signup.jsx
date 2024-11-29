import React, { useEffect, useState } from "react";

const Signup = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        cpf: '',
        fullName: '',
        socialName: '',
        gender: '',
        birthDate: '',
        height: '',
        weight: '',
        sex: '',
        kyu: '',
        dan: '',
        dojo: '',
        city: ''
    });

    const [gendersList, setGendersList] = useState([]);
    const url = 'http://localhost:3000'

    useEffect(() => {
        const getGenders = async () => {
            try {
                const response = await fetch(`${url}/getGenders`);
    
                if (!response.ok) {
                    throw new Error(`HTTP error, status ${response.status}`);
                }

                const data = await response.json();

                // Certifique-se de que data.gendersList é um array
                if (Array.isArray(data.gendersList)) {
                    setGendersList(data.gendersList);
                } else {
                    console.error('gendersList não é um array', data);
                }
            } catch (error) {
                console.log('Erro ao buscar os gêneros:', error);
            }
        };

        getGenders();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(`${url}/postNewAthlete`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(formData)
        })
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* App info */}
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

            {/* Personal info */}
            <label>CPF:</label>
            <input 
                type="text"
                name="cpf"
                value={formData.cpf}
                onChange={handleChange}
            />
            <label>Nome completo:</label>
            <input 
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
            />
            <label>Nome social:</label>
            <input 
                type="text"
                name="socialName"
                value={formData.socialName}
                onChange={handleChange}
            />
            
            <fieldset>
                <legend>Gênero:</legend>
                {/* check if has more than zero genders and choses what show */}
                {gendersList.length > 0 ? (
                    gendersList.map((gender, index) => (
                        <label key={index}>
                            <input
                                type="radio"
                                name="gender" 
                                value={gender.name}
                                checked={formData.gender === gender.name}
                                onChange={handleChange}
                            />
                            {gender.ptbr_name}
                        </label>
                    ))
                ) : (
                    <p>Carregando gêneros...</p>
                )}
            </fieldset>

            <label>Data de nascimento:</label>
            <input 
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
            />
            <label>Altura (em cm):</label>
            <input 
                type="number"
                name="height"
                value={formData.height}
                onChange={handleChange}
            />
            <label>Peso (em kg):</label>
            <input 
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
            />
            
            <fieldset>
                <legend>Sexo:</legend>
                <label>
                    <input 
                        type="radio" 
                        name="sex" 
                        value="male"
                        checked={formData.sex === "male"}
                        onChange={handleChange} 
                    /> Masculino
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="sex" 
                        value="female"
                        checked={formData.sex === "female"}
                        onChange={handleChange} 
                    /> Feminino
                </label>
            </fieldset>

            <label>Kyu:</label>
            <input 
                type="number"
                name="kyu"
                value={formData.kyu}
                onChange={handleChange}
            />
            <label>Dan:</label>
            <input 
                type="number"
                name="dan"
                value={formData.dan}
                onChange={handleChange}
            />

            {/* Additional info */}
            <label>Dojo:</label>
            <input 
                type="text"
                name="dojo"
                value={formData.dojo}
                onChange={handleChange}
            />
            <label>Cidade:</label>
            <input 
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
            />

            <button type="submit">Cadastrar</button>
        </form>
    );
};

export default Signup;
