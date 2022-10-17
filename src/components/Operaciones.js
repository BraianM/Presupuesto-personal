import { useState, useContext } from 'react';
import { dataContext, themeContext } from './App';
import DataList from './table/DataList'
import Sidebar from './Sidebar';
import Table from './table/Table'
import ViewFilter from './table/ViewFilter'

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
  const { data, setData } = useContext(dataContext)
  const {theme, chooseTheme} = useContext(themeContext)
  const [filter, setFilter] = useState(data)

  const showFilter = () => {
    return filter.map((d, i) => <DataList deleteOperation={deleteInData} id={d.id} key={d.id} concept={d.concept} date={d.date} type={d.type} amount={d.amount} parOrImpar={i} />)
  }

  const deleteInData = (id) => {
    const myFilter = data.filter((elm) => elm.id != id)
    setData(myFilter)
    deleteInList(id)
  }
  
  const deleteInList = (id) => {
    const myFilter = filter.filter((elm) => elm.id != id)
    setFilter(myFilter)
  }

  const getNewFilter = (filter) => {
    setFilter(filter)
  }

  return (
    <div style={ estiloDiv }>
      <Sidebar theme={theme} chooseTheme={chooseTheme} />
      <section style={stylesSection}>
        <h1 style={stylesH1}>Lista de operaciones</h1>
        <ViewFilter data={data} getNewFilter={getNewFilter} />
        <Table list={showFilter()} />
      </section>
    </div>
  );
}

export default Operaciones;
