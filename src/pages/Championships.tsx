import React, { useEffect, useState } from 'react';
import { useAuth } from '../components/AuthProvider';
import Header from '../components/Header';

interface Championship {
  id: string;
  name: string;
}

const Championships: React.FC = () => {
  const { token, cpf } = useAuth();
  const [championshipsList, setChampionshipsList] = useState<Championship[]>([]);

  useEffect(() => {
    const getChampionships = async () => {
      try {
        const response = await fetch('http://localhost:3000/getChampionships', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();

          if (Array.isArray(data.championshipsList)) {
            setChampionshipsList(data.championshipsList);
          } else {
            console.error('Formato inesperado:', data);
          }
        } else {
          console.error('Erro ao buscar campeonatos:', response.statusText);
        }
      } catch (error) {
        console.error('Erro na requisição:', error);
      }
    };

    getChampionships();
  }, [token]);

  const subscribe = async (idChampionship: string) => {
    try {
      const response = await fetch('http://localhost:3000/inscription', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cpf, idChampionship }),
      });

      if (response.ok) {
        window.alert('Inscrito com sucesso!');
      } else {
        console.error('Erro na inscrição:', response.statusText);
      }
    } catch (error) {
      console.error('Erro na requisição de inscrição:', error);
    }
  };

  return (
    <>
      <Header />
      {championshipsList.length > 0 ? (
        championshipsList.map((championship) => (
          <div key={championship.id}>
            <p>{championship.name}</p>
            <button onClick={() => subscribe(championship.id)}>Se inscrever</button>
          </div>
        ))
      ) : (
        <p>Nenhum campeonato encontrado.</p>
      )}
    </>
  );
};

export default Championships;
