import {BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "../components/Login";
import Home from "../components/Home";
import Register from "../components/Register";
import {SelectSeat} from "../components/SelectSeat";
import {RoomProvider} from "../context/RoomProvider";
import {AuthProvider} from "../context";
import Profile_Card from "../components/Profile_Card"

const AppRouter = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <RoomProvider>
                    <Routes>
                        <Route path={"/perfil"} element={<Profile_Card/>}/>
                        <Route path={"/"} element={<Home/>} />
                        <Route path={"/login"} element={<Login/>} />
                        <Route path={"/register"} element={<Register/>} />
                        <Route path={"/*"} element={<div> 404 | Not Found Page</div>} />
                        <Route path={"/seatReservation/:movie"} element={<SelectSeat/>}/>
                    </Routes>
                </RoomProvider>
            </AuthProvider>
        </BrowserRouter>
    )
}

export default AppRouter;