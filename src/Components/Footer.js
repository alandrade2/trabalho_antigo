import React from 'react';
import { Link } from 'react-router-dom'

import './footer.css';
import ImgInsta from '../img/instagram.png'
import ImgGit from '../img/github.jpg'


function Footer() {
  return (

  <div className="footer">
        <ul className="ulfooter" >
            <li><Link to="/"> Pagina Inicial do Projeto </Link></li>
            <li>Sobre</li>
        </ul>
  <nav>
    <ul>
      <li>
        <a href="#">
          <img src={ ImgInsta }   alt="" />
          <span className="Span-footer">@ecommerce</span>
        </a>
      </li>
      <li>
        <a href="https://github.com/alandrade2" target="blanck">
          <img src={ ImgGit }   alt="" />
          <span className="Span-footer">Git-Hub</span>
        </a>
      </li>
    </ul>
    </nav>
   </div>    
  )
}

export default Footer;