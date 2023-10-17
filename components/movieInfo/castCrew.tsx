'use client'
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Link from 'next/link';
export default function Cast({ cast,crew }: { cast: [{ id: string, name: string, character: string, profile_path: string }], crew : [{ id: string, name: string, job: string, profile_path: string }] }) {
    const imgLink = `https://image.tmdb.org/t/p/original/`
    
    return (
        <div >
        <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Cast</Accordion.Header>
        <Accordion.Body>
        <div className='flex flew-row flex-wrap'>
        {cast.map(item => 
            <Card style={{width:`5rem`}} className='m-1 text-center' key={item.id}>
               <Link href={`/cast/${item.id}`}><Card.Text>{item.name}</Card.Text></Link>
                {item.profile_path && <Link href={`/cast/${item.id}`}><Card.Img src={imgLink + item.profile_path} /></Link>}
                <Card.Text>
                    {item.character}
                </Card.Text>
            </Card>)}</div>
        </Accordion.Body>

      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Crew</Accordion.Header>
        <Accordion.Body>
        <div className='flex flew-row flex-wrap'>
        {crew.map(item => 
            <Card style={{width:`5rem`}} className='m-1 text-center' key={crew.indexOf(item)}>
               <Link href={`/cast/${item.id}`}><Card.Text>{item.name}</Card.Text></Link>
                {item.profile_path && <Link href={`/cast/${item.id}`}><Card.Img src={imgLink + item.profile_path} /></Link>}
                <Card.Text>
                    {item.job}
                </Card.Text>
            </Card>)}</div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>




        </div>
    )
}