import React from 'react'
import CardTestimonios from './CardTestimonios';
import '../Estilos/testimonios.css'
import img1 from '../Img/red1.jpg';
import img2 from '../Img/red2.jpg';
import img3 from '../Img/red3.jpg';


export default function Testimonios() {
  return (
    <>
        <div className='testimonios'>

            <CardTestimonios 
            imagen={img1}
            nombre={"Ana Fleitas"}
            parrafo={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy e"}/>

            <CardTestimonios 
            imagen={img2}
            nombre={"Axel Ludueña"}
            parrafo={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy e"}/>

            <CardTestimonios 
            imagen={img3}
            nombre={"More Lorde"}
            parrafo={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy e"}/>




        </div>
    
    
    </>
  )
}
