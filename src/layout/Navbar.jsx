import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavDropdown, Container } from "react-bootstrap";

export default function MyNavbar() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-secondary">
        <Container fluid>
            <Navbar.Brand href="/">
              <img src="../../public/Logo.png" alt="Logo"/>
            </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav"/>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <NavDropdown title="Agenda" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/agendar">Agendar</NavDropdown.Item>
                    <NavDropdown.Item href="/marcados">Marcados</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/historico">Histórico</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/perfil">Perfil</Nav.Link>
                </Nav>
              </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
