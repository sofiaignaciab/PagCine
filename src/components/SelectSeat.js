import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const SelectSeat = () => {
  return (
    <Container>
      <Row>
        <Col style={{ justifyContent: "flex-start" }}>
          fdsa
        </Col>
        <Col>
          fdsa
        </Col>
        <Col>
          fdjsal
        </Col>
      </Row>
    </Container>
  );
};

export default SelectSeat;

/* 

    <div>
      <Container style={{ paddingTop: 15, width: "500px" }}>
        <Row>
          <Col sm={8}>
            <Card>
              <Card.Img  src="https://picsum.photos/600/800" />
            </Card>
          </Col>
          <Col>
            <Row xs={1} md={5} >
              {Array.from({ length: 50 }).map((_, idx) => (
                <Col sm>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>

*/