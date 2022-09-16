import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Seats from './components/Seats';

const App = () => {
  return (
    <div className="App">
      
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <Login /> } />
            <Route path="/register" element={ <Register /> } />
            <Route  path="/home" element={ <Home /> } />
            <Route path="/seats" element={ <Seats /> } />
          </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;