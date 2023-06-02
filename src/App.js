import React from 'react';
import './App.css';
import Cards from './componentes/Cards.js';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Navbar from './componentes/navegacion/Navbar';
import RedesSociales from './componentes/paginas/RedesSociales';
import AcercaUs from './componentes/paginas/AcercaUs';
import Inicio from './componentes/paginas/Inicio';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/Inicio' Component={Inicio}/>
          <Route path='/AcercaUs' Component={AcercaUs}/>
          <Route path='/RedesSociales'  Component={RedesSociales}/>
        </Routes>
      </Router>
      <Cards />
    </div>
  );
}

export default App;
