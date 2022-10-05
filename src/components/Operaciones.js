import { useContext } from 'react';
import { dataContext } from './App';
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

  const listMap = data.map((d, i) => <DataList key={d.id} concept={d.concept} date={d.date} type={d.type} amount={d.amount} parOrImpar={i} />)

  return (
    <div style={ estiloDiv }>
      <Sidebar />
      <section style={stylesSection}>
        <h1 style={stylesH1}>Lista de operaciones</h1>
        <ViewFilter />
        <Table list={listMap} />
      </section>
    </div>
  );
}

export default Operaciones;
