import React from "react"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"

const Landpage = () => {
    const navigate = useNavigate()

    const goToAboutUs = () => navigate('/about')

    return (
        <>
            <Header />

            <footer>
                <h5>Porque nós?</h5>
                <button content='Sobre nós' onClick={goToAboutUs}/>
            </footer>
        </>
    )
}

export default Landpage