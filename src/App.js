import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
// import Seats from './components/Seats';
import MovieSelector from "./components/MovieSelector";
import SeatAvailability from "./components/SeatAvaliability";
import SeatMatrix from "./components/SeatMatrix";
import MovieContext from './contexts/MovieContext';
import CalculoPrecio from './components/CalculoPrecio';

const App = () => {
  const [movies, EditMovies] = useState({
		movieNames: {
			"Siniestro": 10,
			"Son como niños": 8,
			"Us": 11,
			"Historias Cruzadas": 12
		},
		moviePrice: 10,
		totalSeats: 0,
		seatNumbers: []
	})
  return (
    <div className="App">
      
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <Login /> } />
            <Route path="/register" element={ <Register /> } />
            <Route  path="/home" element={ <Home /> } />
			<Route path='/asientos' element=<MovieContext.Provider value={{ movies, changeState: EditMovies }}>
			    	<MovieSelector />
				    <SeatMatrix />
					<br></br>
				    <SeatAvailability />
					<br></br>
					<CalculoPrecio/>
			    </MovieContext.Provider> />
			</Routes>
            {/* <Route path="/seats" element={ <Seats /> } /> */}
        </BrowserRouter>
      
    </div>
  );
}

export default App;