import React from 'react'
import Card from './Card'
import economia from './imagenes/ecnomia.png' 
import Noticias from '../componentes/imagenes/Noticias.png'
import politica from './imagenes/politiqueria.jpg'


const cards = [
    {
        id: 1,
        title: "Economia",
        imagen: economia,
        texto: "Abordaremos la economia en Bolivia junto con todas aquellas politicas la arruinan, ademas de la clara inclinacion a un sistema economico que ya se sabe que fracaso y fracasara",
        url: 'https://tucontribuyes.com/wp-content/uploads/2021/02/Hazlitt-La-economi%CC%81a-en-una-leccio%CC%81n.pdf'

    },
    {
        id: 2,
        title: "Noticias",
        imagen: Noticias,
        texto: "Las noticias mas relevantes dentro de la politica Boliviana, mantén tu dedo en el pulso de los acontecimientos políticos, decisiones importantes y eventos que afectan directamente a nuestra region.",
        url: 'https://www.la-razon.com/economia/2023/05/28/interventor-del-banco-fassil-cae-de-un-edificio-y-muere/'
    },
    {
        id: 3,
        title: "Politiqueria",
        imagen: politica,
        texto: "Casos de corrupción y malos manejos estatales. Te proporcionaremos los hechos necesarios para que puedas entender mejor la magnitud del problema y el grado de corrupcion de las instituciones publicas",
        url: 'https://www.paginasiete.bo/nacional/dias-antes-de-su-muerte-testigo-confirmo-corrupcion-en-abc-denuncio-que-el-gobierno-no-hizo-nada-y-la-persecucion-de-lima-XE6879101'
    }
]

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="row">
            {
                cards.map(card => (
                    <div className="col-md-4" key={card.id} >
                        <Card title={card.title} imagen={card.imagen} texto={card.texto} url={card.url} />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Cards
