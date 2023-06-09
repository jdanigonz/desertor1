import React from 'react'
import { Link } from 'react-router-dom'
import Desertor from '../iconos/Desertor.png'

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to ="/">
                    <img src={Desertor} alt='logo desertor' width='80' />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to ="/Inicio">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to ="/RedesSociales">Redes Sociales</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to ="/AcercaUs">Acerca de Us</Link>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
    </div>
  )
}

export default Navbar
