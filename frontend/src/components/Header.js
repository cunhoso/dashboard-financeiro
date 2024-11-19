import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm mb-4">
      <Navbar.Brand className="ms-3">Dashboard</Navbar.Brand>
      <Nav className="ms-auto me-3">
        <Nav.Link href="#">Perfil</Nav.Link>
        <Nav.Link href="#">Configurações</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header;