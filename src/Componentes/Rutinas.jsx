import React from 'react'
import CardRutinas from './CardRutinas'
import rutina1S from '../Img/men-fitnes-S.jpg';
import rutina2S from '../Img/img-Online.jpg';
import rutina3S from '../Img/imagenSemipresencial.jpg';

import '../Estilos/rutinas.css';


function Rutinas() {
  return (
    <div className='rutinas'>
        < CardRutinas
        imagen={rutina1S}
        titulo={"Rutinas Personalizadas"}
        />

        <CardRutinas
        imagen={rutina2S}
        titulo={"Entrenamiento Online"}
        />

        <CardRutinas
        imagen={rutina3S}
        titulo={"Entrenamiento SemiPresencial"}
        />


    </div>
  )
}



export default Rutinas
