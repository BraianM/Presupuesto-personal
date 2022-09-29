import Sidebar from './Sidebar';
import Table from './table/Table'

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
  return (
    <div style={ estiloDiv }>
      <Sidebar />
      <section style={stylesSection}>
        <h1 style={stylesH1}>Lista de operaciones</h1>
        <Table />
      </section>
    </div>
  );
}

export default Operaciones;
