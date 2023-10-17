'use client'
import useSWR from 'swr'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {useState,useEffect} from 'react'
import PeopleResults from '@/components/search/peopleResults';
export default function PeopleSearch(){
    const myURL = process.env.NEXT_PUBLIC_URL
    const API = process.env.NEXT_PUBLIC_API
    const baseLink = `https://api.themoviedb.org/3/`
    const [peopleQuery,setPeopleQuery] = useState("")
    
    const [peopleResults,setPeopleResults] = useState([])    
    const fetcher = (url:string) => fetch(url).then((res) => res.json());
const peopleSearchLink = `${baseLink}search/person?api_key=${API}&language=us-en&page=1&include_adult=false&query=${peopleQuery}`

const { data, error, isLoading } =useSWR(peopleSearchLink,fetcher)
useEffect(()=>{
    if(data !== undefined){
     const {results} = data 

     setPeopleResults(results)

    }
    },[data])
    return(
     <div>

<InputGroup className="mb-3" >

<Form.Control
  autoFocus
  aria-label="Example text with button addon"
  aria-describedby="basic-addon1"
  as="input"
  value={peopleQuery}
  placeholder={"Search Cast & Crew"}
  onChange={(e)=>{ setPeopleQuery(e.target.value)}}
/>
</InputGroup>
 <PeopleResults data={peopleResults}/>
     </div>
    )
}