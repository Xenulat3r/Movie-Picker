import Link from "next/link"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';

export default function NavBar({ loggedIn }: { loggedIn: boolean }) {


    return (
        <Navbar className="bg-body-tertiary">
           <Container> <Link href={'/'} className='nav-link'>Home</Link></Container>
           {loggedIn && <Container><Link href={'/dashboard'} className='nav-link'>Dashboard</Link></Container>}
           {loggedIn && <Container><Link href={'/account'} className='nav-link'>Account</Link></Container>}
           <Container><Link href={'/discover'} className='nav-link'>Discover</Link></Container>
            <Container><Link href={'/search'} className='nav-link'>Search</Link></Container>
            

        </Navbar>
    )
}