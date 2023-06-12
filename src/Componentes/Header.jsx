import React from 'react'
import logo from '../Img/logo.svg';
import style from '../Estilos/header.module.css';
import img from '../Img/principal.png';
import insta from '../Img/icon-instagram.svg';
import what from '../Img/brand-whatsapp.svg';

export default function Header() {
  return (
    <div >
        <div className={style.menu}>
          <img src={logo} alt="logo" className={style.logo} />
          <div className={style.redes}>
            <img src={insta} alt='insta' className={style.insta}/>
            <img   src={what} alt='whatsapp' className={style.whatsapp}/>
          </div>
        </div>
        
        <div className={style.contenedor}>
          <div className={style.contenedorTexto}>
            <h1>Personal Trainer</h1>
            <h2>Instructor de Musculacion</h2>

            <p>
                Rutinas personalizadas para cada tipo de objetivo de manera presencial, semipresencial  y online. 
            </p>
            <a href='https://wa.me/5491126461216' target='blank' className={style.contacto}>Contacto</a>
          </div>
          <img src={img} alt="principal" className={style.imgPrincipal} />
        </div>
        

        


    </div>
  )
}
