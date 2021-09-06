import React from 'react'

import './Geral.css'
import Header from '../Components/Header.jsx'
import Footer from '../Components/Footer.js'
import Titulo from '../Components/Titulo.js'
export default function Geral() {
    return (
        <div>
            <header>
                <Header />               
            </header>
            <main>
            <div className="container-geral">
                <Titulo texto = "PÁGINA INICIAL DE TRABALHOS" />
            </div>
            </main>

            <footer>
                <Footer />               
            </footer>
        </div>

    );
}
