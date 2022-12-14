import React, {useContext} from "react";
import { Form, Button } from "react-bootstrap";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import Barrita from "./Barrita";
import Cookies from "universal-cookie";

const Login = () => {
    const cookies = new Cookies();
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();

    //nuevo____________________________________________________
    const onLogin = (id, name, lastName, email, reserved_seats) => {

        login(id, name, lastName, email, reserved_seats);

        navigate('/', { replace: true });
    }
    //__________________________________________________________

    const [userData, setUserData] = useState({
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
    const onSubmit = async (data) => {
        data.preventDefault();
        const email  = userData.email
        const password = userData.password

        const response = await new Promise(resolve => {
            fetch('http://localhost:27017/api/users/login', {
                method: "POST",
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(
                    {
                        email: email,
                        password: password,
                    }
                )
            })
                .then(response => response.json())
                .then(result => resolve(result))
        })

        if (cookies.get('token') === undefined) {
            cookies.set('token', response.token, {maxAge: 999999})
        }

        if (response.data[0] === undefined) {
            alert('Usuario y/o contraseña incorrectos');
            return;
        }

        onLogin(response.data[0]._id, response.data[0].name, response.data[0].lastname, response.data[0].email, response.data[0].reserved_seats)
    }

    return(
        <div>
            <Barrita/>
            <Form className="w-25 m-auto">
                <Form.Group controlId="registerEmail">
                    <p><br></br></p>
                    <Form.Label style={{ textAlign: "left" }} > Email address </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name={'email'} onChange={setData} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="registerPassword">
                    <Form.Label> Password </Form.Label>
                    <Form.Control type="password" placeholder="Password" name={'password'} onChange={setData}/>
                    <Link to={"/register"} className={"text-sm"}>¿No tienes cuenta? Registrate</Link>
                </Form.Group>

                <Button variant="primary" type="submit" onClick={onSubmit} href="/">Submit</Button>
            </Form>
        </div>
    );
}

export default Login;