import Sidebar from "./Sidebar";
import Formulario from "./Formulario";

const stylesDiv = {
  display: 'flex',
  flexDirection: 'row',
}

const stylesSection = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '1000vh',
}

const stylesH1 = {
  fontSize: '3.2rem',
  textDecoration: 'underline',
}

const NuevaOperacion = () => {
  return (
    <div style={stylesDiv}>
      <aside>
        <Sidebar />
      </aside>
      <section style={stylesSection}>
        <h1 style={stylesH1}>INGRESA OPERACION</h1>
          <Formulario />
      </section>
    </div>
  );
}

export default NuevaOperacion;
