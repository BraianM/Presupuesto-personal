import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NuevaOperacion from './components/NuevaOperacion';
import Operaciones from './components/Operaciones';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={ <App /> } />
      <Route path='/nueva-operacion' element={ <NuevaOperacion /> } />
      <Route path='/operaciones' element={ <Operaciones /> } />
    </Routes>
  </BrowserRouter>
);


