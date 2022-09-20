import { Component } from 'react';
import Sidebar from './components/Sidebar';
import './App.css';

class App extends Component {
  state = {
    data: [
      { id:'op-1', concept:'Empresa Bayer', date:'03/09/2022', type:'Ingreso', amount:'10000' },
      { id:'op-2', concept:'Patente del auto', date:'20/09/2022', type:'Egreso', amount:'3000' },
      { id:'op-3', concept:'Alquiler', date:'20/09/2022', type:'Egreso', amount:'5000' },
    ]
  }
  render() {
    return (
      <main className='app'>
        <aside>
          <Sidebar />
        </aside>
        <section>
          <h1>Home</h1>
        </section>
      </main>
    )
  }
}
export default App;
