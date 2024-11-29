import React, { useEffect, useState } from "react"
import { useAuth } from "../components/AuthProvider"
import Header from "../components/Header"

const Championships = () => {
    const { token, cpf } = useAuth()
    const [championshipsList, setChampionshipsList] = useState([])

    useEffect(() => {
        const getChampionships = async () => {
            try {
                console.log(token)
                const response = await fetch('http://localhost:3000/getChampionships', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization': `Bearer ${token}`,
                    },
                })

                if (response.ok) {
                    const data = await response.json() 
                    setChampionshipsList(data.championshipsList)
                } else {
                    console.error("Erro ao buscar campeonatos:", response.statusText)
                }
            } catch (error) {
                console.error("Erro na requisição:", error)
            }
        }

        getChampionships()
    }, [])

    const subscribe = async (idChampionship) => {
        const response = await fetch('http://localhost:3000/inscription', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ cpf, idChampionship })
        })
        
        if(response.ok) {
            window.alert('inscrito!')
        }
    }

    return (
        <>
            <Header />
            {championshipsList.length > 0 ? (
                championshipsList.map((championship, index) => (
                    <div key={index}>
                        <p>{championship.name}</p> 
                        <button onClick={() => (subscribe(championship.id))}>Se inscrever</button>
                    </div>
                ))
            ) : (
                <p>Nenhum campeonato encontrado.</p> 
            )}
        </>
    )
}

export default Championships