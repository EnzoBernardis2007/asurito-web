import React from "react"
import { useNavigate } from "react-router-dom"

const Header = () => {
    const navigate = useNavigate()

    const goToLandpage= () => navigate('/')
    const goToSignup = () => navigate('/signup')
    const goToLogin = () => navigate('/login')
    const goToContact = () => navigate('/contact')

    return(
        <header>
            <button onClick={goToLandpage}>Home</button>
            <button onClick={goToSignup}>Cadastro</button>
            <button onClick={goToLogin}>Login</button>
            <button onClick={goToContact}>Contato</button>
        </header>
    )
}

export default Header