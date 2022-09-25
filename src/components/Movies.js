import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Button,
} from "react-bootstrap";

const Movies = () => {
  return (
    <Container>
      <Row xs={1} md={4} className="g-4" >
        {Array.from({ length: 12 }).map((_, idx) => (
          <Col>
            <Card className="mb-3" style={{ color: "#000" }} border="secondary">
              <Card.Img variant="top" src={`https://picsum.photos/180/255`} />
              <Card.Body>
                <Card.Title style={{ fontSize: 30, textAlign: "center" }}>
                  Película{" "}
                </Card.Title>
                <ListGroup>
                  {Array.from({ length: 2 }).map((_, idx) => (
                    <ListGroup.Item>
                      <Row>
                        <Col>
                          <Button variant="primary" size="lg" href="/select-seats">
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
