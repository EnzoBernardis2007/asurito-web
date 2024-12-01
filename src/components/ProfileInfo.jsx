import React, { useState, useEffect } from "react"
import { useAuth } from "./AuthProvider"

const ProfileInfo = () => {
    const { cpf, token } = useAuth()
    const [athleteInfo, setAthleteInfo] = useState([])

    useEffect(() => {
        const getAthleteInfo = async () => {
            try {
                const response = await fetch(`http://localhost:3000/profile?cpf=${cpf}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                })

                if (response.ok) {
                    const data = await response.json()
                    console.log([data.athlete])
                    setAthleteInfo(Array.isArray(data.athlete) ? data.athlete : [data.athlete]);
                } else {
                    console.error("Failed to fetch athlete information.")
                }
            } catch (error) {
                console.error("Error fetching athlete information:", error)
            }
        }

        getAthleteInfo()
    }, []) 

    return (
        <>
            {athleteInfo.map((athlete, index) => (
                <div key={index}>
                    {Object.keys(athlete).map((key) => (
                        <p key={key}>
                            <strong>{key}:</strong> {athlete[key]}
                        </p>
                    ))}
                </div>
            ))}
        </>
    )
}

export default ProfileInfo
