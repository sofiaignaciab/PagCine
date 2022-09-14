import React from "react";
import { Container, Row, Col, Card, ListGroup, Button } from "react-bootstrap";

const Movies = () => {
  return (
    <Container>
      <Row xs={1} md={4} className="g-4" style={{ paddingTop: 15 }}>
        {Array.from({ length: 6 }).map((_, idx) => (
          <Col>
            <Card className="mb-3" style={{ color: "#000" }} border="secondary">
              <Card.Img variant="top" src="https://picsum.photos/260/160" />
              <Card.Body>
                <Card.Title style={{ fontSize: 30, textAlign: "center" }}>
                  {" "}
                  Película{" "}
                </Card.Title>
                <ListGroup>
                  {Array.from({ length: 4 }).map((_, idx) => (
                    <ListGroup.Item>
                      <Row>
                        <Col>
                          <Button variant="primary" size="lg">
                            DÍA MES
                          </Button>
                        </Col>
                        <Col>LUGAR HORA</Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Movies;
