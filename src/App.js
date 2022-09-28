import { Component } from 'react';
import Sidebar from './components/Sidebar';
import './App.css';
import Resultanteactual from './components/Resultanteactual'

class App extends Component {
  render() {
    return (
      <main className='app'>
        
        <aside>
          <Sidebar />
        </aside>
        <section>
          <h1>Home</h1>
        </section>
        <Resultanteactual/ >
        
      </main>
      
    )
  }
  
}
export default App;
