import { Link } from "react-router-dom";
import Button from './Button'

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
  borderRight: '1px solid #ddd',
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

const Sidebar = ({theme, chooseTheme }) => {

  return (
    <div style={ {...estiloDiv, ...theme} }>
      <div style={ estiloContIcon }>
        <div style={ estiloIconUsuario }></div>
      </div>
      <hr />
      <ul style={{...estiloUl, ...theme}}>
        <li><Link style={{...estiloLi, ...theme}} to='/'>Home</Link></li>
        <li><Link style={{...estiloLi, ...theme}} to='/nueva-operacion'>Nueva operacion</Link></li>
        <li><Link style={{...estiloLi, ...theme}} to='/operaciones'>Operaciones</Link></li>
        <li>Estadisticas</li>
      </ul>
      <hr />
      <ul style={{...estiloUl, ...theme}}>
        <li>Cuenta de usuario</li>
        <li>Tema <Button chooseTheme={() => chooseTheme()} colorMouseEnter={'rgba(0, 149, 235, 0.8)'} colorMouseLeave={'rgba(0, 149, 235, 1)'}>{theme.type}</Button></li>
        <li>Ayuda</li>
        <li>Salir</li>
      </ul>
    </div>
  );
}

export default Sidebar;
