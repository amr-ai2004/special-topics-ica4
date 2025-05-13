import React from 'react';
import {Link} from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function MyNavbar({movies}) {
  return (
    <nav>
        {/* <Link to="/">Home</Link>
        <Link to="/movies">List of movies</Link> */}

        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/movies">List of movies</Nav.Link>
                { movies != undefined ? 
                  (<NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    {
                      movies.map((item, index)=>
                      (<NavDropdown.Item href={`/moviedetails/${item.id}`}>{item.title}</NavDropdown.Item>))
                    }
                  </NavDropdown>)
                  :(<p>Loading...</p>)
                }
                {/*
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </nav>
  )
}

