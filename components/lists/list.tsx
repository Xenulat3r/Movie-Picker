'use client'
import { getDetails } from "@/utils/getLists"
import Link from "next/link"
import ListEdit from "./listEdit"
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
export default function List({ data, account }: { account: boolean, data: [{ id: string, name: string, description: string }] }) {


   return (<div className='flex flex-row justify-stretch' >
      {data.map((item:any) => <div className='m-1' key={item.id}>
         <Card style={{ width: '10rem'}}>
            <Card.Title className='text-center'>
               <h1>{item.name}</h1>
               </Card.Title>
            <Card.Body>
               <Card.Text>{item.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
               <Button href={`/lists/${item.id}`}variant="secondary">View</Button> {account && <Button variant="secondary" href={`/editLists/${item.id}`}>Edit</Button>}
            </Card.Footer>
         </Card>
      </div>)}
   </div>)

}