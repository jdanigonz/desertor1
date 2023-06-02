import React from 'react'
import './cards.css'

function Card({title, imagen, texto, url}) {
  return (
    <div className='card text-center bg-dark animate__animated animate__fadeInUp'>
        <div className='overflow'>
            <img src={imagen} className='card-img-top' alt=''/>
        </div>
            <div className='card-body h-100 text-white'>
            <h4 className='card-title'>{title}</h4>
            <p className='card-text text-secondary'>{texto}</p>
            <a href= {url} className='btn btn-outline-secondary rounded-0' target='blank'>Go to web site</a>
        </div>
    </div>
  )
}
export default Card;