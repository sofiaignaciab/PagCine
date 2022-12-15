import {BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Home from "../components/Home";
import Register from "../components/Register";
import {SelectSeat} from "../components/SelectSeat";
import {AuthProvider} from "../context";
import Profile from "../components/Profile"
import Barrita from "../components/Barrita";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path={"/profile"} element={<Profile/>}/>
                    <Route path={"/"} element={<Home/>} />
                    <Route path={"/login"} element={<Login/>} />
                    <Route path={"/register"} element={<Register/>} />
                    <Route path={"/*"} element={<div><Barrita/><div> 404 | Not Found Page</div></div>}/>
                    <Route path={"/seatReservation/:movie"} element={<SelectSeat/>}/>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}

export default AppRouter;