import { useState, createContext } from "react";
import AppRouter from './AppRouter';
export const dataContext = createContext()

const array = [
  { id:'op-1', concept:'Empresa Bayer', date:'2022-09-03', type:'Ingreso', amount:'10000' },
  { id:'op-2', concept:'Patente del auto', date:'2022-09-03', type:'Egreso', amount:'3000' },
  { id:'op-3', concept:'Alquiler', date:'2022-09-14', type:'Egreso', amount:'5000' },
  { id:'op-4', concept:'Agua', date:'2022-10-01', type:'Egreso', amount:'9000' },
  { id:'op-5', concept:'Luz', date:'2022-11-01', type:'Egreso', amount:'4500' },
  { id:'op-6', concept:'Gas', date:'2022-10-01', type:'Egreso', amount:'2400' },
  { id:'op-7', concept:'Comida', date:'2022-10-05', type:'Egreso', amount:'10000' },
  { id:'op-8', concept:'Plazo fijo Banco credicoop', date:'2022-11-02', type:'Ingreso', amount:'40000' },
  { id:'op-9', concept:'Bicicleta pires', date:'2022-11-04', type:'Egreso', amount:'65000' },
  { id:'op-10', concept:'Pava electrica', date:'2022-11-04', type:'Egreso', amount:'16000' },
]

const  App = () => {
  const [data, setData] = useState(array)

  return (
    <dataContext.Provider value={{data, setData}}>
      <AppRouter />
    </dataContext.Provider>
  )
}
export default App;
