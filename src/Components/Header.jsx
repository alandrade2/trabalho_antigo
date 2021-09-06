import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
export default function Header() {
    return (
    <div className="menu">     
        <div class="container">
            <div class="row row-cols-7">
            <nav className="navMenu">
                    <ul>
                        <li class="col c1" > <Link to="/T1"> Trabalho 01 </Link> </li>
                        <li class="col c2" > <Link to="/T2"> Trabalho 02 </Link> </li>
                        <li class="col c3" > <Link to="/T3"> Trabalho 03 </Link> </li>
                        <li class="col c4" > <Link to="/T4"> Trabalho 04 </Link> </li>
                        <li class="col c5" > <Link to="/T5"> Trabalho 05 </Link> </li>
                        <li class="col c6" > <Link to="/T6"> Trabalho 06 </Link> </li>
                        <li class="col c7" > <Link to="/T7"> Trabalho 07 </Link> </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
    )
}