import React from "react";
import Seat from "./Seat";
import { Container, Row, Button } from "react-bootstrap";
import MovieScreen from "./MovieScreen";

const GenerateSeats = (seatNumbers) => {
  return (
    <Row>
      {seatNumbers.map((seatNumber) => {
        return <Seat seatno={seatNumber} key={seatNumber} />;
      })}
    </Row>
  );
};

const SeatMatrix = () => {
  return (
    <div>
      <h1> Película </h1>
      <h3> Fecha - Hora </h3>

      <MovieScreen />

      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ paddingBottom: 60 }}>
          {GenerateSeats(Array.from({ length: 6 }, (_, i) => i))}
          {GenerateSeats(Array.from({ length: 6 }, (_, i) => 6 + i))}
          {GenerateSeats(Array.from({ length: 6 }, (_, i) => 12 + i))}
          {GenerateSeats(Array.from({ length: 6 }, (_, i) => 18 + i))}
          {GenerateSeats(Array.from({ length: 6 }, (_, i) => 24 + i))}
          {GenerateSeats(Array.from({ length: 6 }, (_, i) => 30 + i))}
        </div>
      </Container>
      <Button variant="primary" size="lg">
        Comprar asientos
      </Button>
    </div>
  );
};

export default SeatMatrix;
