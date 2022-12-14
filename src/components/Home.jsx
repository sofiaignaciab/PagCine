import React, {useContext, useEffect, useState} from "react";

import Barrita from "./Barrita";
import Movies from "./Movies";
import {AuthContext} from "../context/AuthContext";

const Home = () => {
    const {logged, login} = useContext(AuthContext)
    const [cookiesChecked, setCookiesChecked] = useState(false);
    useEffect(() => {
        if (!logged) {
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
        }
        else setCookiesChecked(true)
    }, [])

    return (
        cookiesChecked &&
        <>
            <Barrita />
            <Movies />
        </>
    );
};

export default Home;
