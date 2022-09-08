
const estiloUl = {
  paddingLeft: '10px',
  fontSize: '1.5rem',
  margin: '0px',
  color: '#fff',
  listStyleType: 'none',
  lineHeight: '2.0',
}
const estiloDiv = {
  width: '15%',
  backgroundColor: '#456',
  height: '100vh',
}

const estiloIconUsuario = {
  border: 'solid 1px',
  minHeight: '185px',
  minWidth: '185px',
  borderRadius: '50%',
  backgroundColor: '#ccc',
}

const estiloContIcon = {
  display: 'flex',
  justifyContent: 'space-evenly',
  padding: '10px 0px',
}

const Sidebar = () => {
  return (
    <div style={ estiloDiv }>
      <div style={ estiloContIcon }>
        <div style={ estiloIconUsuario }></div>
      </div>
      <hr />
      <ul style={ estiloUl }>
        <li>Home</li>
        <li>Nueva operacion</li>
        <li>Operaciones</li>
        <li>Estadisticas</li>
      </ul>
      <hr />
      <ul style={ estiloUl }>
        <li>Cuenta de usuario</li>
        <li>Tema oscuro</li>
        <li>Ayuda</li>
        <li>Salir</li>
      </ul>
    </div>
  );
}

export default Sidebar;
