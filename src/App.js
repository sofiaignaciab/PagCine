import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';
import Galery from './components/Galery';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <Login /> } />
            <Route path="/register" element={ <Register /> } />
            <Route  path="/home" element={ <Galery /> } />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;