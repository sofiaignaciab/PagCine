import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './components/Login';
import Register from './components/Register';
import Galery from './components/Galery';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Galery />
      </header>
    </div>
  );
}

export default App;
