import React, {useContext} from "react"
import MovieContext from "../contexts/MovieContext"

const PriceCalculator = () => {
	const {movies} = useContext(MovieContext)
	return (
		<div>
			<p> {movies.totalSeats} asientos seleccionados, y el precio total es de ${movies.totalSeats*movies.moviePrice}</p>
		</div>
	)
}

export default PriceCalculator