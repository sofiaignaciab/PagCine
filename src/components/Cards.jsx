import React, {useContext} from "react";
import {Row, Card, ListGroup, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";

const Cards = ({title, img, time, mainGenre}) => {
    const {logged} = useContext(AuthContext);
    return(
        <div className={"flex inline-flex w-[20vw]"}>
            <Card className="shadow-sm" style={{ color: "#000" }} border="secondary">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <div className={'m-[2px] text-black font-semibold text-3xl mb-2'}>{title}</div>
                    <Card.Subtitle className="mb-2 text-muted">{mainGenre + " - " + time}</Card.Subtitle>
                    <ListGroup.Item>
                        <Row>
                            {logged &&
                                <Link to={`/seatReservation/${title}`}>
                                    <Button variant="primary" size="lg">Comprar</Button>
                                </Link>
                            }
                            {!logged &&
                                <Link to={`/login`}>
                                    <Button variant="primary" size="lg">Comprar</Button>
                                </Link>
                            }
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <h1> </h1>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Button variant="primary" size="lg" href="/" disabled>Ver mas</Button>
                        </Row>
                    </ListGroup.Item>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Cards;