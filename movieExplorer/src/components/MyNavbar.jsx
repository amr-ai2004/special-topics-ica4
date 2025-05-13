import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function MyNavbar({movies}) {
  return (
    <nav>
        <Navbar data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/movies">List of movies</Nav.Link>
                <NavDropdown title="Movie Details" id="basic-nav-dropdown">
                {movies != undefined ? 
                      movies.map(item=>
                      (<NavDropdown.Item href={`/moviedetails/${item.id}`}>{item.title}</NavDropdown.Item>))
                  :(<NavDropdown.Item>Loading...</NavDropdown.Item>)
                }
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </nav>
  )
}

