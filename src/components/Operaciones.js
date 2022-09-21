import Sidebar from './Sidebar';

const estiloDiv = {
  display: 'flex',
}

const Operaciones = () => {
  return (
    <div style={ estiloDiv }>
      <Sidebar />
      <section>
        <h1>Lista de operaciones</h1>
      </section>
    </div>
  );
}

export default Operaciones;
