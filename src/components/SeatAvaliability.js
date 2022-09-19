import React from "react"
import Seat from './Seat'

const SeatAvailability = () => {
	return (
		<div className="row">
			Desocupados : <Seat seatColor="seat-grey" />
			Ocupados : <Seat seatColor="seat-black" />
		</div>
	)
}

export default SeatAvailability