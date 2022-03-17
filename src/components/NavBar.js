import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, NavDropdown, Navbar} from 'react-bootstrap';
import logo from '../logo.svg';
import './NavBar.css';

function NavBarHeader() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src= {logo}
                            width="50"
                            height="35"
                            className="d-inline-block align-top"
                        />{' '}
                        Sport Mode
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto NavBarText">
                            <Nav.Link href="#home">Inicio</Nav.Link>
                            <Nav.Link href="#link">Nosotros</Nav.Link>
                            <NavDropdown bg="secondary" title="Productos" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Zapatillas</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Remeras</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Camperas</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Todos</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )

}

export default NavBarHeader;