import React, { useEffect, useState } from "react"
import { useAuth } from "../components/AuthProvider"

const Championships = () => {
    const { token } = useAuth()
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

    return (
        <>
            {championshipsList.length > 0 ? (
                championshipsList.map((championship, index) => (
                    <p key={index}>{championship.name}</p> 
                ))
            ) : (
                <p>Nenhum campeonato encontrado.</p> 
            )}
        </>
    )
}

export default Championships