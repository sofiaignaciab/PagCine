import {RoomContext} from "./RoomContext";
import {CreateSeats} from "../components/Hp"

export const RoomProvider = ({children}) => {

    const movies = [
        {
            title: 'Hereditary',
            mainGenre: 'Horror',
            genres: 'Horror, Thriller',
            time: '2h 7m',
            img:'https://image.tmdb.org/t/p/w300_and_h450_bestv2/iEU4ZN1kBdd4M1FekYDzzG8lAp3.jpg',
            Seats: CreateSeats(5, 10),
        },
        {
            title: 'Midsommar',
            mainGenre: 'Horror',
            genres: 'Horror, Drama',
            time: '2h 27m',
            img:'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/7LEI8ulZzO5gy9Ww2NVCrKmHeDZ.jpg',
            Seats: CreateSeats(5, 10),
        },
        {
            title: 'La vida es bella',
            mainGenre: 'Drama',
            genres: 'Belico, Drama',
            time: '1h 56m',
            img:'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/mfnkSeeVOBVheuyn2lo4tfmOPQb.jpg',
            Seats: CreateSeats(5, 10),
        },
        {
            title: 'Forrest Gump',
            mainGenre: 'Drama',
            genres: 'Drama, Romance',
            time: '2h 22m',
            img:'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/saHP97rTPS5eLmrLQEcANmKrsFl.jpg',
            Seats: CreateSeats(5, 10),
        },
        {
            title: 'Siniestro',
            mainGenre: 'Terror',
            genres: 'Terror, Suspense',
            time: '1h 50m',
            img:'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/t19QJGCgExGEZabHosjKkLcn5jE.jpg',
            Seats: CreateSeats(5, 10),
        },
        {
            title: 'Yo antes de ti',
            mainGenre: 'Romance',
            genres: 'Romance, Drama',
            time: '1h 50m',
            img:'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/Ia3dzj5LnCj1ZBdlVeJrbKJQxG.jpg',
            Seats: CreateSeats(5, 10),
        },
        {
            title: 'Hasta el ultimo hombre',
            mainGenre: 'Belico',
            genres: 'Belico, Drama',
            time: '2h 19m',
            img:'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/v2z5OVPxlGhAAIqvCQnQVH39sG.jpg',
            Seats: CreateSeats(5, 10),
        },
        {
            title: 'Luck',
            mainGenre: 'Comedia',
            genres: 'Comedia, Fantasía, Caricatura',
            time: '1h 45m',
            img:'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/1HOYvwGFioUFL58UVvDRG6beEDm.jpg',
            Seats: CreateSeats(5, 10),
        },
    ]

    return (
        <RoomContext.Provider value={{movies: movies}} >
            {children}
        </RoomContext.Provider>
    )
}