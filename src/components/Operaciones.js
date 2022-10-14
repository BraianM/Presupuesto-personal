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
  const { data } = useContext(dataContext)
  const {theme, chooseTheme} = useContext(themeContext)
  const [list, setList] = useState(data)

  const showList = () => {
    return list.map((d, i) => <DataList key={d.id} concept={d.concept} date={d.date} type={d.type} amount={d.amount} parOrImpar={i} />)
  }

  const getList = (array) => {
    setList(array)
  }

  return (
    <div style={ estiloDiv }>
      <Sidebar theme={theme} chooseTheme={chooseTheme} />
      <section style={stylesSection}>
        <h1 style={stylesH1}>Lista de operaciones</h1>
        <ViewFilter data={data} getList={getList} />
        <Table list={showList()} />
      </section>
    </div>
  );
}

export default Operaciones;
