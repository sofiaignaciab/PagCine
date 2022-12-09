import React, {useContext} from "react";
import {RoomContext} from "../context";
import Cards from "./Cards";

const Movies = () => {
    const {movies} = useContext(RoomContext);
    return (
        <div>
            <div className={"flex flex-wrap w-100 m-auto"}>
                <div className={"d-inline-block"}>
                    { movies.map(movie => <Cards key={movie.title} {...movie}/>) }
                </div>
            </div>
        </div>
    );
};

export default Movies;