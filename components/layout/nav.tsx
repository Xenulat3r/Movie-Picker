'use client'
import Link from "next/link"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

export default function NavBar({ loggedIn }: { loggedIn: boolean }) {


    return (
<Navbar bg="primary" expand="sm" data-bs-theme="dark" className="bg-body-primary">
 <Container>
   <Navbar.Brand as={Link} href={`/`}><h5>Movie--Picker</h5></Navbar.Brand>
   <Navbar.Toggle aria-controls="basic-navbar-nav" />
   <Navbar.Collapse id="basic-navbar-nav">
     <Nav className="me-auto">
{loggedIn && <Container><Nav.Link as={Link} href={'/dashboard'}> <h5>Dashboard</h5></Nav.Link></Container>}
{loggedIn && <Container><Nav.Link as={Link} href={'/account'}> <h5>Account</h5></Nav.Link></Container>}
 <Container><Nav.Link as={Link} href={'/discover'}> <h5>Discover</h5> </Nav.Link></Container>
 <Container><Nav.Link as={Link} href={'/search'}> <h5>Search</h5></Nav.Link></Container>
     </Nav>
   </Navbar.Collapse>
 </Container>
</Navbar>



    )
}