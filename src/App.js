import logo from './logo.svg';
import Nav from "react-bootstrap/Nav";
import Routes from "react-bootstrap/Nav";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


import Login from './components/Login';
import Register from './components/Register';
import Galery from './components/Galery';
import { Component } from 'react';


function NavScrollExample() {
  return (
    <><Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">TICKETERA</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/home">Inicio</Nav.Link>
            <Nav.Link href="#action2">Mas vendidos</Nav.Link>
            <NavDropdown title="Categorias" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Accion</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Terror</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Romance</NavDropdown.Item>
              <NavDropdown.Item href="#action6">Drama</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Mi perfil" id="navbarScrollingDropdown">
              <NavDropdown.Item href="Login.js">Iniciar</NavDropdown.Item>
              <NavDropdown.Item href="#action8">Registrarse</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search" />
            <Button variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar><div className="App">
        <header className="App-header">
          <Galery />
        </header>
      </div></>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Galery />
//       </header>
//     </div>
//   );
// }


export default NavScrollExample;
