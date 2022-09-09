import { Link } from "react-router-dom";

const estiloLi = {
  textDecoration: 'none',
  outline: 'none',
  color: '#fff',
}

const estiloUl = {
  paddingLeft: '10px',
  fontSize: '1.5rem',
  margin: '0px',
  color: '#fff',
  listStyleType: 'none',
  lineHeight: '2.0',
}

const estiloDiv = {
  minWidth: '300px',
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
        <li><Link style={ estiloLi } to='/'>Home</Link></li>
        <li><Link style={ estiloLi } to='/nueva-operacion'>Nueva operacion</Link></li>
        <li><Link style={ estiloLi } to='/operaciones'>Operaciones</Link></li>
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
