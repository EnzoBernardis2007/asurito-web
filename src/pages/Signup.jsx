import React, { useState } from "react";

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
        state: '',
        city: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
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
                <label>
                    <input 
                        type="radio" 
                        name="gender" 
                        value="Masculino"
                        checked={formData.gender === "Masculino"}
                        onChange={handleChange} 
                    /> Masculino
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="gender" 
                        value="Feminino"
                        checked={formData.gender === "Feminino"}
                        onChange={handleChange} 
                    /> Feminino
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="gender" 
                        value="Outro"
                        checked={formData.gender === "Outro"}
                        onChange={handleChange} 
                    /> Outro
                </label>
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
                        value="Masculino"
                        checked={formData.sex === "Masculino"}
                        onChange={handleChange} 
                    /> Masculino
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="sex" 
                        value="Feminino"
                        checked={formData.sex === "Feminino"}
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
            <label>Estado:</label>
            <input 
                type="text"
                name="state"
                value={formData.state}
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