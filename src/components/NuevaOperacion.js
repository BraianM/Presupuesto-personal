import Sidebar from "./Sidebar";
import Formulario from "./Formulario";
import {useContext} from 'react'
import {themeContext} from './App'

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
  const {theme, chooseTheme} = useContext(themeContext)

  return (
    <div style={stylesDiv}>
      <aside>
        <Sidebar theme={theme} chooseTheme={chooseTheme} />
      </aside>
      <section style={stylesSection}>
        <h1 style={stylesH1}>INGRESA OPERACION</h1>
          <Formulario />
      </section>
    </div>
  );
}

export default NuevaOperacion;
