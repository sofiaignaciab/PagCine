import React from "react";
import {Row, Card, ListGroup, Button, ListGroupItem, Col, Container} from "react-bootstrap";

const Alo = ({title, img, overview, time, mainGenre}) => {
    return(
        <Container className={"w-25"}>
            <Card className="shadow-sm" style={{ color: "#000" }} border="secondary">
                <Card.Img variant="top" img src={img} />
                <Card.Body>
                    <Card.Title style={{ fontSize: 30, textAlign: "center" }}>{title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{mainGenre}</Card.Subtitle>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                        </div>
                        <small class="text-muted" style={{ fontSize: 17}}>{time}</small>
                    </div>
                    <ListGroup.Item>
                        <Row>
                            <Button variant="primary" size="lg" href="/select-seats">Comprar</Button>
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
        </Container>
    );
}

export default Alo;