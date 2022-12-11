import Barrita from "./Barrita";
import {useState} from "react";
import {useParams} from "react-router-dom";
import MovieScreen from "./MovieScreen";
import {GetMovie} from "./GetMovie";

export const SelectSeat = () => {
    const [roomData, setRoomData] = useState()
    const [ready, setReady] = useState(false);
    const title = useParams();
    const [selectedSeats, setSelectedSeats] = useState([])

    if (!ready) {
        console.log()
        setReady(true)
        GetMovie(title)
        setRoomData('')
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

    const Select = (e) => {
        console.log(e.target.value)
    }

    return (
        ready ?
            <div>
                <Barrita />
                <div className={'text-black'}>
                    <select className={'w-full'} onChange={Select}>
                        <option selected disabled>Seleccione la funcion deseada</option>
                        <option>{roomData.fxseats[0].date + " " + roomData.fxseats[0].time}</option>
                        <option>{roomData.fxseats[1].date + " " + roomData.fxseats[1].time}</option>
                    </select>
                </div>
                <MovieScreen/>

                <div className={"flex flex-wrap w-50 m-auto"}>
                    <div className={"d-inline-block"}>
                        {/*roomData.Seats.map(seat => <Seat key={seat.id} {...seat} seatSelection={seatSelection}/>)*/}
                    </div>
                </div>
                <button onClick={seatLocking} className={"rounded-xl bg-[#4338ca] font-light py-2 px-4"}>Reservar</button>
            </div>
            :
            <h1>Hola Guapa</h1>
    );
};