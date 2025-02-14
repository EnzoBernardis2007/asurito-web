import React, { useState, useEffect } from "react";
import { useAuth } from "../../components/AuthProvider";

const ProfileInfo = () => {
    const { cpf, token } = useAuth();
    const [athleteInfo, setAthleteInfo] = useState({}); // Inicializa como objeto vazio

    useEffect(() => {
        const getAthleteInfo = async () => {
            try {
                const response = await fetch(`http://localhost:3000/profile?cpf=${cpf}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setAthleteInfo(data.athlete || {}); // Garante que seja um objeto
                } else {
                    console.error("Failed to fetch athlete information.");
                }
            } catch (error) {
                console.error("Error fetching athlete information:", error);
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

const InfoCard = ({ label, info }) => {
    return (
        <p>
            <strong>{label}:</strong> {info}
        </p>
    );
};

export default ProfileInfo;
