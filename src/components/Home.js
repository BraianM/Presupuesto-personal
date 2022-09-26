import Sidebar from './Sidebar'
import { useContext } from 'react'
import { dataContext } from './App'

const styles = {
  display: 'flex',
}

const Home = () => {
  const { data, setData } = useContext(dataContext)
  return (
    <main style={styles} className='app'>
      <aside>
        <Sidebar />
      </aside>
      <section>
        <h1>Home</h1>
      </section>
    </main>
  )
}

export default Home
