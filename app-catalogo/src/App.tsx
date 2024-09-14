
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PWABadge from './PWABadge.tsx'
import './App.css'
import SimpleContainer from './components/container.tsx';
import {CatalogoErros} from './components/catalogo-de-erros.tsx';

function App() {
 

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<SimpleContainer />} />
        <Route path="/erros" element={<CatalogoErros />} />
      </Routes>
      </Router>
      <PWABadge />
    </>
  )
}

export default App
