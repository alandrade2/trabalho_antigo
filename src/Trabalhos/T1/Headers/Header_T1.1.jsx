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
                        <li class="col t0" > <Link to="/T1"> VOLTAR </Link> </li>
                        <li class="col t1" > <Link to="#"> 3.1-CABEÇA </Link> </li>
                        <li class="col t2" > <Link to="#"> 3.2-PESCOÇO </Link> </li>
                        <li class="col t3" > <Link to="#"> 3.3-TRONCO </Link> </li>
                        <li class="col t4" > <Link to="/T1/3/4"> 3.4-SUPERIORES </Link> </li>
                        <li class="col t5" > <Link to="#"> 3.5-INFERIORES </Link> </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
    )
}

