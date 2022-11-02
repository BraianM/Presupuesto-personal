import {useState, useContext, createContext} from 'react';
import {dataContext, themeContext} from './App';
import Sidebar from './Sidebar';
import Table from './table/Table'
import ViewFilter from './table/ViewFilter'

export const filterContext = createContext({})

const estiloDiv = {
  display: 'flex',
  flexDirection: 'row',
}

const stylesSection = {
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '1000vh',
  height: '100vh',
}

const stylesH1 = {
  fontSize: '3.2rem',
  textDecoration: 'underline',
}

const Operaciones = () => {
  const {data} = useContext(dataContext)
  const {theme, chooseTheme} = useContext(themeContext)
  const [filter, setFilter] = useState(data)
  const getFilter = (filter) => setFilter(filter)

  return (
    <div style={ estiloDiv }>
      <Sidebar theme={theme} chooseTheme={chooseTheme} />
      <section style={stylesSection}>
        <h1 style={stylesH1}>Lista de operaciones</h1>
        <ViewFilter data={data} getFilter={getFilter} />
        <filterContext.Provider value={{filter, setFilter}}><Table router={'operaciones'} list={filter} /></filterContext.Provider>
      </section>
    </div>
  );
}

export default Operaciones;
