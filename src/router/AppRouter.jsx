import {BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "../components/Login";
import Home from "../components/Home";
import Register from "../components/Register";
import {SelectSeat} from "../components/SelectSeat";
import {RoomProvider} from "../context/RoomProvider";


const AppRouter = () => {
    return (
        <BrowserRouter>

            <RoomProvider>

            <Routes>
                <Route path={"/"} element={<Home/>} />

                <Route path={"/login"} element={<Login/>} />

                <Route path={"/register"} element={<Register/>} />

                <Route path={"/*"} element={<div> 404 | Not Found Page</div>} />

                <Route path={"/seatReservation/:movie"} element={<SelectSeat/>}/>

            </Routes>

            </RoomProvider>

        </BrowserRouter>
    )
}

export default AppRouter;