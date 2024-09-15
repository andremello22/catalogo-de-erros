
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PWABadge from './PWABadge.tsx'
import './App.css'
import {InputsFormComponent} from './components/form.tsx';
import {CatalogoErros} from './components/catalogo-de-erros.tsx';
import { SelecionadoProvider } from './components/global.tsx';

function App() {
 

  return (
    <SelecionadoProvider>
      <Router>
      <Routes>
        <Route path="/" element={<InputsFormComponent />} />
        <Route path="/erros" element={<CatalogoErros />} />
      </Routes>
      </Router>
      <PWABadge />
    </SelecionadoProvider>
  
  )
}

export default App
