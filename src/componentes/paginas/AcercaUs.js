import React from 'react'
import '../paginas/acerca.css'
import dani from '../imagenes/dani.jpg'

function AcercaUs() {
  return (
    <div className='quienesSomos'>
      <h1><i>¿Como Nace Desertor?</i></h1>
      <div className='contenedor-testimonio'>
        <img src={dani} className='imagen-testimonio' alt='Foto Dani'/>
        <div className='contenedor-texto-testimonio'>
            <h2 className='nombre-testimonio'>Dani Zurita</h2>   
            <p className='mision-testimonio'><b>Desertor Economico</b>, surge tras la necesidad de crear contenido informativo y análisis crítico sobre temas políticos y económicos, con un enfoque especial en denunciar los regímenes autoritarios y promover los principios del libre mercado.<br/>

            <b>Nuestra misión</b> es fomentar la conciencia y el debate en torno a los desafíos que enfrentan las sociedades bajo regímenes autoritarios, así como resaltar los beneficios de una economía basada en la libre competencia y el respeto a los derechos individuales. Creemos firmemente en la importancia de la libertad política y económica para el desarrollo y el bienestar de las personas.

            Nuestro contenido se basa en investigación y análisis de los eventos y políticas actuales, respaldada por fuentes confiables, para garantizar la calidad y la exactitud de nuestro contenido.

            Alentamos a nuestros lectores a involucrarse en la lucha contra los regímenes autoritarios y a promover políticas que fomenten la libertad individual, la igualdad de oportunidades y el crecimiento económico sostenible. Juntos, podemos marcar la diferencia y contribuir a la construcción de sociedades más libres y prósperas.

            ¡Gracias por visitar nuestra página!</p>
          </div>
        
      </div>
    </div>
  )
}

export default AcercaUs
