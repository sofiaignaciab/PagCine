import React, {useContext, useEffect, useState} from "react";
import {RoomContext} from "../context";
import Cards from "./Cards";

//items-stretch

const Movies = () => {
    const [movies, setMovies] = useState([])
    //const {movies} = useContext(RoomContext);
    
    useEffect(() => {
        fetch('http://localhost:27017/api/events')
            .then(response => response.json())
            .then(result => setMovies(result))
    })
    
    return (
        <div>
            <div className={"flex flex-wrap w-100 m-auto"}>
                <div className={"d-inline-block"}>
                    {movies && movies.map(movie => <Cards key={movie.title} {...movie}/>) }
                </div>
            </div>
        </div>
    );
};

export default Movies;