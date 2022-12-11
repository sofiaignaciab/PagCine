import Barrita from "./Barrita";
import {useState} from "react";
import {Seat} from "./Seat";
import {Fnction} from "./Fnction";
import {useParams} from "react-router-dom";
import MovieScreen from "./MovieScreen";

export const SelectSeat = () => {
    const [roomData, setRoomData] = useState()
    const [ready, setReady] = useState(false);
    const title = useParams();
    const [selectedSeats, setSelectedSeats] = useState([])

    if (!ready) {
        const aux = Fnction(title.movie)
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
        roomData.Seats.forEach((seat) => {
            if (selectedSeats.includes(seat.id)) {
                seat.inUse = true;
            }
        })
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
                <button onClick={seatLocking} className={"rounded-xl bg-[#4338ca] font-light py-2 px-4"}>Reservar</button>
            </div>
            :
            <h1>Hola Guapa</h1>
    );
};