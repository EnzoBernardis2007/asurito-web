import React, { useState, useEffect } from 'react';
import { useAuth } from '../../components/AuthProvider';

interface AthleteInfo {
    full_legal_name?: string;
    prefered_name?: string;
    gender_name?: string;
    city?: string;
}

const ProfileInfo: React.FC = () => {
    const { cpf, token } = useAuth();
    const [athleteInfo, setAthleteInfo] = useState<AthleteInfo>({});

    useEffect(() => {
        const getAthleteInfo = async () => {
        try {
            const response = await fetch(`http://localhost:3000/profile?cpf=${cpf}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            });

            if (response.ok) {
            const data = await response.json();
            setAthleteInfo(data.athlete || {});
            } else {
            console.error('Failed to fetch athlete information.');
            }
        } catch (error) {
            console.error('Error fetching athlete information:', error);
        }
        };

        getAthleteInfo();
    }, [cpf, token]);

    const { full_legal_name, prefered_name, gender_name, city } = athleteInfo;

    return (
        <>
        <InfoCard label="Nome Completo" info={full_legal_name || 'Não informado'} />
        <InfoCard label="Nome Preferido" info={prefered_name || 'Não informado'} />
        <InfoCard label="Gênero" info={gender_name || 'Não informado'} />
        <InfoCard label="Cidade" info={city || 'Não informado'} />
        </>
    );
};

interface InfoCardProps {
    label: string;
    info: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ label, info }) => {
    return (
        <p>
            <strong>{label}:</strong> {info}
        </p>
    );
};

export default ProfileInfo;
