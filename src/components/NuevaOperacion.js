import Sidebar from "./Sidebar";

const estiloDiv = {
  display: 'flex',
}

const NuevaOperacion = () => {
  return (
    <div style={ estiloDiv }>
      <Sidebar />
      <section>
        <h1>Formulario de ingreso</h1>
      </section>
    </div>
  );
}

export default NuevaOperacion;
