import {useContext} from "react";
import {AuthContext} from "../context/AuthContext";
import Barrita from "./Barrita";

export const Basura = () => {
    const {user} = useContext(AuthContext)
    const carrito = [{
        title: 'Hereditary',
        date: '2022-12-11',
        time: '16:00',
        seats: ['A1', 'A2']
    },{
        title: 'Hereditary',
        date: '2022-12-12',
        time: '20:00',
        seats: ['A10', 'B2']
    },{
        title: 'Hereditary',
        date: '2022-12-12',
        time: '20:00',
        seats: ['B10', 'C2']
    }]

    console.log(user.ID)

    fetch(`http://localhost:27017/api/users/update/${user.ID}`, {
        method: "PUT",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(
            {
                reserved_seats: carrito,
            }
        )
    })

    return (
        <Barrita/>
    )
}