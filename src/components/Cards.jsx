import React from "react";
import {Row, Card, ListGroup, Button, ListGroupItem, Container} from "react-bootstrap";
import {Link} from "react-router-dom";

const Cards = ({title, img, time, mainGenre}) => {
    return(
        <div className={"w-25 flex inline-flex"}>
            <Card className="shadow-sm" style={{ color: "#000" }} border="secondary">
                <Card.Img variant="top" img src={img} />
                <Card.Body>
                    <Card.Title style={{ fontSize: 30, textAlign: "center" }}>{title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{mainGenre}</Card.Subtitle>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                        </div>
                        <small className="text-muted" style={{ fontSize: 17}}>{time}</small>
                    </div>
                    <ListGroup.Item>
                        <Row>
                            <Link to={`/seatReservation/${title}`}>
                                <Button variant="primary" size="lg">Comprar</Button>
                            </Link>
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
        </div>
    );
}

export default Cards;