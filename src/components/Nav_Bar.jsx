import {Navbar,Container} from "react-bootstrap";

const Nav_Bar = () => {
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
                <Navbar.Brand href="/" fontSize='1000px'>CINEMA 🎟️ </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
            </Navbar>
        </Container>
    );
};

export default Nav_Bar;