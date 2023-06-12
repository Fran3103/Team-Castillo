import React from 'react'
import style from '../Estilos/cardRutina.module.css'

function CardRutinas({imagen, titulo}) {
  return (
    <div className={style.contenedor}>

        <div className={style.Contenedorimg}>
            
            <img src={imagen} alt="imagen" className={style.imagen}/>

        </div>

        <div className={style.ContenedorTitulo} >
            <p className={style.titulo}>
                {titulo}
            </p>
            <p className={style.parrafo}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam minus labore dolorem perferendis error, voluptates accusamus rem in! Maiores consectetur neque soluta doloribus, ut in nobis temporibus atque ipsam excepturi.
            </p>
        </div>

    </div>
  )
}



export default CardRutinas
