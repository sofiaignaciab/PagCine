import {Row, Col, Form, Button } from "react-bootstrap";
import {useState} from "react";
import Barrita from "./Barrita"
import {useNavigate} from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        name: "",
        lastname: "",
        email: "",
        password: "",
    });

    const setData = (e) => {
        const fieldName = e.target.name;
        setUserData(data => ({
            ...data,
            [fieldName]: e.target.value,
        }))
    }

    const Registration = async(event) => {
        event.preventDefault();
        await fetch('http://35.168.134.176/api/users/register', {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(
                {
                    name: userData.name,
                    lastname: userData.lastname,
                    email: userData.email,
                    password: userData.password,
                    reservedseats: []
                }
            )
        })
            .then(response => response.json())

        navigate('/login', { replace: true });
    }

    return (
        <div className={'w-full'}>
            <Barrita/>
            <Col className="d-flex justify-content-center">
                <Form className="w-50">
                    <Row>
                        <Col>
                            <Form.Group contrsolId="registerName">
                                <Form.Label> Name </Form.Label>
                                <Form.Control type="texts" placeholder="Enter Name" name={'name'} onChange={setData} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="registerLastName">
                                <Form.Label> Last Name </Form.Label>
                                <Form.Control type="text" placeholder="Enter Last Name" name={'lastname'} onChange={setData} />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Col>
                        <Form.Group controlId="registerEmail">
                            <Form.Label style={{ textAlign: "left" }} > Email address </Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name={'email'} onChange={setData} />
                        </Form.Group>

                        <Form.Group controlId="registerPassword">
                            <Form.Label> Password </Form.Label>
                            <Form.Control type="password" placeholder="Password" name={'password'} onChange={setData}/>
                        </Form.Group>

                        <Button variant="primary" type="submit" onClick={Registration}>
                            Register
                        </Button>
                    </Col>
                </Form>
            </Col>
        </div>
    )
}

export default Register;