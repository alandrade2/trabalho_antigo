import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
export default function Header() {
    return (
    <div className="menu_Trab01">     
        <div class="container">
            <div class="row row-cols-6">
                <nav>
                    <ul>
                        <li class="col t0" > <Link to="/T1"> MENU </Link> </li>
                        <li class="col t0" > <Link to="/T1/3"> VOLTAR </Link> </li>
                        <li class="col t1" > <Link to="#"> 3.4.1-BÍCEPS </Link> </li>
                        <li class="col t2" > <Link to="#"> 3.4.2-TRICEPIS </Link> </li>
                        <li class="col t3" > <Link to="/T1/3/4/3"> 3.4.3-CUTÂNEOS </Link> </li>
                        <li class="col t4" > <Link to="#"> 3.4.4-PROFUNDOS </Link> </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
    )
}

