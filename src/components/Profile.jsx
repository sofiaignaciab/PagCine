import React, {useContext, useEffect, useState} from "react";
import Barrita from "./Barrita";
import ProfileCard from "./ProfileCard";
import {AuthContext} from "../context/AuthContext";

const Profile = () => {
    const {login} = useContext(AuthContext)
    const [cookiesChecked, setCookiesChecked] = useState(false);
    useEffect(() => {
        fetch('http://localhost:27017/api/', {
            method: "POST",
            credentials: 'include',
            headers: {
                'Content-type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(result => {
                console.log(result)
                if (result.message !== "Token not found") login(result._id, result.name, result.lastname, result.email, result.reserved_seats);
                setCookiesChecked(true)
            })

    }, [])

    return(
        cookiesChecked &&
        <>
            <Barrita />
            <ProfileCard />
        </>
    );
};

export default Profile;