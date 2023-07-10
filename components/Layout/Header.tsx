import { useEffect, useState } from 'react'
import { useSessionContext } from '@/Context/user';
import cookie from 'js-cookie'
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';


export default function Header() {

  const { getToken, name, avatar, logout, account } = useSessionContext()
  const [div, setDiv] = useState(<div></div>)

  const login = <Navbar className="bg-body-tertiary">
    <Container>
<Navbar.Brand></Navbar.Brand>
      <Button onClick={(() => { getToken() })}>Log in?</Button>
    </Container>
  </Navbar>
  


  const showAccount = <Navbar className="bg-body-tertiary">
    <Container>
      <Navbar.Brand >
        <div className="d-inline-block align-top avatar " style={{
         backgroundImage:`url(https://image.tmdb.org/t/p/original/${avatar})`
          }}/>

        Hi, {name}

      </Navbar.Brand><Button onClick={() => logout()}>Log out?</Button>
    </Container>
  </Navbar>



  useEffect(() => {

    if (name) {
      setDiv(showAccount)
    } else {
      setDiv(login)
    }
// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name])


  return div
}
