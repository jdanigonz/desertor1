import React from 'react'
import '../paginas/redesSociales.css'
import facebook from '../iconos/facebook.png'
import instagram from '../iconos/instagram.png'
import tikTok from '../iconos/tikTok.png'

function RedesSociales() {
  return (
    <div className='contenedor'>
        <h1 className='redes'><i>Redes sociales</i></h1>
        <nav className='contendor-redes'>
            <a href='https://www.facebook.com/juandaniel.gonzaleszurita.9/' alt="" target='blank'>
              <img src={facebook} className='imagenes' alt='Facebook'></img>
            </a>         
            <a href='https://instagram.com/jdani.gonz?igshid=MzNlNGNkZWQ4Mg==' alt="" target='blank'>
              <img src={instagram} className='imagenes' alt='Facebook'></img>
            </a>
            <a href='https://www.tiktok.com/@danizurita133' alt="" target='blank'>
              <img src={tikTok} className='imagenes' alt='Facebook'></img>
            </a>
        </nav>
    </div>
  )
}

export default RedesSociales
