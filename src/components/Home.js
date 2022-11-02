import Sidebar from './Sidebar'
import Table from './table/Table'
import { useContext } from 'react'
import { dataContext, themeContext } from './App'
import Resultanteactual from './Resultanteactual';

const styles = {
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

const styleH2 = {
  paddingLeft: '10px',
}

const Home = () => {
  const {data} = useContext(dataContext)
  const {theme, chooseTheme} = useContext(themeContext)
  const myFilter = data.filter((op, i, data) => i >= data.length - 10 && op)
  const reverseFilter = myFilter.reverse()

  return (
    <main style={styles} className='app'>
      <aside>
        <Sidebar theme={theme} chooseTheme={chooseTheme} />
      </aside>
      <section style={stylesSection}>
        <Resultanteactual data={data} />
        <div>
          <h2 style={styleH2}>Ultimas operaciones:</h2>
          <Table router={'home'} list={reverseFilter} />
        </div>
      </section>
    </main>
  )
}

export default Home
