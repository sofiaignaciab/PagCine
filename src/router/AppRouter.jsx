import {BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "../components/Login";
import Home from "../components/Home";
import Register from "../components/Register";
import {SelectSeat} from "../components/SelectSeat";
import {RoomProvider} from "../context/RoomProvider";
import {AuthProvider} from "../context";
import ProfileCard from "../components/ProfileCard"
import Profile from "../components/Profile"
import {Basura} from "../components/Basura";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <RoomProvider>
                    <Routes>
                        <Route path={'/basura'} element={<Basura/>}/>
                        <Route path={"/profile_card"} element={<ProfileCard/>}/>
                        <Route path={"/profile"} element={<Profile/>}/>
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