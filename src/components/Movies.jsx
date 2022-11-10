import React from "react";
import Hereditary from "./Imagenes/Hereditary.jpeg";
import HEUL from "./Imagenes/Heul.jpeg";
import Elcamino from "./Imagenes/Elcamino.jpeg";
import Forrest from "./Imagenes/Forrest.jpeg";
import LVEB from "./Imagenes/LVEB.jpeg";
import Siniestro from "./Imagenes/Siniestro.jpeg";
import YADT from "./Imagenes/YADT.jpeg";
import Midsommar from "./Imagenes/Midsommar.jpeg";
import {Container,Row,Col,Card,ListGroup,Button, ListGroupItem} from "react-bootstrap";

//<Card.Text style={{ fontSize: 18}}></Card.Text> para poner un resumen

const Movies = () => {
  return (
    <Container>
      <Row xs={1} md={4} className="g-4">
        <Col className="h-30">
        <Card className="shadow-sm" style={{ color: "#000" }} border="secondary">
        <Card.Img variant="top" img src={Hereditary} />
        <Card.Body>
        <Card.Title style={{ fontSize: 30, textAlign: "center" }}>Hereditary{" "}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Terror, +16</Card.Subtitle>
          <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
                </div>
                <small class="text-muted" style={{ fontSize: 17}}>2h 7m</small>
              </div>
              <ListGroup.Item>
           <Row>
                <Button variant="primary" size="lg" href="/">Comprar</Button>
           </Row>
        </ListGroup.Item>
        <ListGroup.Item>
           <Row>
                <h1> </h1>
           </Row>
        </ListGroup.Item>
        <ListGroupItem>
          <Row>
                <Button variant="primary" size="lg" href="/" disabled>Ver mas</Button>
          </Row>
        </ListGroupItem>
        </Card.Body>
        </Card>
        </Col>


        <Col className="h-30">
        <Card className="shadow-sm" style={{ color: "#000" }} border="secondary">
        <Card.Img variant="top" img src={Midsommar} />
        <Card.Body>
        <Card.Title style={{ fontSize: 30, textAlign: "center" }}>Midsommar{" "}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Suspenso/Terror, +16</Card.Subtitle>
          <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
                </div>
                <small class="text-muted" style={{ fontSize: 17}}>2h 51m</small>
              </div>
              <ListGroup.Item>
           <Row>
                <Button variant="primary" size="lg" href="/">Comprar</Button>
           </Row>
        </ListGroup.Item>
        <ListGroup.Item>
           <Row>
                <h1> </h1>
           </Row>
        </ListGroup.Item>
        <ListGroupItem>
          <Row>
                <Button variant="primary" size="lg" href="/" disabled>Ver mas</Button>
          </Row>
        </ListGroupItem>
        </Card.Body>
        </Card>
        </Col>


        <Col>
        <Card className="shadow-sm" style={{ color: "#000" }} border="secondary">
        <Card.Img variant="top" img src={LVEB} />
        <Card.Body>
        <Card.Title style={{ fontSize: 30, textAlign: "center" }}>La vida es bella{" "}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Belico/Drama</Card.Subtitle>
          <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
                </div>
                <small class="text-muted" style={{ fontSize: 17}}>1h 56m</small>
              </div>
              <ListGroup.Item>
           <Row>
                <Button variant="primary" size="lg" href="/">Comprar</Button>
           </Row>
        </ListGroup.Item>
        <ListGroup.Item>
           <Row>
                <h1> </h1>
           </Row>
        </ListGroup.Item>
        <ListGroupItem>
          <Row>
                <Button variant="primary" size="lg" href="/" disabled>Ver mas</Button>
          </Row>
        </ListGroupItem>
        </Card.Body>
        </Card>
        </Col>

        <Col>
        <Card className="shadow-sm" style={{ color: "#000" }} border="secondary">
        <Card.Img variant="top" img src={Forrest} />
        <Card.Body>
        <Card.Title style={{ fontSize: 30, textAlign: "center" }}>Forrest Gump{" "}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Drama/Romance</Card.Subtitle>
          <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
                </div>
                <small class="text-muted" style={{ fontSize: 17}}>2h 22m</small>
              </div>
              <ListGroup.Item>
           <Row>
                <Button variant="primary" size="lg" href="/">Comprar</Button>
           </Row>
        </ListGroup.Item>
        <ListGroup.Item>
           <Row>
                <h1> </h1>
           </Row>
        </ListGroup.Item>
        <ListGroupItem>
          <Row>
                <Button variant="primary" size="lg" href="/" disabled>Ver mas</Button>
          </Row>
        </ListGroupItem>
        </Card.Body>
        </Card>
        </Col>

        <Col>
        <Card className="shadow-sm" style={{ color: "#000" }} border="secondary">
        <Card.Img variant="top" img src={Siniestro} />
        <Card.Body>
        <Card.Title style={{ fontSize: 30, textAlign: "center" }}>Siniestro{" "}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Terror/Suspenso, +14</Card.Subtitle>
          <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
                </div>
                <small class="text-muted" style={{ fontSize: 17}}>1h 50m</small>
              </div>
              <ListGroup.Item>
           <Row>
                <Button variant="primary" size="lg" href="/">Comprar</Button>
           </Row>
        </ListGroup.Item>
        <ListGroup.Item>
           <Row>
                <h1> </h1>
           </Row>
        </ListGroup.Item>
        <ListGroupItem>
          <Row>
                <Button variant="primary" size="lg" href="/" disabled>Ver mas</Button>
          </Row>
        </ListGroupItem>
        </Card.Body>
        </Card>
        </Col>

        <Col>
        <Card className="shadow-sm" style={{ color: "#000" }} border="secondary">
        <Card.Img variant="top" img src={YADT} />
        <Card.Body>
        <Card.Title style={{ fontSize: 30, textAlign: "center" }}>Yo antes de ti{" "}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Romance/Drama, +12</Card.Subtitle>
          <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
                </div>
                <small class="text-muted" style={{ fontSize: 17}}>1h 50m</small>
              </div>
              <ListGroup.Item>
           <Row>
                <Button variant="primary" size="lg" href="/">Comprar</Button>
           </Row>
        </ListGroup.Item>
        <ListGroup.Item>
           <Row>
                <h1> </h1>
           </Row>
        </ListGroup.Item>
        <ListGroupItem>
          <Row>
                <Button variant="primary" size="lg" href="/" disabled>Ver mas</Button>
          </Row>
        </ListGroupItem>
        </Card.Body>
        </Card>
        </Col>

        <Col>
        <Card className="shadow-sm" style={{ color: "#000" }} border="secondary">
        <Card.Img variant="top" img src={HEUL} />
        <Card.Body>
        <Card.Title style={{ fontSize: 30, textAlign: "center" }}>Hasta el ultimo hombre{" "}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Belico/Drama, +12</Card.Subtitle>
          <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
          </div>
                <small class="text-muted" style={{ fontSize: 17}}>2h 19m</small>
          </div>
        <ListGroup.Item>
           <Row>
                <Button variant="primary" size="lg" href="/">Comprar</Button>
           </Row>
        </ListGroup.Item>
        <ListGroup.Item>
           <Row>
                <h1> </h1>
           </Row>
        </ListGroup.Item>
        <ListGroupItem>
          <Row>
                <Button variant="primary" size="lg" href="/" disabled>Ver mas</Button>
          </Row>
        </ListGroupItem>
        </Card.Body>
        </Card>
        </Col>

        <Col>
        <Card className="shadow-sm" style={{ color: "#000" }} border="secondary">
        <Card.Img variant="top" img src={Elcamino} />
        <Card.Body>
        <Card.Title style={{ fontSize: 30, textAlign: "center" }}>El camino{" "}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Drama/Crimen</Card.Subtitle>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
                </div>
                <small class="text-muted" style={{ fontSize: 17}}>2h 7m</small>
        </div>
        <ListGroup.Item>
           <Row>
                <Button variant="primary" size="lg" href="/">Comprar</Button>
           </Row>
        </ListGroup.Item>
        <ListGroup.Item>
           <Row>
                <h1> </h1>
           </Row>
        </ListGroup.Item>
        <ListGroupItem>
          <Row>
                <Button variant="primary" size="lg" href="/" disabled>Ver mas</Button>
          </Row>
        </ListGroupItem>
        </Card.Body>
        </Card>
        </Col>
      </Row>
      
    </Container>
  );
};

export default Movies;

/* <Container>
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
                          <Button variant="primary" size="sm" href="/select-seats">
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
    </Container> */