import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import Header from '../components/HomeHeader';
import Footer from '../components/Footer/Footer';

interface Gender {
    id: number;
    name: string;
    ptbr_name: string;
}

interface FormData {
    email: string;
    password: string;
    cpf: string;
    fullName: string;
    socialName: string;
    gender: string;
    birthDate: string;
    height: string;
    weight: string;
    sex: string;
    kyu: string;
    dan: string;
    dojo: string;
    city: string;
}

const Signup: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
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
        city: '',
    });

    const [gendersList, setGendersList] = useState<Gender[]>([]);
    const url = 'http://localhost:3000';

    useEffect(() => {
        const getGenders = async () => {
        try {
            const response = await fetch(`${url}/getGenders`);

            if (!response.ok) {
            throw new Error(`HTTP error, status ${response.status}`);
            }

            const data = await response.json();

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

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
        ...prev,
        [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
        const response = await fetch(`${url}/postNewAthlete`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            console.error('Erro ao cadastrar atleta', await response.text());
        } else {
            console.log('Cadastro realizado com sucesso');
        }
        } catch (error) {
        console.error('Erro na requisição:', error);
        }
    };

    return (
        <>
        <Header />
        <form onSubmit={handleSubmit}>
            {/* App info */}
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            <label>Senha:</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />

            {/* Personal info */}
            <label>CPF:</label>
            <input type="text" name="cpf" value={formData.cpf} onChange={handleChange} />
            <label>Nome completo:</label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
            <label>Nome social:</label>
            <input type="text" name="socialName" value={formData.socialName} onChange={handleChange} />

            <fieldset>
            <legend>Gênero:</legend>
            {gendersList.length > 0 ? (
                gendersList.map((gender) => (
                <label key={gender.id}>
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
            <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} />
            <label>Altura (em cm):</label>
            <input type="number" name="height" value={formData.height} onChange={handleChange} />
            <label>Peso (em kg):</label>
            <input type="number" name="weight" value={formData.weight} onChange={handleChange} />

            <fieldset>
            <legend>Sexo:</legend>
            <label>
                <input type="radio" name="sex" value="male" checked={formData.sex === 'male'} onChange={handleChange} />
                Masculino
            </label>
            <label>
                <input type="radio" name="sex" value="female" checked={formData.sex === 'female'} onChange={handleChange} />
                Feminino
            </label>
            </fieldset>

            <label>Kyu:</label>
            <input type="number" name="kyu" value={formData.kyu} onChange={handleChange} />
            <label>Dan:</label>
            <input type="number" name="dan" value={formData.dan} onChange={handleChange} />

            {/* Additional info */}
            <label>Dojo:</label>
            <input type="text" name="dojo" value={formData.dojo} onChange={handleChange} />
            <label>Cidade:</label>
            <input type="text" name="city" value={formData.city} onChange={handleChange} />

            <button type="submit">Cadastrar</button>
        </form>
        <Footer />
        </>
    );
};

export default Signup;
