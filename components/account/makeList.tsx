'use client'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { createList } from "@/utils/getLists"
import { useState } from 'react'
export default function MakeList({ session }:{session:string}) {
    const [name, setName] = useState("")
    return (
        <Card className="text-center p-2" style={{ width: `20rem` }}>
            <form onSubmit={(e) => createList(name, session)} className='flex flex-column justify-stretch'>
                <input type="text" placeholder="name" onChange={(e) => setName(e.target.value)} className='m-1 p-1 text-center' />
                <Card.Footer className='flex flex-column justify-stretch'>
                    <Button type="submit">Create List</Button></Card.Footer>
            </form>
        </Card>
    )
}