import React from "react"
import { useNavigate } from "react-router-dom"

const Landpage = () => {
    const navigate = useNavigate()

    const goToSignup = () => navigate('/signup')
    const goToLogin = () => navigate('/login')
    const goToContact = () => navigate('/contact')
    const goToAboutUs = () => navigate('/about')

    return (
        <>
            <button onClick={goToSignup}>entrar</button>
            <button onClick={goToLogin}>login</button>
            <button onClick={goToContact}>contato</button>

            <footer>
                <h5>Porque nós?</h5>
                <button content='Sobre nós' onClick={goToAboutUs}/>
            </footer>
        </>
    )
}

export default Landpage