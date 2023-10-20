'use client'
import Link from "next/link"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

export default function NavBar({ loggedIn }: { loggedIn: boolean }) {


    return (
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
         
          <Nav className="me-auto">
            <Nav.Link as={Link} href={`/`}>Home</Nav.Link>
            <Nav.Link as={Link} href={'/dashboard'}> Dashboard</Nav.Link>
            <Nav.Link as={Link} href={'/account'}> Account</Nav.Link>
            <Nav.Link as={Link} href={'/discover'}> Discover </Nav.Link>
            <Nav.Link as={Link} href={'/search'}> Search</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    )
}