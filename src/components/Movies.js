import { List, ListItem } from "@mui/material";
import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Button,
  NavDropdown,
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
                          <Button variant="primary" size="lg" href="/asientos">
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


/* const Movies = () => {
  return (
    <Container>
      <Row xs={1} md={4} className="g-4" style={{paddingTop: 15}}>
        <Col>
        <Card className="mb-3" style={{ color: "#000"}} border="secondary">
          <Card.Img variant="top" img src={Siniestro} />
          <Card.Body>
            <Card.Title style={{ fontSize: 30, textAlign:"center"}}>
              Siniestro{" "}
            </Card.Title>
            <List>
              <Row>
                <Col>
                <Button variant="primary" size="lg" href="/asientos">
                  17 enero
                </Button>
                </Col>
                <Col>
                12:00
                </Col>
                <ListItem></ListItem>
                <Col>
                <Button variant="primary" size="lg" href="/asientos">
                  18 enero
                </Button>
                </Col>
                <Col>
                13:00
                </Col>
              </Row>
            </List>
          </Card.Body>
        </Card>
        </Col>
      </Row>
      <Row xs={1} md={4} className="g-4" style={{paddingTop: 15}}>
        <Col>
        <Card className="mb-3" style={{ color: "#000"}} border="secondary">
          <Card.Img variant="top" img src={Us} />
          <Card.Body>
            <Card.Title style={{ fontSize: 30, textAlign:"center"}}>
              Nosotros{" "}
            </Card.Title>
            <List>
              <Row>
                <Col>
                <Button variant="primary" size="lg" href="/asientos">
                  17 enero
                </Button>
                </Col>
                <Col>
                12:00
                </Col>
                <ListItem></ListItem>
                <Col>
                <Button variant="primary" size="lg" href="/asientos">
                  18 enero
                </Button>
                </Col>
                <Col>
                13:00
                </Col>
              </Row>
            </List>
          </Card.Body>
        </Card>
        </Col>
      </Row>
      <Row xs={1} md={4} className="g-4" style={{paddingTop: 15}}>
        <Col>
        <Card className="mb-3" style={{ color: "#000"}} border="secondary">
          <Card.Img variant="top" img src={SonComoNinhos} />
          <Card.Body>
            <Card.Title style={{ fontSize: 30, textAlign:"center"}}>
              Son Como Niños{" "}
            </Card.Title>
            <List>
              <Row>
                <Col>
                <Button variant="primary" size="lg" href="/asientos">
                  17 enero
                </Button>
                </Col>
                <Col>
                12:00
                </Col>
                <ListItem></ListItem>
                <Col>
                <Button variant="primary" size="lg" href="/asientos">
                  18 enero
                </Button>
                </Col>
                <Col>
                13:00
                </Col>
              </Row>
            </List>
          </Card.Body>
        </Card>
        </Col>
      </Row>
      <Row xs={1} md={4} className="g-4" style={{paddingTop: 15}}>
        <Col>
        <Card className="mb-3" style={{ color: "#000"}} border="secondary">
          <Card.Img variant="top" img src={HistoriasCruzadas} />
          <Card.Body>
            <Card.Title style={{ fontSize: 30, textAlign:"center"}}>
              Historias Cruzadas{" "}
            </Card.Title>
            <List>
              <Row>
                <Col>
                <Button variant="primary" size="lg" href="/asientos">
                  17 enero
                </Button>
                </Col>
                <Col>
                12:00
                </Col>
                <ListItem></ListItem>
                <Col>
                <Button variant="primary" size="lg" href="/asientos">
                  18 enero
                </Button>
                </Col>
                <Col>
                13:00
                </Col>
              </Row>
            </List>
          </Card.Body>
        </Card>
        </Col>
      </Row>
    </Container>
  );
}; */
