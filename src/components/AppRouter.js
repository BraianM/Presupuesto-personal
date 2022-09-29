import NuevaOperacion from './NuevaOperacion';
import Operaciones from './Operaciones';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const AppRouter = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/nueva-operacion' element={ <NuevaOperacion /> } />
      <Route path='/operaciones' element={ <Operaciones /> } />
    </Routes>
  </BrowserRouter>
  )

}

export default AppRouter
