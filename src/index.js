import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Acai from './pages/açai/index.js' 
import Signo from './pages/signo/index.js'
import Sorveteria from './pages/sorveteria/index.js'
import Febre from './pages/febre'
import Salario from './pages/salario'
import Abastecimento from './pages/abastecimento'
import Orcamento from './pages/orcamento/index.js'
import { BrowserRouter,Route, Routes } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/salario' element={<Salario />} />     
        <Route path='/Acai' element={<Acai />} />
        <Route path='/signo' element={<Signo />} />
        <Route path='/sorveteria' element={<Sorveteria />} />
        <Route path='/febre' element={<Febre/>} />
        <Route path='/abastecimento' element={<Abastecimento />} />
        <Route path='/salario' element={<Salario />} /> 
        <Route path='/orcamento' element={<Orcamento />} />     
    
         </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

