import { Component } from 'react';
import Sidebar from './components/Sidebar';
import './App.css';

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
      </main>
    )
  }
}
export default App;
