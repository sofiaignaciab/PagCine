import React from "react";
import { Container, Card, Row, Col, Nav, NavDropdown, ListGroup, Button } from "react-bootstrap";

const Galery = () => {
  return(
    <Container>
      <Nav className="justify-content-end" defaultActiveKey="/home" as="ul" style={{ fontSize: 23, paddingTop: 15 }}>
        <NavDropdown title="About" id="aboutDropdown">
          <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="My Account" id="accountDropdown">
          <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>

      <Row xs={1} md={4} className="g-4" style={{ paddingTop: 15 }} >
        {Array.from({ length: 6 }).map((_, idx) => (
          <Col>
            <Card className="mb-3" style={{ color: "#000" }} border="secondary">
              <Card.Img variant="top" src="https://picsum.photos/260/160" />
                <Card.Body>
                  <Card.Title style={{ fontSize: 30, textAlign: "center" }} > Película </Card.Title>
                  <ListGroup>
                    {Array.from({ length: 4 }).map((_, idx) => (
                    <ListGroup.Item>
                      <Row>
                        <Col>
                          <Button variant="primary" size="lg">
                            DÍA MES
                          </Button>
                        </Col>
                        <Col>
                          LUGAR HORA
                        </Col>
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
}
// mes dia - lugar, país - hora
export default Galery;