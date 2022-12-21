import Barrita from "./Barrita";
import {useContext, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import MovieScreen from "./MovieScreen";
import {Seat} from "./Seat";
import {AuthContext} from "../context/AuthContext";

export const SelectSeat = () => {
    const title = useParams();
    const [eventData, setEventData] = useState();
    const [savedData, setSavedData] = useState(false);
    const [functionToSelect, setFunctionToSelect] = useState("")
    const [selectedFunction, setSelectedFunction] = useState()
    const [ready, setReady] = useState(false);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const {logged, login} = useContext(AuthContext)
    const [cookiesChecked, setCookiesChecked] = useState(false);
    useEffect(() => {
        if (!logged) {
            fetch('http://35.168.134.176/api/', {
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

    useEffect(() => {
        fetch(`http://35.168.134.176/api/events/${title.movie}`)
            .then(response => response.json())
            .then((result) => {
                setEventData(result[0])
                setSavedData(true)
            })
    }, []);

    const seatSelection = (seatID) => {
        if (selectedSeats.includes(seatID)) {
            setSelectedSeats(selectedSeats.filter(seat => seat !== seatID))
            return;
        }
        setSelectedSeats([...selectedSeats, seatID]);
    }

    const seatLocking = () => {
        selectedFunction.seats.forEach((seat) => {
            if (selectedSeats.includes(seat.id)) {
                seat.inUse = true;
            }
        })
        console.log(selectedFunction.seats)
    }

    const FunctionSelect = (e) => {
        setFunctionToSelect(e.target.value)
    }

    const onSelect = () => {
        if (functionToSelect === eventData.fxseats[0].date + " " + eventData.fxseats[0].time) {
            setSelectedFunction(eventData.fxseats[0]);
            setReady(true);
        }
        else if (functionToSelect === eventData.fxseats[1].date + " " + eventData.fxseats[1].time) {
            setSelectedFunction(eventData.fxseats[1]);
            setReady(true);
        }
    }

    const GetNewSeats = (updatedSeats) => {
        if (functionToSelect === eventData.fxseats[0].date + " " + eventData.fxseats[0].time) {
            return [
                {
                    date: eventData.fxseats[0].date,
                    time: eventData.fxseats[0].time,
                    seats: updatedSeats
                },
                eventData.fxseats[1]
            ]
        }
        else if (functionToSelect === eventData.fxseats[1].date + " " + eventData.fxseats[1].time) {
            return [
                eventData.fxseats[0],
                {
                    date: eventData.fxseats[1].date,
                    time: eventData.fxseats[1].time,
                    seats: updatedSeats
                }
            ]
        }
    }

    const DBUpdate = () => {
        seatLocking();
        const newfxseats = GetNewSeats(selectedFunction.seats)
        console.log(newfxseats)

        fetch(`http://35.168.134.176/api/events/update/${title.movie}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                fxseats: newfxseats
            })
        })

        const userSeats = {
            Movie: title.movie,
            date: selectedFunction.date,
            time: selectedFunction.time,
            seats: selectedSeats,
        }
        user.reserved_seats.push(userSeats)
        fetch(`http://35.168.134.176/api/users/update/${user.ID}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                {
                    reserved_seats: user.reserved_seats,
                }
            )
        })
        navigate('/')
    }

    return (
        ready && cookiesChecked ?
            <div className={'h-[100vh]'}>
                <Barrita />
                <div className={'py-3'}>
                    <div className={'flex flex-row justify-center'}>
                        <div className={'w-[55%]'}>
                            <MovieScreen/>
                            <div className={"flex flex-wrap w-[65%] m-auto pb-4"}>
                                <div className={"d-inline-block w-full m-auto"}>
                                    {selectedFunction.seats.map(seat => <Seat key={seat.id} {...seat} seatSelection={seatSelection}/>)}
                                </div>
                            </div>
                            <button onClick={DBUpdate} className={"rounded-xl bg-[#4338ca] font-light py-2 px-4"}>Reservar</button>
                        </div>
                        <div className={'flex flex-col justify-center w-[20%]'}>
                            <div>
                                {eventData.title}
                            </div>
                            <div>
                                {eventData.mainGenre}
                            </div>
                            <div>
                                {eventData.time}
                            </div>
                            <div>
                                {selectedFunction.date + " " + selectedFunction.time}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            :
            savedData &&
            <div>
                <Barrita/>
                <div className={'flex flex-col justify-center w-[50vw] h-full m-auto'}>
                    <div className="flex flex-col justify-center dartboard dartboard-horizontal rounded-xl phone-3 bg-neutral-100 shadow-2xl shadow-zinc-500 h-[50vh]">
                        <select className={'w-[80%]  text-black m-auto rounded-lg h-10 text-center bg-neutral-100 hover:cursor-pointer'} onChange={FunctionSelect}>
                            <option selected disabled>Seleccione la funcion deseada</option>
                            <option>{eventData.fxseats[0].date + " " + eventData.fxseats[0].time}</option>
                            <option>{eventData.fxseats[1].date + " " + eventData.fxseats[1].time}</option>
                        </select>
                        <button className={'w-[60%] m-auto px-2 py-1 bg-[#4338ca] rounded-lg'} onClick={onSelect}>Seleccionar Funcion</button>
                    </div>
                </div>
            </div>

    );
};