import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
export default function Header() {
    return (
    <div className="menu_Trab01">     
        <div class="container">
            <div class="row row-cols-7">
                <nav>
                    <ul>
                        <li class="col t0" > <Link to="/T1"> MENU </Link> </li>
                        <li class="col t0" > <Link to="/T1/3/4"> VOLTAR </Link> </li>
                        <li class="col t1" > <Link to="#"> 3.4.3.1-MEDIAL </Link> </li>
                        <li class="col t2" > <Link to="#"> 3.4.3.2-LATERAL </Link> </li>
                        <li class="col t3" > <Link to="#"> 3.4.3.3-TENDÕES </Link> </li>
                        <li class="col t4" > <Link to="#"> 3.4.3.4-EXTENSOR </Link> </li>
                        <li class="col t4" > <Link to="#"> 3.4.3.5-ROTADORES </Link> </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
    )
}

