import React, {useEffect, useState} from "react";
import Cards from "./Cards";

const Movies = () => {
    const [movies, setMovies] = useState([])
    
    useEffect(() => {
        fetch('http://35.168.134.176/api/events')
            .then(response => response.json())
            .then(result => setMovies(result))
    })
    
    return (
        <div>
            <div className={"m-auto w-full"}>
                <div className={'grid grid-cols-4 gap-4'}>
                    {movies && movies.map(movie => <Cards key={movie.title} {...movie}/>)}
                </div>
            </div>
        </div>
    );
};

export default Movies;