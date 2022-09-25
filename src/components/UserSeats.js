import React from "react";
import Barrita from "./Barrita";
import MovieScreen from "./MovieScreen";
import Seat from "./Seat";
import { Container, Row, Button } from "react-bootstrap";

const GenerateSeats = (seatNumbers) => {
  return (
    <Row>
      {seatNumbers.map((seatNumber) => {
        return <Seat seatno={seatNumber} key={seatNumber} />;
      })}
    </Row>
  );
};

const UserSeats = () => {
  return (
    <div>
      <Barrita />

      <h1> Asientos comprados: </h1>
      <h3> Película </h3>
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
    </div>
  );
};

export default UserSeats;
