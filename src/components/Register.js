import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Register = () => {
  return(
    <Container> 
      <Col className="d-flex justify-content-center">
        <Form className="w-50">
          <Row>
            <Col>
              <Form.Group contrsolId="registerName">
                <Form.Label> Name </Form.Label>
                <Form.Control type="texts" placeholder="Enter Name" />
              </Form.Group>  
            </Col>
            <Col>
              <Form.Group controlId="registerLastName">
                <Form.Label> Last Name </Form.Label>
                <Form.Control type="text" placeholder="Enter Last Name" />
              </Form.Group>  
            </Col>
          </Row>

          <Col>
            <Form.Group controlId="registerEmail">
              <Form.Label style={{ textAlign: "left" }} > Email address </Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="registerPassword">
              <Form.Label> Password </Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="registerConfirmPassword">
              <Form.Label> Confirm Password </Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>

            <Button variant="primary" type="submit" href="/home">
              Register
            </Button>
          </Col>
        </Form>
      </Col>
    </Container>
  );
}

export default Register;
