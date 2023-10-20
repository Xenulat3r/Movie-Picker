import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { GetToken } from '@/utils/getUser';
import LoginButton from './loginButton';

import { cookies } from 'next/headers'
import NavBar from './nav';


export default async function Header({loggedIn,session}:{loggedIn:boolean,session:string}){


    return(<>
<LoginButton loggedIn={loggedIn} session={session}  />
<NavBar loggedIn={loggedIn}  />

    </>)
}