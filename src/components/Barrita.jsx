import {Nav,Navbar,Container,Form,Button} from "react-bootstrap";

// se puede agregar un boton de peliculas por estrenar
//  y mas adelante un boton para comprar comida

const Barrita = () => {
  return (
    <Container
      fluid
      style={{ paddingLeft: 0, paddingRight: 0, paddingBottom: 20 }}
    >
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        style={{ paddingLeft: 15, paddingRight: 15 }}
      >
        <Navbar.Brand href="/"font-size='1000px'>CINEMA </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/login">Perfil</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Nombre película"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Barrita;
