import {RoomContext} from "./RoomContext";
import {CreateSeats} from "../components/Hp"

export const RoomProvider = ({children}) => {

    const movies = [
        {
            title: 'a',
            overview: 'A fanboy of a supervillain supergroup known as the Vicious 6...',
            overviewFull:'A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.',
            mainGenre: 'Family',
            genres: 'Family, Animation, Adventure',
            time: '1h 27m',
            img:'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg',
            Seats: CreateSeats(5, 10),
        },
        {
            title: 'Thor: Love and Thunder',
            overview: 'A fanboy of a supervillain supergroup known as the Vicious 6...',
            overviewFull:'A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.',
            mainGenre: 'Action',
            genres: 'Action, Adventure, Fantasy',
            time: '1h 59m',
            img:'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg',
            Seats: CreateSeats(5, 10),
        },
        {
            title: 'Prey',
            overview: 'A fanboy of a supervillain supergroup known as the Vicious 6...',
            overviewFull:'A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.',
            mainGenre: 'Action',
            genres: 'Action, Thriller, Science Fiction',
            time: '1h 40m',
            img:'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg',
            Seats: CreateSeats(5, 10),
        },
        {
            title: 'The Black Phone',
            overview: 'A fanboy of a supervillain supergroup known as the Vicious 6...',
            overviewFull:'A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.',
            mainGenre: 'Horror',
            genres: 'Horror, Thriller',
            time: '1h 43m',
            img:'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/p9ZUzCyy9wRTDuuQexkQ78R2BgF.jpg',
            Seats: CreateSeats(5, 10),
        },
    ]

    return (
        <RoomContext.Provider value={{movies: movies}} >
            {children}
        </RoomContext.Provider>
    )
}