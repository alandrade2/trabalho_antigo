import React from 'react'

import Header from '../Headers/Header_T1.2'
import Footer from '../../../Components/Footer'
import Titulo from '../../../Components/Titulo'



export default function Geral() {
    return (
        <div>
            <header>
                <Header />               
            </header>
            <main>
            <div className="container-geral">
                <Titulo texto = "MENU 3.4-SUPERIORES" />
            </div>
            </main>

            <footer>
                <Footer />               
            </footer>
        </div>

    );
}
