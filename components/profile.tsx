'use client'
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
export default function Profle({data}:{data:{name:string, profile_path:string, job:string, character:string}}){
    const imgLink = `https://image.tmdb.org/t/p/original/`

return(<>
<Card style={{width:`5rem`}} className='m-1 text-center'>
                <Card.Text>{data.name}</Card.Text>
<Card.Img src={imgLink + data.profile_path} />
                <Card.Text>
                    {data.job || data.character}
                </Card.Text>
            </Card>

</>)
}