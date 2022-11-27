import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import { RoomProvider } from "./contexts/Runprovider";


const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <RoomProvider>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                </RoomProvider>
            </BrowserRouter>
        </div>
    );
};

export default App;
