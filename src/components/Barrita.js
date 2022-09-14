import {
  Nav,
  Navbar,
  NavDropdown,
  Container,
  Form,
  Button,
} from "react-bootstrap";

const Barrita = () => {
  return (
    <>
      <Container fluid>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="/home">TICKETERA</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#">Mas vendidos</Nav.Link>
              <NavDropdown title="Categorias" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#">Accion</NavDropdown.Item>
                <NavDropdown.Item href="#">Terror</NavDropdown.Item>
                <NavDropdown.Item href="#">Romance</NavDropdown.Item>
                <NavDropdown.Item href="#">Drama</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Mi perfil" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/">Iniciar</NavDropdown.Item>
                <NavDropdown.Item href="/register">Registrarse</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Buscar"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Buscar</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  );
};

export default Barrita;
