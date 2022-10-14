import Sidebar from './Sidebar'
import Table from './table/Table'
import DataList from './table/DataList'
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
  const { data } = useContext(dataContext)
  const {theme, chooseTheme} = useContext(themeContext)

  const myFilter = data.filter((op, i, data) => i >= data.length - 10 ?  op : null)
 
  const reverseFilter = myFilter.reverse()

  const listFilter = reverseFilter.map((op, i) => <DataList key={op.id} concept={op.concept} date={op.date} type={op.type} amount={op.amount} parOrImpar={i} />)
  return (
    <main style={styles} className='app'>
      <aside>
        <Sidebar theme={theme} chooseTheme={chooseTheme} />
      </aside>
      <section style={stylesSection}>
        <Resultanteactual />
        <div>
          <h2 style={styleH2}>Ultimas operaciones:</h2>
          <Table list={listFilter} />
        </div>
      </section>
    </main>
  )
}

export default Home
