import { useState, createContext } from "react";
import AppRouter from './AppRouter';

export const dataContext = createContext()

const array = [
  { id:'op-1', concept:'Empresa Bayer', date:'03/09/2022', type:'Ingreso', amount:'10000' },
  { id:'op-2', concept:'Patente del auto', date:'20/09/2022', type:'Egreso', amount:'3000' },
  { id:'op-3', concept:'Alquiler', date:'20/09/2022', type:'Egreso', amount:'5000' },
]

const  App = () => {
  const [data, setData] = useState(array)

  return (
    <dataContext.Provider value={{data, setData}}>
      <AppRouter />
    </dataContext.Provider>
  )
}
export default App
