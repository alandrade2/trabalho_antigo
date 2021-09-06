import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
export default function Header() {
    return (
    <div className="menu_Trab01">     
        <div class="container">
            <div class="row row-cols-5">
                <nav>
                    <ul>
                        <li class="col t1" > <Link to="#"> 1-ESQUELÉTICO </Link> </li>
                        <li class="col t2" > <Link to="#"> 2-ARTICULAR </Link> </li>
                        <li class="col t3" > <Link to="/T1/3"> 3-MUSCULAR </Link> </li>
                        <li class="col t4" > <Link to="#"> 4-CARDIOVASCULAR </Link> </li>
                        <li class="col t5" > <Link to="#"> 5-RESPIRATÓRIO </Link> </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
    )
}

