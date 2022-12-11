import {Link} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import {useContext} from "react";

const Barrita = () => {
  const {logged, user} = useContext(AuthContext);
  return (
      <div className={'navbar flex justify-between px-1 mb-4 bg-[#374151]'}>
        <div>
          <Link className={'px-[15px] text-white no-underline'} to={"/"}>CINEMA 🎟️</Link>
        </div>
        <div className={'flex justify-center mr-2 text-g'}>
            <Link to={'/basura'}>Hola</Link>
          <div className={'flex flex-col justify-center'}>
            {logged && <Link className={'px-[15px] text-white no-underline'} to={'/profile'}>{user.name}</Link> }
            {!logged && <Link className={'px-[15px] text-white no-underline'} to={'/login'}>Iniciar sesion</Link> }
          </div>
          <div className={'flex flex-col justify-center'}>
            <input placeholder={' Buscar...'} className={'w-[20vw] h-8 bg-white border-gray-700 rounded-lg text-black text-lg' } type={'text'}/>
          </div>
        </div>
      </div>
  );
};

/*
* <Container
          fluid
          style={{ paddingLeft: 0, paddingRight: 0, paddingBottom: 20 }}
      >
        <Navbar
            bg="dark"
            variant="dark"
            expand="lg"
            style={{ paddingLeft: 15, paddingRight: 15 }}
        >
          <Link to={"/"}>CINEMA 🎟️ </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <div className="flex-none gap-2"></div>
            <div>
              {logged && <Link to={'/profile'} className={"mr-4 hover:text-white"}>{user.name}</Link> }
              {!logged && <Link to={'/login'} className={"mr-4 hover:text-white"}>Iniciar sesion</Link> }
            </div>
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
      </Container>*/


export default Barrita;