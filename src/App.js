import { Component } from 'react';
import Sidebar from './components/Sidebar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <aside>
          <Sidebar />
        </aside>
        <section>
        </section>
      </div>
    )
  }
}
export default App;
