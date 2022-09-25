import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import MovieContext from "./contexts/MovieContext";
import SelectSeat from "./components/SelectSeat";


const App = () => {
  const [movies, EditMovies] = useState({
    movieNames: {
      Siniestro: 10,
      "Son como niños": 8,
      Us: 11,
      "Historias Cruzadas": 12,
    },
    moviePrice: 10,
    totalSeats: 0,
    seatNumbers: [],
  });
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/select-seats"
            element={<MovieContext.Provider
              value={{ movies, changeState: EditMovies }}
            >
							<SelectSeat />
            </MovieContext.Provider>}
          />
          <Route path="/usr-seats" />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
