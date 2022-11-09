import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import Home from "./components/Home";
import MovieContext from "./contexts/MovieContext";
import SelectSeat from "./components/SelectSeat";
import UserSeats from "./components/UserSeats";


const App = () => {
  const [movies, EditMovies] = useState({
    moviePrice: 10,
    totalSeats: 0,
    seatNumbers: [],
  });
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/select-seats"
            element={<MovieContext.Provider
              value={{ movies, changeState: EditMovies }}
            >
							<SelectSeat />
            </MovieContext.Provider>}
          />
          <Route path="/usr-seats" element={ <UserSeats /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
