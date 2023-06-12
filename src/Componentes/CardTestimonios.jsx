import React from 'react';
import style from '../Estilos/cardTestimonios.module.css';
export default function CardTestimonios({imagen, nombre, parrafo}) {
  return (
    <div className={style.contenedor}>

        <div className={style.card}>
          <div className={style.contenedorImg}>
                  <img src={imagen} alt="imagen" className={style.img} />
          </div>

          <p className={style.nombre}>
              {nombre}
          </p>

          <p className={style.parrafo}>
              {parrafo}
          </p>
        </div>

    </div>
  )
}
