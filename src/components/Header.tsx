import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
    const navigate = useNavigate();

    const goToProfile = () => navigate('/profile');
    const goToChampionships = () => navigate('/championships');

    return (
        <header>
            <button onClick={goToProfile}>Perfil</button>
            <button onClick={goToChampionships}>Campeonatos</button>
        </header>
    );
};

export default Header;
