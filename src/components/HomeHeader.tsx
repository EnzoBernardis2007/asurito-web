import React from 'react';
import style from './HomeHeader.module.css';
import { useNavigate } from 'react-router-dom';

const HomeHeader: React.FC = () => {
    const navigate = useNavigate();

    const goToLandpage = () => navigate('/');
    const goToSignup = () => navigate('/signup');
    const goToLogin = () => navigate('/login');
    const goToContact = () => navigate('/contact');

    return (
        <header className={style.container}>
        <button className={style.link} onClick={goToLandpage}>
            Home
        </button>
        <button className={style.link} onClick={goToSignup}>
            Cadastro
        </button>
        <button className={style.link} onClick={goToLogin}>
            Login
        </button>
        <button className={style.link} onClick={goToContact}>
            Contato
        </button>
        </header>
    );
};

export default HomeHeader;
