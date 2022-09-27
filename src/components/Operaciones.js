import Sidebar from './Sidebar';
import Table from './table/Table'

const estiloDiv = {
  display: 'flex',
}

const Operaciones = () => {
  return (
    <div style={ estiloDiv }>
      <Sidebar />
      <section>
        <h1>Lista de operaciones</h1>
        <Table />
      </section>
    </div>
  );
}

export default Operaciones;
