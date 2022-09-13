import React from "react";
import { Container, Card, Row, Col, Nav, NavDropdown, ListGroup, Button } from "react-bootstrap";

const Galery = () => {
  return(
    <Container>
      {/* <Nav className="justify-content-end" defaultActiveKey="/home" as="ul" style={{ fontSize: 23, paddingTop: 15 }}>
        <NavDropdown title="About" id="aboutDropdown">
          <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="My Account" id="accountDropdown">
          <NavDropdown.Item eventKey="4.1">Mi perfil</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2">Historial de compras</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav> */}

      <Row xs={1} md={4} className="g-4" style={{ paddingTop: 15 }} >
        {Array.from({ length: 6 }).map((_, idx) => (
          <Col>
            <Card className="mb-3" style={{ color: "#000" }} border="secondary">
              <Card.Img variant="top" src="https://picsum.photos/260/160" />
<<<<<<< HEAD
              <Card.Body>
                <Card.Title style={{ fontSize: 30 }} > Card title </Card.Title>
                <Card.Text style={{ fontSize: 18 }}>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>

                <Dropdown>
                  <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                    14 enero
                  </Dropdown.Toggle>

                  <Dropdown.Menu variant="dark">
                    {Array.from({ length: 6 }).map((n) => (
                    <Dropdown.Item href="#/"> { `Fecha` }  </Dropdown.Item>
=======
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
>>>>>>> 0b396719ab610a717c6061907ecf694665d9071a
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
<<<<<<< HEAD



=======
// mes dia - lugar, país - hora
>>>>>>> 0b396719ab610a717c6061907ecf694665d9071a
export default Galery;