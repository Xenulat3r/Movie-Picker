import Link from "next/link"
import Nav from 'react-bootstrap/Nav';
import { useSessionContext} from '@/context/user';
import {useEffect,useState  }  from 'react'

export default function NavBar(){
  const { account } = useSessionContext()
  const [div, setDiv] = useState(<div></div>)


 const hasAccountTabs =    <div>  
    <Nav variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href={`/`} as={Link}>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
   
            <Nav.Link href={`/account`} as={Link} eventKey="disabled" >
              Account
            </Nav.Link>
         
          </Nav.Item>
        </Nav>
            </div>


 const noAccountTabs =  <div>  
<Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href={`/`} as={Link}>Home</Nav.Link>
      </Nav.Item>
    </Nav>
        </div>

useEffect(()=>{
if(account){
  setDiv(hasAccountTabs)
} else{
  setDiv(noAccountTabs)
}
},[account])

return div

    
}