import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Acai from './pages/açai/index.js' 
import Signo from './pages/signo/index.js'
import Sorveteria from './pages/sorveteria/index.js'
import { BrowserRouter,Route, Routes } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Acai />} />
        <Route path='/signo' element={<Signo />} />
        <Route path='/sorveteria' element={<Sorveteria />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

