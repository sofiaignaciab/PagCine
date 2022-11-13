import React from "react";
import { Form, Button } from "react-bootstrap";
import {useState} from "react";

const Login = () => {

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
const onSubmit = (data) => {
  data.preventDefault();
  const email  = userData.email
  const password = userData.password

  fetch(`http://localhost:27017/api/users/login/${email+ "&" + password}`)
  .then(response => response.json())
  .then(result => console.log(result) ) //Login
  .catch(e => console.log(e))
}

  return(
    <div>
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
        </Form.Group>
        
        <Button variant="primary" type="submit" onClick={onSubmit}>Submit</Button>
      </Form>
    </div>
  );
}

export default Login;