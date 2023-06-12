import React from 'react';

import style from '../Estilos/contacto.module.css';

import img from '../Img/pareja.png';

function Contacto() {
  return (
    <div className={style.contenedor}>
        <div>
            <p>
                Contacto
            </p>
        </div>
        <div className={style.contenedorForm}>
          <form className={style.formulario}>
              <input placeholder='Nombre' className={style.nombre}>
              </input>
              <input type='number' placeholder='Telefono' className={style.telefono}></input>
              <input type='email' placeholder='Email' className='email'></input>
              <input type='submit' className={style.boton}>
                
              </input>
          </form>

          <img src={img} alt='pareja' className={style.pareja}/>



        </div>
        

    </div>
  )
}

export default Contacto