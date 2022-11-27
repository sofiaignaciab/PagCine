import {useContext} from "react";
import {RoomContext} from "../contexts/RoomContext";

export const Sofi = (title) => {
    const {movies} = useContext(RoomContext)
    let movie;
    for (const mov in movies) {
        if (movies[mov].title === title) {
            movie = movies[mov];
            console.log(movies[mov])
        }
    }
    console.log(movie);
    return movie;
}