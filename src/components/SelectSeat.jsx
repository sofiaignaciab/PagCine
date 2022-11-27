import Barrita from "./Barrita";
import {useState} from "react";
import {Seat} from "./Seat";
import {Sofi} from "./Sofi";
import {useParams} from "react-router-dom";
import MovieScreen from "./MovieScreen";

export const SelectSeat = () => {
    const [roomData, setRoomData] = useState()
    const [ready, setReady] = useState(false);
    const title = useParams();
    const [selectedSeats, setSelectedSeats] = useState([])

    if (!ready) {
        const aux = Sofi(title.movie)
        console.log(aux)
        setRoomData(aux)
        setReady(true)
    }

    const seatSelection = (seatID) => {
        if (selectedSeats.includes(seatID)) {
            setSelectedSeats(selectedSeats.filter(seat => seat !== seatID))
            console.log(selectedSeats)
            return;
        }
        setSelectedSeats([...selectedSeats, seatID]);
        console.log(selectedSeats)
    }

    const seatLocking = () => {
        const Aux = roomData.Seats
        for (const ola in roomData.Seats) {
            if (selectedSeats.includes(roomData.Seats[ola].id)) {
                roomData.Seats[ola].inUse = true;
            }
        }
        console.log(roomData.Seats)
    }

    return (
        ready ?
            <div>
                <Barrita />
                <MovieScreen/>
                <div className={"flex flex-wrap w-50 m-auto"}>
                    <div className={"d-inline-block"}>
                        {roomData.Seats.map(seat => <Seat key={seat.id} {...seat} seatSelection={seatSelection}/>)}
                    </div>
                </div>
                <button onSubmit={seatLocking}>Reservar</button>
            </div>
        :
            <h1>Hola Guapa</h1>
    );
};
