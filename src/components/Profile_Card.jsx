import React from "react";
import {Row, Card, ListGroup, Button, ListGroupItem, Container} from "react-bootstrap";

const Profile_Card = ({nombre='Juan', email='juan@test.cl', asientos}) => {
    return(
        <Container style={{display: "inline-flex"}} className={"w-25"}>
            <Card className="shadow-lg" style={{color: "#000"}} border="secondary">
                <Card.Title style={{fontSize:30, textAlign: "center"}}>{nombre}</Card.Title>
                <Card.Subtitle className="mb-2">{email}</Card.Subtitle>
                <ListGroup.Item>
                    <Card.Title>Historial</Card.Title>
                    <Row>

                    </Row>
                </ListGroup.Item>
            </Card>
        </Container>
    );};

export default Profile_Card;