import React from "react"
import { useNavigate } from "react-router-dom"
import Header from "../components/HomeHeader"
import Footer from "../components/Footer/Footer"

const Landpage = () => {
    const navigate = useNavigate()

    const goToAboutUs = () => navigate('/about')

    return (
        <>
            <Header />

            <Footer />
        </>
    )
}

export default Landpage