import React, { useState, ChangeEvent, FormEvent } from 'react';
import style from './Contact.module.css';
import HomeHeader from '../../components/HomeHeader';
import Footer from '../../components/Footer/Footer';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        email: '',
        about: '',
        message: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Aqui você pode adicionar lógica para enviar os dados para algum backend ou serviço
        console.log(formData);
    };

    return (
        <>
        <HomeHeader />
        <div className={style['form-container']}>
            <p className={style.title}>Mande um email para nós!</p>
            <form className={style.form} onSubmit={handleSubmit}>
            <div className={style['input-group']}>
                <label>Email</label>
                <input
                type="email"
                placeholder="Digite seu e-mail"
                value={formData.email}
                onChange={handleChange}
                name="email"
                required
                />
            </div>
            <div className={style['input-group']}>
                <label>Assunto</label>
                <input
                type="text"
                placeholder="Digite o assunto"
                value={formData.about}
                onChange={handleChange}
                name="about"
                required
                />
            </div>
            <div className={style['input-group']}>
                <label>Mensagem</label>
                <textarea
                style={{ resize: 'none', height: 150 }}
                value={formData.message}
                onChange={handleChange}
                name="message"
                required
                />
            </div>
            <button className={style.sign} type="submit">
                Enviar
            </button>
            </form>
        </div>
        <Footer />
        </>
    );
};

export default Contact;
